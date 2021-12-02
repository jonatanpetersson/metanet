import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {

  const accessToken = useSelector(state => state.loginReducer);
  console.log(accessToken);

  return (
    <nav className="nav">
      <Link className="nav__link" to='/marketplace'>
        <span className="nav__link-icon material-icons-outlined">apps</span>
        <p className="nav__link-text">Marketsplace</p>
      </Link>
      <Link className="nav__link" to='/item'>
        <span className="nav__link-icon material-icons-outlined">category</span>
        <p className="nav__link-text">Item</p>
      </Link>
      <Link className="nav__link" to='/blog'>
        <span className="nav__link-icon material-icons-outlined">rss_feed</span>
        <p className="nav__link-text">Blog</p>
      </Link>
      <Link className="nav__link" to='/about'>
        <span className="nav__link-icon material-icons-outlined">info</span>
        <p className="nav__link-text">About</p>
      </Link>
      {/* render it when user is login */}
      {accessToken ? <Link className="nav__link" to='/profile'>
        <span className="nav__link-icon material-icons-outlined">face</span>
        <p className="nav__link-text">Profile</p>
      </Link> : ''}
      {/* render it by default */}
      {!accessToken ? <Link className="nav__link" to='/login'>
        <span className="nav__link-icon material-icons-outlined">login</span>
        <p className="nav__link-text">Login</p>
      </Link> : ''}
    </nav>
  )
}

export default Nav
