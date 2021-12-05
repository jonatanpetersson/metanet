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
    <button onClick={logoutHandler}>
      Log out
    </button>
  )
}

export default Logout
