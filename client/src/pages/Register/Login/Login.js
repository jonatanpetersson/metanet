import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, Outlet } from "react-router-dom";
import { loginAction } from '../../../actions/auth';
import axios from 'axios';
import './Login.scss';
import '../Form.scss'

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ username: '', password: '', })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputHandler = ev => setLoginInfo({ ...loginInfo, [ev.target.name]: ev.target.value });
  const loginHandler = async ev => {
    ev.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', { username: loginInfo.username, password: loginInfo.password });
      setLoginInfo({ username: '', password: '' });
      dispatch(loginAction(response.headers.metanetauth));
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <main className="page__register">
      <h1 className="page__register-title">Login</h1>
      <form className="page__register__form" onSubmit={loginHandler}>
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

      {/* What is outlet?! //Jonatan */}
      <Outlet />

      {/* <Routes>
                <Route path="/login" element={<Navigate to="/signup"/>}/>
                <Route path="/signup" element={<SignUp />}/>
            </Routes> */}
    </main>
  )
}

export default Login
