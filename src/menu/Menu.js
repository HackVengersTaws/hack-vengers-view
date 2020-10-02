import React, { Component, useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Select, DatePicker, Collapse, InputNumber, Row, Button } from 'antd';
import './Menu.css'
import logo from '../img/logoTaws.png';
const { RangePicker } = DatePicker;
const { Panel } = Collapse;

//const [dates, setDates] = useState([]);

const { Sider } = Layout;
class Menu extends Component {
    handleChange = (value) => {
        console.log(`selected ${value}`);

    }

    onChange = (value) => {
        console.log('changed', value);
    };

    /*disabledDate = current => {
        if (!dates || dates.length === 0) {
          return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
        const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
        return tooEarly || tooLate;
      };*/

    render() {
        return (
            <Sider className="menu" breakpoint="lg" collapsedWidth="0" width="300">

                <div className="logo" >
                    <img src={logo} alt="Logo"  width="40%" height="auto"/>
                </div>
                <p className="titulos">Palabras clave</p>
                <div className="capa"><Select className="inputss" mode="tags" placeholder="Separados por Enter" onChange={this.handleChange} />   </div>

                <p className="titulos">Hashtag</p>
                <div className="capa"><Select className="inputss" mode="tags" placeholder="#" onChange={this.handleChange} />   </div>

                <p className="titulos">Usuario</p>
                <div className="capa"><Select className="inputss" mode="tags" placeholder="@" onChange={this.handleChange} />   </div>

                <p className="titulos">Menciones</p>
                <div className="capa"><Select className="inputss" mode="tags" placeholder="@" onChange={this.handleChange} />   </div>

                <p className="titulos">PAISES CORREGIR</p>
                <div className="capa"><Select className="inputss" mode="tags" placeholder="CORREGIR" onChange={this.handleChange} />   </div>

                <p className="titulos">Fecha de publicación</p>
                <div className="fecha"> <RangePicker

                /*disabledDate={this.disabledDate}
                onCalendarChange={value => {
                    setDates(value);
                }}*/
                /> </div>


                <div className="Adv">
                    <Collapse accordion className="BotonAdv"  >
                        <Panel header="Opciones Avanzadas">

                            <Row justify="space-between"> <p className="TextOcultas">Min seguidores</p>
                                <InputNumber size="small" min={0} defaultValue={0} onChange={this.onChange} /></Row>

                            <Row justify="space-between"> <p className="TextOcultas">Min Hashtag</p>
                                <InputNumber size="small" min={0} defaultValue={0} onChange={this.onChange} /></Row>

                            <Row justify="space-between"> <p className="TextOcultas">Min favoritos</p>
                                <InputNumber size="small" min={0} defaultValue={0} onChange={this.onChange} /></Row>

                            <Row justify="space-between"> <p className="TextOcultas">Min retweets</p>
                                <InputNumber size="small" min={0} defaultValue={0} onChange={this.onChange} /></Row>

                            <Row justify="space-between"> <p className="TextOcultas">Min respuestas</p>
                                <InputNumber size="small" min={0} defaultValue={0} onChange={this.onChange} /></Row>

                        </Panel>

                    </Collapse>
                </div>

                <div className="botonExt">
                    <Button className="boton" type="primary" >
                        Descargar
                    </Button>
                </div>

            </Sider >
        );
    }
}
export default Menu;