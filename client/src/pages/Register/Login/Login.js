import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from '../../../actions/auth';
import { login } from '../../../api/fetch.js';
import './Login.scss';
import '../Form.scss'

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ username: '', password: '', })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputHandler = ev => setLoginInfo({ ...loginInfo, [ev.target.name]: ev.target.value });
  const loginHandler = async ev => {
    ev.preventDefault();
    login(loginInfo, setLoginInfo, dispatch, navigate, loginAction);
  }

  return (
    <main className="page__register">
      <h1 className="page__register-title">Login</h1>
      <form className="page__register__form" onSubmit={loginHandler} autoComplete="off">
        <label htmlFor="email">Username</label>
        <input className="page__register__form-text" type="text" name="username" placeholder="Please provide your username" onChange={inputHandler} required />
        <label htmlFor="password">Password</label>
        <input className="page__register__form-text" type="password" name="password" placeholder="Please provide your password" onChange={inputHandler} required />
        <input className="page__register__form-btn" type="submit" value="Login" />
      </form>
      <p className="page__register__form-join" >
        <span>Don't have an account? </span>
        <Link to="/signup">Sign up</Link>
      </p>
    </main>
  )
}

export default Login
