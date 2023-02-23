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
        {/* icons supplied by icons8.com */}
        <div className="about-icons">
            <div>
                <img src={HTML}></img>
                <h5>HTML</h5>
            </div>
            <div>
                <img src={CSS}></img>
                <h5>CSS</h5>
            </div>
            <div>
                <img src={JS}></img>
                <h5>Javascript</h5>
            </div>
            <div>
                <img src={REACT}></img>
                <h5>React</h5>
            </div>
            <div>
                <img src={Node}></img>
                <h5>NodeJS</h5>
            </div>
            <div>
                <img src={Sass}></img>
                <h5>Sass</h5>
            </div>
        </div>

        <div className="about-text">
            <p>Hi there! My name is Robert Smith, and I am a front-end developer. My passion for web development began when a friend offered to show me some basic coding. As I learned more about the field, I realized that front-end development perfectly blends my love for visual creativity with my logical and analytical thinking.
            After self-teaching for a short while, I decided to pursue a more formal education in web development. I enrolled in a scholarship Department of Education web development bootcamp, where I honed my skills in HTML, CSS, JavaScript, NodeJS and React. I graduated from the program with an average grade of 100%.
            Now, I am eager to embark on my first professional opportunity in front-end development. I am excited to bring my creativity, technical knowledge and passion for learning and personal growth to a team that values collaboration, hard work and fun! Let's build beautiful and functional websites together!</p> 
        </div>

       </div>
    )
}

export default About;