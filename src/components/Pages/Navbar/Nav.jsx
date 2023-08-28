import { useState } from 'react';
import './navbar.css'

import { Link } from "react-router-dom";

// importing icons
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    // toggle hamburger menu
    const toggleNav = () => {
        setTimeout(() => { setShowMediaIcons(!showMediaIcons)}, 200);
    }

    return (
        <>
            <nav className={showMediaIcons ? 'main-nav main-nav-mobile' : "main-nav"}>
                {/* logo */}
                <div className='logo'>
                    <h2>Eco-Cultural Club</h2>
                </div>
                {/* menu part */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <Link className="a" onClick={toggleNav} to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className="a" onClick={toggleNav} to='/events'>Events</Link>
                        </li>
                        <li>
                            <Link className="a" onClick={toggleNav} to='/galary'>Galary</Link>
                        </li>
                        <li>
                            <Link className="a" onClick={toggleNav} to='/teams'>Teams</Link>
                        </li>
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
            </nav>
        </>
    );
};

export default Nav;