import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap'
import './Menu.css'
class Menu extends Component {
    //className="menu"
    render() {
        return (
            <div className="menu">

                <h2 className="titulos">HackVengers</h2>

                <Form className="form1">
                    <Form.Row className="fila">
                        <Col>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control placeholder="First name" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="fila">
                        <Col>
                            <Form.Label>Apellido 1</Form.Label>
                            <Form.Control placeholder="Last name" />
                        </Col>
                        <Col>
                            <Form.Label>Apellido 2</Form.Label>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Form.Row>
                </Form>

            </div>
        );
    }
}
export default Menu;