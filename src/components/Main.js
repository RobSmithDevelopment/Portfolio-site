import React from "react";
import { Link } from 'react-router-dom';
import me from '../images/Myself.png';
import arrow from '../images/right-arrow.png';

const Main = () => {
    return (
        <div className="main-container">
            <img className="main-image" src={me}></img>
            <div className="vl"></div>
            <div className="main-text">
                <h1 className="main-text-h1">Hi, I'm Robert Smith!</h1>
                <h2 className="main-text-h2">Junior Frontend Developer</h2>
                <button className="main-text-button"><Link to="/work" className="main-text-button">See My Projects <img src={arrow} className="main-arrow"></img></Link></button>
            </div>
        </div>
    )
}

export default Main;