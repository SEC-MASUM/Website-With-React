import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
    const [press, setPress] = useState(false);
    const [button, setButton] = useState(true);

    const handlePress = () => setPress(!press);
    const closeMobileMenu = () => setPress(false)

    const showButton =() => {
        if (window.innerWidth <=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3" />
                    </Link>

                    <div className="menu-icon" onClick={handlePress}>
                        <i className={press ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={press ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                        </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                        </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                        </Link>
                        </li>
                        <li>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                        </Link>
                        </li>

                    </ul>
                    
                        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>

        </>
    )
}

export default Navbar;
