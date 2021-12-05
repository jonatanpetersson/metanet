import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUserByUsername } from '../../api/querys';
import ProfileWrapper from './ProfileWrapper/ProfileWrapper';

import './Profile.scss';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  const loadProfile = async () => {
    try {
      const username = JSON.parse(Buffer.from(localStorage.jwt.split('.')[1], 'base64')).username;
      const query = getUserByUsername(username);
      const response = await axios.post('http://localhost:5000/graphql', { query });
      const user = response.data.data.getUserByUsername;
      setUserData(user);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <main className="page__profile">
      {userData ? <ProfileWrapper userData={userData}/> : ''}
    </main>
  )
}

export default Profile
