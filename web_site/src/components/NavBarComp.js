import React, { useState } from "react";
// import logo from '../images/logo-removebg.png'
import logo from '../images/ccLogo.png'

function NavBarComp() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <div>
                <a href="/">
                    <img
                        src={logo}
                        height='80px'
                        width='auto'
                    />
                </a>
            </div>


            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/aboutus">Who Are We</a>
                <a href="/teammembers">Our Team</a>
                <a href="/service">Service</a>
                <a href="/contactus">Get In Touch</a>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
}

export default NavBarComp