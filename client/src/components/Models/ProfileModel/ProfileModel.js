import React from 'react';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../../actions/auth.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './ProfileModel.scss';
import defaultProfileImage from '../../../assets/img/avatar.jpeg'

export const ProfileModel = () => {
  const loggedInUser = useSelector(state => state.authorization)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = (ev) => {
    ev.preventDefault();
    dispatch(logoutAction());
    navigate('/');
  }
    return (
        <div className="profile__model-window">
            <div className="profile__model-wrapper">
                <Link to='/' title="Close" className="profile__model-close">
                    <span className="material-icons-outlined">close</span>
                </Link>
                <img className="profile__model__img" src={defaultProfileImage} alt="Profile img" />
                <h2 className="profile__model__title">{loggedInUser}</h2>
                <nav className="profile__model-nav">
                    <Link className="nav__link" to='/profile/account'>
                        <span className="nav__link-icon material-icons-outlined">home</span>
                        <p className="nav__link-font">Account</p>
                    </Link>
                    <Link className="nav__link" to='/offers'>
                        <span className="nav__link-icon material-icons-outlined">launch</span>
                        <p className="nav__link-font">Offers</p>
                    </Link>
                    <Link className="nav__link" to='/blog'>
                        <span className="nav__link-icon material-icons-outlined">favorite_border</span>
                        <p className="nav__link-font">Favorites</p>
                    </Link>
                    <Link className="nav__link nav_logout" to='/' onClick={logoutHandler}>
                        <span className="nav__link-icon material-icons-outlined">logout</span>
                        <p className="nav__link-font">Logout</p>
                    </Link>
                </nav>
            </div>
        </div>
    )
}
