import React from 'react';
import './ProfileForm.scss';
import '../ProfileWrapper.scss';

const ProfileForm = () => {
    return (
        <section className="profile profile__form">
            <form className="profile__form__addmore">
                <div>
                    <label htmlFor="firstname">First Name: </label>
                    <input className="profile__form__addmorer-text" type="text" name="firstname" placeholder="Please provide your First Name" required/>
                </div>
                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input className="profile__form__addmore-text" type="text" name="lastname" placeholder="Please provide your Last Name"/>
                </div>
                <div>
                    <label htmlFor="aboutme">About Me: </label>
                    <textarea className="profile__form__addmore-text" type="text" name="aboutme" placeholder="Please provide your store"/>
                </div>
                <div>
                    <label htmlFor="twitter">Twitter: </label>
                    <input className="profile__form__addmorer-text" type="text" name="twitter" placeholder="Please provide your Twitter"/>
                </div>
                <div>
                    <label htmlFor="facebook">Facebook: </label>
                    <input className="profile__form__addmorer-text" type="text" name="facebook" placeholder="Please provide your Facebook"/>
                </div>
                <div>
                    <label htmlFor="instagram">Instagram: </label>
                    <input className="profile__form__addmorer-text" type="text" name="instagram" placeholder="Please provide your Instagram"/>
                </div>

                <input className="profile__form__addmore-btn" type="submit" value="Save changes" />
            </form>
        </section>
    )
}

export default ProfileForm
