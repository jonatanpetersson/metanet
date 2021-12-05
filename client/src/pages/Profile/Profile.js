import React, { useState, useEffect } from 'react';
import { loadProfile } from '../../api';
import ProfileWrapper from './ProfileWrapper/ProfileWrapper';

import './Profile.scss';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    loadProfile(setUserData);
  }, []);

  return (
    <main className="page__profile">
      {userData ? <ProfileWrapper userData={userData}/> : ''}
    </main>
  )
}

export default Profile
