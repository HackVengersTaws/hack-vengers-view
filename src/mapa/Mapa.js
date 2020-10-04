import React, { Component } from 'react';
import { Layout, } from 'antd';
import World from "@svg-maps/world";
import { SVGMap, CheckboxSVGMap, RadioSVGMap } from "react-svg-map";

import './Mapa.css'
class Mapa extends Component {

    render() {
        return (
            <Layout className="mapa">
                <RadioSVGMap  map={World} onChange={this.props.handleChangeMap} />
            </Layout>
        );
    }
}
export default Mapa;