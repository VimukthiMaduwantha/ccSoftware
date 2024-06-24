import React, { useState } from "react";
// import logo from '../images/logo-removebg.png'
import logo from '../images/ccLogo.png'

// function NavBarComp() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     return (
//         <div className="Navbar">
//             <div>
//                 <a href="/">
//                     <img
//                         src={logo}
//                         height='80px'
//                         width='auto'
//                     />
//                 </a>
//             </div>

//             <div className={`nav-items ${isOpen && "open"}`}>
//                 <a href="/aboutus">Who Are We</a>
//                 <a href="/teammembers">Our Team</a>
//                 <div
//                     className="dropdown"
//                     onMouseEnter={() => setIsDropdownOpen(true)}
//                     onMouseLeave={() => setIsDropdownOpen(false)}
//                 >
//                     <a href="/#">Service</a>
//                     <div className={`dropdown-menu ${isDropdownOpen && "open"}`}>
//                         <a href="/service1">Service 1</a>
//                         <a href="/service2">Service 2</a>
//                         <a href="/service3">Service 3</a>
//                         <a href="/service4">Service 4</a>
//                     </div>
//                 </div>
//                 <a href="/projects">Projects</a>
//                 <a href="/contactus">Get In Touch</a>
//             </div>
//             <div
//                 className={`nav-toggle ${isOpen && "open"}`}
//                 onClick={() => setIsOpen(!isOpen)}
//             >
//                 <div className="bar"></div>
//             </div>
//         </div>
//     );
// }

// function NavBarComp() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     return (
//         <div className="Navbar">
//             <div>
//                 <a href="/">
//                     <img
//                         src={logo}
//                         height='80px'
//                         width='auto'
//                     />
//                 </a>
//             </div>

//             <div className={`nav-items ${isOpen && "open"}`}>
//                 <a href="/aboutus">Who Are We</a>
//                 <a href="/teammembers">Our Team</a>
//                 <a href="/projects">Projects</a>
//                 <a href="/contactus">Get In Touch</a>
//                 <div
//                     className="dropdown"
//                     onMouseEnter={() => setIsDropdownOpen(true)}
//                     onMouseLeave={() => setIsDropdownOpen(false)}
//                 >
//                     <a href="/#">Service</a>
//                     <div className={`dropdown-menu ${isDropdownOpen && "open"}`}>
//                         <a href="/service1">Service 1</a>
//                         <a href="/service2">Service 2</a>
//                         <a href="/service3">Service 3</a>
//                         <a href="/service4">Service 4</a>
//                     </div>
//                 </div>
//             </div>
//             <div
//                 className={`nav-toggle ${isOpen && "open"}`}
//                 onClick={() => setIsOpen(!isOpen)}
//             >
//                 <div className="bar"></div>
//             </div>
//         </div>
//     );
// }

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
                    <a >Service</a>
                    <div className={`dropdown-menu ${isDropdownOpen && "open"}`}>
                        <a href="/service1">Web Development</a>
                        <a href="/service2">Mobile Development</a>
                        <a href="/service3">Product Design</a>
                        <a href="/service4">Digital Marketing</a>
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
