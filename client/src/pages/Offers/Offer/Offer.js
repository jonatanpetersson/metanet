import React, { useState } from 'react';
import { updateOffer } from '../../../api/fetch';
import { useSelector } from 'react-redux';
import './Offer.scss';

const Offer = ({ offerData }) => {
  const loggedInUser = useSelector(state => state.authorization);
  const [inputData, setInputData] = useState({
    parcel_id: offerData.parcel_id,
    user: loggedInUser
  });

  const handleInputData = ev => setInputData({ ...inputData, [ev.target.name]: ev.target.value });
  const handleSubmit = (ev) => {
    ev.preventDefault();
    updateOffer(inputData);
  }

  return (
    <section className="offers">
      <div>
        <h1>Parcel: {offerData.name}</h1>
        <p>Price: {offerData.price} eth</p>
        <p>Owner: {offerData.owner}</p>
      </div>

      <div className="offers__offer-wrapper">
        <div className="offers__offer">
          <div>
            <h3>
              {offerData.offer} eth offered by {offerData.bidder}</h3>
            {offerData.message ? <h4><i>"{offerData.message}"</i></h4> : ''}
          </div>
        </div>
      </div>

      {!offerData.replies ? '' :
        <ul className="offers__offer-replies">
          {offerData.replies.map((reply, idx) => <li key={idx} className="offers__offer-replies-reply">
            <div className="offers__offer-replies-reply-text">{reply.reply}</div>
            <p className="offers__offer-replies-reply-user">{reply.user}</p>
          </li>)}
        </ul>}

      <form className="offers__offer-form" onSubmit={handleSubmit}>
        <input className="offers__offer-form-text" type="text" name="reply" onChange={handleInputData} required />
        <input className="offers__offer-form-submit" type="submit" value=">" />
      </form>
    </section>
  )
}

export default Offer
