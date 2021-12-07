import React, { useState, useEffect } from 'react';
import Offer from './Offer/Offer';
import './Offers.scss';
import { loadOffers } from '../../api/fetch.js';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { verifyTokenAction } from '../../actions/auth';

const Offers = () => {
  const loggedInUser = useSelector(state => state.authorization);
  const [offersData, setOffersData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(loggedInUser);
    dispatch(verifyTokenAction());
    loggedInUser ? loadOffers(loggedInUser, setOffersData) : navigate('/login');
  }, [dispatch, navigate, loggedInUser])

  return (
    <main className="page__offers">
      {!offersData ? <p>'No offers made or received'</p>:
        offersData.map(offerData => <Offer key={offerData._id} offerData={offerData} />)}
    </main>
  )
}

export default Offers
