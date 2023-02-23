import React from "react";
import HTML from '../images/HTML.png';
import CSS from '../images/CSS.png';
import JS from '../images/Javascript.png';
import REACT from '../images/React.png';
import Node from '../images/Node.png';
import Sass from '../images/Sass.png';

const About = () => {
    return (
       <div className="about-container">
            <div className="about-icons">
                <img src={HTML}></img>
                <img src={CSS}></img>
                <img src={JS}></img>
                <img src={REACT}></img>
                <img src={Node}></img>
                <img src={Sass}></img>
            </div> 
            <div className="about-text">

            </div>
       </div>
    )
}

export default About;