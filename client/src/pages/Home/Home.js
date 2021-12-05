import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';


const Home = () => {
  return (
    <main className="page__home">
        <h1 className="page__home-title">Welcome to Metanet</h1>
        <p className="page__home-text">Explore and invest in your metaverse future now</p>
        <Link className="page__home-link" to='/marketplace'>
        <button className="page__home-btn">EXPLORE</button>
        </Link>
    </main>
    )
}

          export default Home
