import React from "react";
import me from '../images/Myself.png'

const Main = () => {
    return (
        <div className="main-container">
            <img className="main-image" src={me}></img>
            <div className="vl"></div>
            <p>Hi I'm Rob</p>
        </div>
    )
}

export default Main;