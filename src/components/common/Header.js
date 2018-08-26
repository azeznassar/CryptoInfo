import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import logo from './assets/logo.png'
import './Header.scss';

const Header = () => {
    return (
        <div className="headerContainer">
            <Link to="/CryptoInfo/">
            <img src={logo} alt="Logo" className="headerLogo" />
            </Link>

            <Search />
        </div>
    );
}

export default Header;