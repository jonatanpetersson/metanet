import React from 'react';
import './ProfileWrapper.scss';
import ProfileImage from './ProfileImage/ProfileImage';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfileParcels } from './ProfileParcels/ProfileParcels';
import ProfileForm from './ProfileForm/ProfileForm';
import ProfileSocial from './ProfileSocial/ProfileSocial';
import LogoutBtn from '../../../components/Buttons/LogoutBtn/LogoutBtn';

const ProfileWrapper = ({ userData }) => {
    return (
        <section className="profile__form-wrapper">
            <ProfileImage image={userData.image ? userData.image : ''} />
            <ProfileInfo user={userData.user} email={userData.email} />
            {/* <ProfileParcels /> */}
            {/* <ProfileSocial /> */}
            <ProfileForm />
            <LogoutBtn />
        </section>
    )
}

export default ProfileWrapper
