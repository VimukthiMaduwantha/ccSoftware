import React, { useState } from "react";
import logo from '../images/logo-removebg.png'

function NavBarComp() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <div>
                <img
                    src={logo}
                    height='50px'
                    width='auto'

                />
                <span className="nav-logo">CCSofware Solutions</span>
            </div>


            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/service">Service</a>
                <a href="/contact">Contact</a>
                <a href="/contact">Contact</a>
                <a href="/contact">Contact</a>
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