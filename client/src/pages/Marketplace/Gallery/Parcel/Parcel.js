import React from 'react';
import './Parcel.scss';

const Parcel = ({ parcel }) => {
  const { image, metaverse, user, price } = parcel;

  return (
    <li className="gallery__wrapper-item" >
      <img className="gallery__wrapper-img" src={image} alt="Parcel" />
      <div className="gallery__wrapper__item" >
        <div className="gallery__wrapper__item-info" >
          <div>
            <span>{metaverse.replace(metaverse[0], metaverse[0].toUpperCase())}</span>
            <span className="verified-icons-color material-icons-outlined">verified</span>
          </div>
          <div>{user}</div>
        </div>
        <div className="gallery__wrapper__item-info">
          <div>Price</div>
          <div>{price}</div>
        </div>
      </div>
      <footer className="gallery__wrapper__footer">
        <div className="gallery__wrapper__footer-fav">
          <span className="material-icons-outlined">favorite_border</span>
          <span>75</span>
        </div>
      </footer>
    </li>
  )
}

export default Parcel
