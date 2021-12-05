import React from 'react';
import './ProfileImage';
import dummyImage from '../../../../assets/img/defaultProfileImage.svg'

const ProfileImage = ({ image }) => {
    return (
        <section className="profile__image">
            <img src={image ? image : dummyImage} alt="Profile" />
        </section>
    )
}

export default ProfileImage
