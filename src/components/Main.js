import React from "react";
import me from '../images/Myself.png'

const Main = () => {
    return (
        <div className="main-container">
            <img className="main-image" src={me}></img>
            <div className="vl"></div>
            <div className="main-text">
                <h1 className="main-text-h1">Hi, I'm Robert Smith!</h1>
                <h2 className="main-text-h2">Junior Frontend Developer</h2>
                <button className="main-text-button">See My Projects</button>
            </div>
        </div>
    )
}

export default Main;