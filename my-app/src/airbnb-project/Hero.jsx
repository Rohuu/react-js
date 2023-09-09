import React from "react";
import grid from "./img/photo-grid.png";

function Hero(){
    return(
        <div className="hero-container">
                <img src={grid} alt="" className="photo-grid"/>
                <h1 className="hero-heading">Online Mac Jac Experiences</h1>
                <p className="hero-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque totam aliquam odio eaque. Corporis rerum cumque, 
                     sit quae ipsum magnam.</p>
        </div>
    )
}

export default Hero;