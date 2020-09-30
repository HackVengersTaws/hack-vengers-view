import React, { Component } from 'react';
import { Layout, Select } from 'antd';
import './Menu.css'

const { Sider } = Layout;
class Menu extends Component {
    handleChange=(value)=> {
        console.log(`selected ${value}`);
      }

    render() {
        return (
            <Sider className="menu" breakpoint="lg" collapsedWidth="0" width="300">

                <div className="logo" />
                <p className="titulos">Palabras</p>
                <Select  mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={this.handleChange} />



            </Sider>
        );
    }
}
export default Menu;