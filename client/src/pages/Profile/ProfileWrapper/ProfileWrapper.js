import React from 'react';
import './ProfileWrapper.scss';
import ProfileImage from './ProfileImage/ProfileImage';
import ProfileForm from './ProfileForm/ProfileForm';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileSocial from './ProfileSocial/ProfileSocial';
import LogoutBtn from '../../../components/Buttons/LogoutBtn/LogoutBtn';

const ProfileWrapper = ({ userData }) => {
    return (
        <section className="profile__form-wrapper">
            <ProfileImage image={userData.image ? userData.image : ''} />
            <ProfileInfo user={userData.user} email={userData.email} />
            <ProfileSocial />
            <ProfileForm />
            <LogoutBtn />
        </section>
    )
}

export default ProfileWrapper
