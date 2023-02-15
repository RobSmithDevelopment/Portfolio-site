import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/Logo.webp';
import menu from '../images/menu.png';

const Nav = () => {

    

    return (
      <nav className="nav-container">
            <img className="nav-logo" src={logo}></img>

            <ul>
                <li className="nav-li"><Link to="/">Home</Link></li>
                <li className="nav-li"><Link to="/about">About Me</Link></li>
                <li className="nav-li"><Link to="/work">My Work</Link></li>
                <li className="nav-li"><Link to="/contact">Contact Me</Link></li>
            </ul>

            <img className="nav-menu" src={menu}></img>
        </nav>
    )
}

export default Nav;