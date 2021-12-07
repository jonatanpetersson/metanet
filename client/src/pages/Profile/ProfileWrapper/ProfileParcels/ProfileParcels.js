import React from 'react'
import { Parcel } from './Parcel/Parcel';

import './ProfileParcels.scss';
import '../ProfileWrapper.scss';

export const ProfileParcels = () => {
    return (
        <section className="profile profile__parcels">
            <h4 className="profile__parcels-title">My Parcels</h4>
            <ul className="profile__parcels__wrapper">
                <Parcel />
            </ul>
        </section>
    )
}
