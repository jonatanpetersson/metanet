import React from 'react'
import './AboutForm.scss';
import '../../Profile/ProfileWrapper/ProfileForm/ProfileForm.scss';

export const AboutForm = () => {
    return (
        <section className="profile__form">
            <h2 className="profile__form-title">Contact Us:</h2>
            <form className="profile__form__addmore" autoComplete="off">
                <div>
                    <label htmlFor="name">Your Name: </label>
                    <input className="profile__form__addmore-text" type="text" name="name" placeholder="Please provide your name" required/>
                </div>
                <div>
                    <label htmlFor="email">Your Email: </label>
                    <input className="profile__form__addmore-text" type="text" name="email" placeholder="Please provide your email" required/>
                </div>
                <div>
                    <label htmlFor="message">Your Message: </label>
                    <textarea className="profile__form__addmore-text" type="text" name="message" placeholder="Please provide your message"/>
                </div>

                <input className="profile__form__addmore-btn" type="submit" value="Send" />
            </form>
        </section>
    )
}
