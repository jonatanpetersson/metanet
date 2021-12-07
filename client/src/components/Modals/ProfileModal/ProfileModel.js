import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileModel.scss';
import defaultProfileImage from '../../../assets/img/avatar.jpeg'

export const ProfileModel = () => {
    return (
        <div id="open-modal-profile" class="profile__modal-window">
            <div className="profile__model-wrapper">
                <a href="#" title="Close" class="profile__modal-close">
                    <span className="material-icons-outlined">close</span>
                </a>
                <img className="profile__modal__img" src={defaultProfileImage} alt="Profile img" />
                <h2 className="profile__modal__title">Milos Tanaskovic</h2>
                <nav className="profile__modal-nav">
                    <Link className="nav__link" to='/marketplace'>
                        <span className="nav__link-icon material-icons-outlined">home</span>
                        <p className="nav__link-font">View Profile</p>
                    </Link>
                    <Link className="nav__link" to='/blog'>
                        <span className="nav__link-icon material-icons-outlined">launch</span>
                        <p className="nav__link-font">New Post</p>
                    </Link>
                    <Link className="nav__link" to='/blog'>
                        <span className="nav__link-icon material-icons-outlined">star_border</span>
                        <p className="nav__link-font">Favorites</p>
                    </Link>
                    <Link className="nav__link nav_logout" to='/blog'>
                        <span className="nav__link-icon material-icons-outlined">logout</span>
                        <p className="nav__link-font">Logout</p>
                    </Link>
                </nav>
            </div>
        </div>
    )
}
