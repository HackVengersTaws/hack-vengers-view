import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../../images/logoTaws.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Nav_icon() {
    return (
        <li className="nav-icon">
            <a target="_blank" href="https://www.facebook.com/tawsespol"><FontAwesomeIcon icon={faFacebook} color="beige"/></a>
            <a target="_blank" href="https://twitter.com/tawsespol"><FontAwesomeIcon icon={faTwitter}  color="beige"/></a>
            <a target="_blank" href="https://www.instagram.com/taws_espol/"><FontAwesomeIcon icon={faInstagram} color="beige" /></a>
            <a target="_blank" href="https://github.com/Taws-Espol/ "><FontAwesomeIcon icon={faGithubAlt} color="beige" /></a>
        </li>
    );
}

function Navbar() {

    return (
        <>
            <nav className='navbar'>
                <div className="logoTaws" >
                    <img src={logo} alt="Logo" width="45" height="auto" />
                </div>
                <div className='navbar-container' >
                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' >
                                INICIO
                            </Link>
                        </li>
                        <li className='nav-item'>
                        <a target="_blank" href="https://taws.espol.edu.ec/about" className='nav-links' >ACERCA DE</a>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Contact' className='nav-links'>
                                CONTACTOS
                            </Link>
                        </li>
                    </ul>
                </div>

                <Nav_icon />
            </nav>
        </>
    );
}

export default Navbar;

