import React, { useState } from 'react';
import { createOffer } from '../../../api/fetch';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { verifyTokenAction } from '../../../actions/auth.js';
import './ItemTrading.scss'
import Eth from '../../../assets/img/eth.svg';

const ItemTrading = ({ parcelData }) => {
  const loggedInUser = useSelector(state => state.authorization);
  const [inputData, setInputData] = useState({ ...parcelData, bidder: loggedInUser });
  const [form, setForm] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputData = ev => setInputData({ ...inputData, [ev.target.name]: ev.target.value });
  const toggleOfferHandler = () => !loggedInUser ? navigate('/login') : setForm(1);
  const submitOfferHandler = (ev) => {
    ev.preventDefault();
    dispatch(verifyTokenAction());
    if (loggedInUser) {
      createOffer(inputData);
      setForm(2)
    };
  };

  return (
    <section className="item__trading">
      <p className="item__trading-price">Asking price</p>
      <div className="item__trading-info">
        <span><img className="item__trading-img" alt="Ethereum" src={Eth} /></span>
        <span className="item__trading-display">{parcelData.price} ETH</span>
      </div>
      <div className="item__trading-btngroup">
        <a href={parcelData.external_url} target="_blank" rel="noreferrer" className="item__trading-btnbuy">View on official site</a>
        {(form === 0) ? <button className="item__trading-btnoffer" onClick={toggleOfferHandler} >{loggedInUser ? 'Make offer' : 'Log in to make offer'}</button>
          : (form === 1) ? <form className="page__register__form" onSubmit={submitOfferHandler} autoComplete="off">
            <label htmlFor="parcelid">Make your offer</label>
            <input className="page__register__form-text" type="text" name="offer" placeholder="Offer" onChange={handleInputData} required />
            <input className="page__register__form-text" type="text" name="message" placeholder="Message to owner (optional)" onChange={handleInputData} />
            <input className="page__register__form-btn" type="submit" value="Send offer" />
          </form>
            : <div className="item__trading-success">
              <span className="material-icons-outlined" >task_alt</span>
              <p> Offer sent</p>
            </div>}
      </div>
    </section>
  )
}

export default ItemTrading
