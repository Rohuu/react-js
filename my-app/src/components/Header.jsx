import React from "react"

function Header(){
    return(
        <header>
                <nav className="nav">
                    <img src="./logo192.png" className="nav-logo" />
                    <ul className="nav-items">
                         <li>Pricing</li>
                        <li>About</li>
                        <li>Teams</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;