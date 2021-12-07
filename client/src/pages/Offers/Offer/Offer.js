import React, { useState } from 'react';
import Replies from './Replies';
import './Offer.scss';

const Offer = ({ offerData }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="offer">
      <div className="offer__main">
        <div className="offer__main-bidder">
          <p>Offer from <b>{offerData.bidder}</b></p>
        </div>
        <div className="offer__main-info">
          <div className="offer__main-parcel">
            <h3>{offerData.name}</h3>
            <p>Owned by: <b>{offerData.owner}</b></p>
          </div>
          <div className="offer__main-price">
            <h3>Offer: {offerData.offer} ETH</h3>
            <p>Asking price: <b>{offerData.price} ETH</b></p>
          </div>
        </div>
        <span className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}>
        </span>
        <div className={`accordion-item offer__main-expand ${!isOpen ? "collapsed" : ""}`}>
          <Replies offerData={offerData} />
        </div>
      </div>


    </section>
  )
}

export default Offer
