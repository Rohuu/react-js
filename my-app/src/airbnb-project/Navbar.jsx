import React from "react";
import logoimage from "./img/airbnb-logo.png";

function Navbar(){
    return(
        <nav>
            <div>
                <img src={logoimage} alt="" className="nav-logo"/>
            </div>
        </nav>
    )
}

export default Navbar;