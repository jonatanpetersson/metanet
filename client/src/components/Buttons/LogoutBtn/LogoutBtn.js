import React from 'react';
import { logoutAction } from '../../../actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import './LogoutBtn.scss';

const Logout = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logoutAction());
    navigate('/');
  }

  return (
    <button className="logout-btn" onClick={logoutHandler}>Logout</button>
  )
}

export default Logout
