import React, { Component } from 'react';
import RegistroIg from "./RegistroIg"
import Nav from '../../home/components/Navbar'

export default class Instagram extends Component {
    constructor(props) {
        super(props);
          this.state = {
            n_publications: 0,
            link_search: '',
            user: '',
            password: ''
          };
        }
    render() {
        return (
          <>
          <Nav/>
          <RegistroIg/ >
          </>
        );
    }
}