import React, { Component, useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Select, DatePicker, Collapse, InputNumber, Row, Button, Input, Divider } from 'antd';
import '../css/Menu.css'
import logo from '../../images/logoTw_Page.png';
import { UserOutlined, NumberOutlined } from '@ant-design/icons';
import moment from 'moment';
const { RangePicker } = DatePicker;
const { Panel } = Collapse;
const { Option } = Select;
//const [dates, setDates] = useState([]);

const { Sider } = Layout;
class Menu extends Component {


    /*disabledDate = current => {
        if (!dates || dates.length === 0) {
          return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
        const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
        return tooEarly || tooLate;
      };*/
    disabledDate = (current) => {
        // Can not select days before today and today
        return current && current > moment().endOf('day');
    }
    render() {

        return (
            <Sider className="menu" breakpoint="lg" collapsedWidth="0" width="300">

                <div className="logoTw" >
                    <img src={logo} alt="Logo" width="35%" height="auto" />
                </div>
                <p className="titulos">Palabras claves</p>
                <div className="capa">
                    <Select
                        className="inputss"
                        mode="tags"
                        placeholder="Separados por Enter"
                        onChange={this.props.handleChangePalabras}
                    />
                </div>

                <p className="titulos">Hashtag</p>
                <div className="capa">
                    <Select
                        className="inputss"
                        mode="tags"
                        placeholder="#"
                        onChange={this.props.handleChangeHashtag}
                    />
                </div>

                <p className="titulos">Usuario</p>

                <div className="capa">
                    <Input
                        value={this.props.username}
                        className="inputss"
                        prefix={<UserOutlined />}
                        onChange={this.props.handleChangeUser}
                    />
                </div>

                <p className="titulos">Menciones</p>
                <div className="capa">
                    <Select
                        className="inputss"
                        mode="tags"
                        placeholder="@"
                        onChange={this.props.handleChangeMenciones}
                    />
                </div>

                <p className="titulos">País</p>
                <div className="capa">
                    <Select
                        showSearch
                        className="inputss"
                        optionFilterProp="children"
                        placeholder="Seleccione un País"
                        onChange={this.props.handleChangePais}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        value={this.props.country}
                    >
                        <Option value="Ecuador">Ecuador</Option>

                    </Select>

                </div>

                <p className="titulos">Fecha de publicación</p>
                <div className="fecha">
                    <RangePicker
                        onChange={this.props.handleChangeDate}
                        disabledDate={this.disabledDate}
                    />
                </div>

                <div className="Adv">
                    <Collapse accordion className="BotonAdv"  >
                        <Panel header="Opciones Avanzadas">

                            <Row justify="space-between" align="middle"  >
                                <p className="TextOcultas">Min seguidores</p>
                                <InputNumber size="small" min={0} defaultValue={0} onChange={this.props.handleChangeMinSeg} />

                                <p className="TextOcultas">Min Hashtag</p>
                                <InputNumber size="small" min={0} defaultValue={0} onChange={this.props.handleChangeMinHash} />
                                <p className="TextOcultas">Min favoritos</p>
                                <InputNumber size="small" min={0} defaultValue={0} onChange={this.props.handleChangeMinFav} />
                                <p className="TextOcultas">Min retweets</p>
                                <InputNumber size="small" min={0} defaultValue={0} onChange={this.props.handleChangeMinRet} />
                                <p className="TextOcultas">Min respuestas</p>
                                <InputNumber size="small" min={0} defaultValue={0} onChange={this.props.handleChangeMinRes} />
                            </Row>

                        </Panel>

                    </Collapse>
                </div>

                <div className="botonExt">
                    <Button className="boton" type="primary" onClick={this.props.handleClickModal} >
                        ¡ANALIZAR!
                    </Button>
                </div>

            </Sider >
        );
    }
}
export default Menu;