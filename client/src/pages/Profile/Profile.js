import React, { useState, useEffect } from 'react';
import { loadProfile } from '../../api/fetch';
import ProfileWrapper from './ProfileWrapper/ProfileWrapper';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { verifyTokenAction } from '../../actions/auth';
import './Profile.scss';

const Profile = () => {
  const loggedInUser = useSelector(state => state.authorization);
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(verifyTokenAction());
    if (!loggedInUser) navigate('/login'); 
    setUserData(loggedInUser);
    loadProfile(setUserData);
  }, [loggedInUser])

  return (
    <main className="page__profile">
      {userData ? <ProfileWrapper userData={userData} /> : ''}
    </main>
  )
}

export default Profile
