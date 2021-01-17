import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [press, setPress] = useState(false);

    const   handlePress = () => setPress(!press);

    const closeMobileMenu = () => setPress(false)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3"/>
                    </Link>
                </div>
                <div className="menu-icon" onClick={handlePress}>
                    <i className={press ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={press ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>

                </ul>
            </nav>
         
        </>
    )
}

export default Navbar;
