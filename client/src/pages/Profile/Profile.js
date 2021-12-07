import React, { useState, useEffect } from 'react';
import { loadProfile, validateJwt } from '../../api/fetch';
import ProfileWrapper from './ProfileWrapper/ProfileWrapper';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../actions/auth';
import './Profile.scss';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    validateJwt(navigate, dispatch, logoutAction);
    loadProfile(setUserData);
  }, [dispatch, navigate]);

  return (
    <main className="page__profile">
      {userData ? <ProfileWrapper userData={userData}/> : ''}
    </main>
  )
}

export default Profile
