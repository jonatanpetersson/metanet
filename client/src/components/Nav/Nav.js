import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
    return (
        <nav>
            <Link to='/marketplace'>Marketplace</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/about'>About</Link>
            <Link to='/account'>Account</Link>
        </nav>
    )
}

export default Nav
