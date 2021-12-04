import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.scss';
import '../Form.scss'

const SignUp = () => {
  const [signupInfo, setSignupInfo] = useState({ username: '', password: '' });

  const inputHandler = ev => setSignupInfo({ ...signupInfo, [ev.target.name]: ev.target.value });
  const signupHandler = async ev => {
    ev.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/auth/signup', { username: signupInfo.username, password: signupInfo.password});
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <main className="page__register" >
      <h1 className="page__register-title">Join Metanet</h1>
      <p className="page__register__form-join" >
        <span>Already have an account? </span>
        <Link to="/login">Log in</Link>
      </p>

      <form className="page__register__form" onSubmit={signupHandler}>
        <div>
          <label htmlFor="fname">First name</label>
          <input className="page__register__form-text" type="text" name="fname" />
          <label htmlFor="lname">Last name</label>
          <input className="page__register__form-text" type="text" name="lname" />
        </div>

        <label htmlFor="email">Email address</label>
        <input className="page__register__form-text" type="text" name="email" placeholder="Please provide your email address" />
        
        <label htmlFor="username">Username <span className="page__register__form-info">(only letters, numbers, and underscores)</span> </label>
        <input className="page__register__form-text" type="text" name="username" placeholder="Please provide username" onChange={inputHandler} required />

        <label htmlFor="password">Password <span className="page__register__form-info">(min. 6 char)</span> </label>
        <input className="page__register__form-text" type="password" name="password" placeholder="Please provide password" onChange={inputHandler} required />

        <input className="page__register__form-btn" type="submit" value="Signup" />
      </form>

    </main>
  )
}

export default SignUp
