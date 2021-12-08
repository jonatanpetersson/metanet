import React from 'react';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../../actions/auth.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './ProfileModel.scss';
import defaultProfileImage from '../../../assets/img/avatar.jpeg'
import { profileModel } from '../../../actions/models.js';

export const ProfileModel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isProfileOpen = useSelector(state => state.models);

  const logoutHandler = () => {
    dispatch(logoutAction());
    navigate('/');
  }

  const handleCloseModel = () => {
    dispatch(profileModel(isProfileOpen))
  }
    return (
        <div className={`profile__model-window ${isProfileOpen ? "profile__model-window-open" : "profile__model-window-close"}`}>
            <div className="profile__model-wrapper">
                <button title="Close" className="profile__model-close" onClick={handleCloseModel}>
                    <span className="material-icons-outlined">highlight_off</span>
                </button>
                <img className="profile__model__img" src={defaultProfileImage} alt="Profile img" />
                <h2 className="profile__model__title">Milos Tanaskovic</h2>
                <nav className="profile__model-nav">
                    <Link className="nav__link" to='/profile/account' onClick={handleCloseModel}>
                        <span className="nav__link-icon material-icons-outlined">home</span>
                        <p className="nav__link-font nav__provile">Account</p>
                    </Link>
                    <Link className="nav__link" to='/offers' onClick={handleCloseModel}>
                        <span className="nav__link-icon material-icons-outlined">launch</span>
                        <p className="nav__link-font nav__provile">Offers</p>
                    </Link>
                    <Link className="nav__link" to='/blog' onClick={handleCloseModel}>
                        <span className="nav__link-icon material-icons-outlined">favorite_border</span>
                        <p className="nav__link-font nav__provile">Favorites</p>
                    </Link>
                    <Link className="nav__link nav_logout" to='/' onClick={logoutHandler}>
                        <span className="nav__link-icon material-icons-outlined">logout</span>
                        <p className="nav__link-font nav__provile">Logout</p>
                    </Link>
                </nav>
            </div>
        </div>
    )
}
