import React from 'react';
import './ProfileInfo.scss'
import '../ProfileWrapper.scss';

const ProfileInfo = ({ user, username, email }) => {
    return (
        <section className="profile profile__info">
            <h1 className="profile__info-user">{user}</h1>
            <h3 className="profile__info-username">{username}</h3>
            <p className="profile__info-email">{email}</p>
        </section>
    )
}

export default ProfileInfo
