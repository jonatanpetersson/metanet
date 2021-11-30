import React from 'react'
import { Link } from 'react-router-dom';
import './SignUp.scss';
import '../Register.scss'

const SignUp = () => {
    return (
        <main className="page__register" >
            <h1 className="page__register-title">Join Metanet</h1>
            <p className="page__register__form-join" >
                <span>Already have an account?</span>
                <Link to="login">Login</Link>
            </p>

            <form className="page__register__form">
                <div>
                <label for="fname">First name</label>
                <input className="page__register__form-text" type="text" name="fname" required />
                <label for="lname">Last name</label>
                <input className="page__register__form-text" type="text" name="lname" required />
                </div>

                <label for="email">Email address</label>
                <input className="page__register__form-text" type="text" name="email" placeholder="Please provide your email address" required />

                <label for="username">Username <span className="page__register__form-info">(only letters, numbers, and underscores)</span> </label>
                <input className="page__register__form-text" type="text" name="username" placeholder="Please provide username" required />

                <label for="password">Password <span className="page__register__form-info">(min. 6 char)</span> </label>
                <input className="page__register__form-text" type="password" name="password" placeholder="Please provide password" required />

                <input className="page__register__form-btn" type="submit" value="Signup" />
            </form>

        </main>
    )
}

export default SignUp
