import React, { useState } from "react";
// import logo from '../images/logo-removebg.png'
import logo from '../images/ccLogo.png'

function NavBarCompNew() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="Navbar">
            <div>
                <a href="/">
                    <img
                        src={logo}
                        height='80px'
                        width='auto'
                        alt="logo"
                    />
                </a>
            </div>

            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/aboutus">Who Are We</a>
                <a href="/teammembers">Our Team</a>
                <a href="/projects">Projects</a>
                <div
                    className="dropdown"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <a href="#">Service</a>
                    <div className={`dropdown-menu ${isDropdownOpen && "open"}`}>
                        <a href="/webDevelopment">Web Development</a>
                        <a href="/mobileDevelopment">Mobile Development</a>
                        <a href="/digitalMarketing">Product Design</a>
                        <a href="/digitalMarketing">Digital Marketing</a>
                    </div>
                </div>
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


export default NavBarCompNew;
