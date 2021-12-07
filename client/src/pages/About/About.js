import React from 'react'
import './About.scss'
import { AboutForm } from './AboutForm/AboutForm'

const About = () => {
    return (
        <main className="page__about">
            <h1 className="page__about-title">About Us</h1>
            <p className="page__about-desc1">The Metanet Group is a leading virtual real estate company offering exposure to this fast-growing industry via the Metaverses. We facilitate the platform for virtual property along with a suite of virtual real estate centric services that are provided by pioneers of the crypto, blockchain and non-fungible token (NFT) industries.</p>
            <p className="page__about-desc2">WE CURRENTLY OFFER (OR PLAN TO OFFER) THE FOLLOWING SERVICES TO HELP YOU ENTER AND ENGAGE IN THE METAVERSE:</p>
            <ul className="page__about-list">
                <li>Buying and selling of virtual real estate across the Metaverses.</li>
                <li>Development of virtual land (we help bring your dream to life).</li>
                <li>Expert level consulting for all major metaverses.</li>
                <li>Finding a rental within the metaverses to fit any need.</li>
                <li>Property management of existing real estate.</li>
                <li>Marketing and advertising your business in the metaverse.</li>
            </ul>
            <AboutForm />
        </main>
    )
}

export default About
