import React, { Component } from 'react';
import { Layout,  } from 'antd';
import Taiwan from "@svg-maps/world";
import { SVGMap, CheckboxSVGMap,RadioSVGMap } from "react-svg-map";

import './Mapa.css'
class Mapa extends Component {
    render() {
        return (  
            <Layout className="mapa">
        
                <RadioSVGMap  map={Taiwan} />
       

            </Layout>
        );
    }
}
export default Mapa;