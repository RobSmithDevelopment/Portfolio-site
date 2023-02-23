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
                <div><img src={HTML}></img></div>
                <div><img src={CSS}></img></div>
                <div><img src={JS}></img></div>
                <div><img src={REACT}></img></div>
                <div><img src={Node}></img></div>
                <div><img src={Sass}></img></div>
            </div>
            
            

            

            <div className="about-text">

            </div>
       </div>
    )
}

export default About;