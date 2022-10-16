import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='nav-container'>
                    <Link className='link-style' to='/'>Home</Link>
                    <Link className='link-style' to='/shops'>Shops</Link>
            </nav>
        </div>
    );
};

export default Header;