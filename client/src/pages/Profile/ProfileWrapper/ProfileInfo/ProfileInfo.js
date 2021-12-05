import React from 'react';
import './ProfileInfo.scss'

const ProfileInfo = ({ user, email }) => {
    return (
        <div>
            ProfileInfo
            {user}
            {email}
        </div>
    )
}

export default ProfileInfo
