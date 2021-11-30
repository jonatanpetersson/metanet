import React from 'react';
import { Link, Outlet, Route, Routes, Navigate } from "react-router-dom";
// import SignUp from '../SignUp/SignUp';
import './Login.scss';
import '../Register.scss'

const Login = () => {
  return (
    <main className="page__register">
      <h1 className="page__register-title">Login</h1>
      <form className="page__register__form">
        <label for="email">Email address</label>
        <input className="page__register__form-text" type="text" name="email" placeholder="Please provide your email address" required />
        <label for="password">Password</label>
        <input className="page__register__form-text" type="password" name="password" placeholder="Please provide your password" required />
        <input className="page__register__form-btn" type="submit" value="Login" />
      </form>
      <p className="page__register__form-join" >
        <span>Don't have an account?</span>
        <Link to="signup">Join</Link>
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
