import React, { Component } from 'react';
import Apps from "./Apps"
import NavBar from "./Navbar"
import '../css/AppsInfo.css'

const AppsInfo = () => {
    return (
        <div className="IntroApp">
            <NavBar />
            <div className='IntroApp'>
                <h1 className="text-welcome">¡Bienvenido, selecciona una app para empezar!</h1>
            </div>
            <Apps />
        </div>
    );
}
export default AppsInfo;

