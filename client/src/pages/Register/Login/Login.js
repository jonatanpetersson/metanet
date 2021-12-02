import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet, Route, Routes, Navigate } from "react-router-dom";
import { loginAction } from '../../../actions/auth';
import axios from 'axios';
import './Login.scss';
import '../Form.scss'

const Login = () => {
  const dispatch = useDispatch();

  const loginHandler = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        username: 'reza',
        password: 'password1234'
      });
      console.log(response.headers.metanetauth);
      dispatch(loginAction(response.headers.metanetauth));
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <main className="page__register">
      <h1 className="page__register-title">Login</h1>
      <form className="page__register__form" onSubmit={loginHandler}>
        <label for="email">Email address</label>
        <input className="page__register__form-text" type="text" name="email" placeholder="Please provide your email address" required />
        <label for="password">Password</label>
        <input className="page__register__form-text" type="password" name="password" placeholder="Please provide your password" required />
        <input className="page__register__form-btn" type="submit" value="Login" />
      </form>
      <p className="page__register__form-join" >
        <span>Don't have an account? </span>
        <Link to="/signup">Sign up</Link>
      </p>

      <Outlet />

      {/* <Routes>
                <Route path="/login" element={<Navigate to="/signup"/>}/>
                <Route path="/signup" element={<SignUp />}/>
            </Routes> */}
    </main>
  )
}

export default Login
