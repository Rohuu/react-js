import React from "react";
import logoImage from "../images/logo192.png";

function ReactSiteNavbar(){
    return(
        <nav className="nav-items"> 
                <img src={logoImage} className="nav-icon"/>
                <h3 className="nav-logo-text">ReactFacts</h3>
                <h4 className="nav-title">React Course - Project 1 </h4>
        </nav>
    )
}

export default ReactSiteNavbar;