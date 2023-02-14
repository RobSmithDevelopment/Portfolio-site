import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/Logo.webp'

const Nav = () => {
    return (
      <nav className="nav-container">
            <img className="nav-logo" src={logo}></img>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/work">My Work</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;