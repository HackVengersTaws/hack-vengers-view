import React from 'react';
import Mapa from './mapa/Mapa';
import Menu from './menu/Menu';
import { Container, Row, Col } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <Container className="contenedor" fluid>
      <Row noGutters="true">
        <Col md={2}><Menu /></Col>
        <Col md={10}><Mapa /></Col>
      </Row>
    </Container>
  );
}

export default App;
