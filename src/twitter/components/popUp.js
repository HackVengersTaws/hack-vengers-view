import React , { Component } from 'react';
import '../css/popUp.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const consumer_key = "UMqWhrvhnvlriQjUGsEdeFBun"
const consumer_secret = "wKqdKBJsntpqd03EmPEMfyMf4FZnGF05RbF2oG80MxgMAr9Kui"
const access_token = "229639629-yXLcOQJlI9U8f6qqCStZtufUv9x3b2wqpwwdLsqW"
const access_token_secret = "rggSaGyuw6TOtfdg0tQsuXQAZdq6SIApeB5vs6Shv9wry"

class popUp extends Component{

  constructor(props) {
    super(props);
      this.state = {
        popUp: false,
        consumer_key: '',
        consumer_secret: '',
        access_token: '',
        access_token_secret: ''
      };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({
      consumer_key: event.target.consumer_key,
      consumer_secret: event.target.consumer_secret,
      access_token: event.target.access_token,
      access_token_secret: event.target.access_token_secret
    });
     if ((this.state.consumer_key == consumer_key) && (this.state.consumer_secret == consumer_secret)&& (this.state.access_token == access_token)&& (this.state.access_token_secret == access_token_secret)){
      alert("Bien Hecho");
     }
     else{
      alert("F");
     }

    event.preventDefault();
  }
  state={
    abierto: false,
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }
  render(){

    const modalStyles={
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    return(
      <form onSubmit={this.handleSubmit}>
      <div className="principal">
        <div className="secundario">
      <Button color="success" onClick={this.abrirModal}>Mostrar Modal</Button>

      </div></div>

      <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader>
          Iniciar Sesión
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="usuario">Usuario</Label>
            <Input type="text" id="usuario"/> 
          </FormGroup>
          <FormGroup>
            <Label for="password">Contraseña</Label>
            <Input type="text" id="password"/> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="primary" type="Submit">Iniciar Sesión</Button>
            <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
      </form>
    )
  }
}

export default popUp;

/*
<Modal isOpen={this.state.popUp} style={modalStyles}>
          <ModalHeader>
            Iniciar Sesión
        </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="usuario">Usuario</Label>
              <Input type="text" id="usuario" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input type="text" id="password" />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary">Iniciar Sesión</Button>
            <Button color="secondary" onClick={this.handleClickModal}>Cerrar</Button>
          </ModalFooter>
        </Modal>
*/