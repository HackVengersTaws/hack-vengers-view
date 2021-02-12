import React, { Component } from 'react';
import RegistroFb from "./RegistroFb"
import Nav from '../../home/components/Navbar'
import axios from 'axios';

export default class Facebook extends Component {

  constructor(props) {
    super(props);
    this.state = {

      visible: false,
      cargando: true,
      keywords: [],
      hashtags: [],
      username: "",
      mencions: [],
      n_publications: 0,
      link_search: '',
      password: ''
    }
  }

  handleClickModal = () => {
    this.setState({
      visible: true,
    })

    console.log({
      hashtags: this.state.hashtags.join(),
      mencions: this.state.mencions.join(),
      keywords: this.state.keywords.join(),
      username: this.state.username,
      n_publications: this.state.n_publications,
      link_search: this.state.link_search,
      password: this.state.password,
    })
    axios.post(`http://127.0.0.1:8000/filtros/`,
      {
        hashtags: this.state.hashtags.join(),
        mencions: this.state.mencions.join(),
        keywords: this.state.keywords.join(),
        username: this.state.username,
        n_publications: this.state.n_publications,
        link_search: this.state.link_search,
        password: this.state.password,
      })
      .then(res => {
        console.log(res)} )
        }

  handleChangeKeys = (value) => {
    this.setState({
      keywords: value
    })
  }

  handleChangeHashtag = (value) => {
    this.setState({
      hashtags: value
    })
  }
  handleChangeUser = (e) => {
    console.log(e)
    this.setState({
      username: e.target.value
    })
  }
  handleChangeMencions = (value) => {
    this.setState({
      mencions: value
    })
  }
  render() {
    console.log(this.state)
    return (
      <>
        <Nav />
        <RegistroFb handleChangeKeys={this.handleChangeKeys} handleChangeUser={this.handleChangeUser}
        handleChangeHashtag={this.handleChangeHashtag} handleChangeMencions={this.handleChangeMencions}/>
      </>
    );
  }
}

