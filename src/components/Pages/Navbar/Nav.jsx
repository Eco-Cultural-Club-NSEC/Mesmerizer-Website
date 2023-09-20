import { useState } from 'react';
import './navbar.css'

import { Link } from "react-router-dom";

// importing icons
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [activeitem, setisactive] = useState("/");

    // toggle hamburger menu
    const toggleNav = (item) => {
        setTimeout(() => { setShowMediaIcons(!showMediaIcons) }, 200);
        setisactive(item);
    }

    return (
        <>
            <nav className={showMediaIcons ? 'main-nav main-nav-mobile' : "main-nav"}>
                {/* logo */}
                <div className='logo'>
                    <h2> Eco <br /> Cultural <br /> Club of NSEC</h2>
                </div>
                {/* menu part */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        {["Home", "Events", "Gallery", "Teams"].map((item) => (
                            <>
                                <li>
                                    <Link
                                        className={`menu-item ${item === activeitem ? "active" : ""}`}
                                        onClick={() => toggleNav(item)}
                                        to={item === "Home" ? `/` : `/${item.toLowerCase()} `}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            </>
                        ))}
                        {/* ---------- OR --------- */}
                        {/* <li>
                            <Link className={`a ${activeitem === 1 ? "active" : ""}`} onClick={() => toggleNav(1)} to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className={`a ${activeitem === 2 ? "active" : ""}`} onClick={() => toggleNav(2)} to='/events'>Events</Link>
                        </li>
                        <li>
                            <Link className={`a ${activeitem === 3 ? "active" : ""}`} onClick={() => toggleNav(3)} to='/gallery'>Gallery</Link>
                        </li>
                        <li>
                            <Link className={`a ${activeitem === 4 ? "active" : ""}`} onClick={() => toggleNav(4)} to='/teams'>Teams</Link>
                        </li> */}
                        <li className='btn-li'>
                            <Link onClick={toggleNav} href='/pass'>
                                <button className='btn'>
                                    Grab Your Passes
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* hamburger menu */}
                <div
                    className={showMediaIcons ? "hamburger-menu rotate-menu" : "hamburger-menu"}>
                    <a onClick={toggleNav} href='#'>
                        {showMediaIcons ? <RxCross2 color='#0bc3c0' /> : <GiHamburgerMenu color='#0bc3c0' />}
                    </a>
                </div>
            </nav >
        </>
    );
};

export default Nav;