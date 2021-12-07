import React from 'react';
import './ProfileImage';
import '../ProfileWrapper.scss';
import dummyImage from '../../../../assets/img/defaultProfileImage.svg'

const ProfileImage = ({ image }) => {
    return (
        <section className="profile profile__image">
            <img src={image ? image : dummyImage} alt="Profile" />
        </section>
    )
}

export default ProfileImage
