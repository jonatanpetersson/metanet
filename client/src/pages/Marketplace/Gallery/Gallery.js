import React, { useEffect, useState } from 'react';
import './Gallery.scss';
import axios from 'axios';
import Parcel from './Parcel/Parcel';
// import parcel from '../../../assets/img/parcel.png'

const Gallery = () => {
  const [parcelsData, setParcelsData] = useState(null);

  const loadMarketPlace = async () => {
    const query = `
    query {
      getParcels {
        _id,
        image,
        metaverse,
        user,
        price
      }
    }
    `;
    const response = await axios.post('http://localhost:5000/graphql', { query: query });
    const allParcels = response.data.data.getParcels;
    setParcelsData(allParcels);
    console.log(allParcels);
  }

  useEffect( () => {
    loadMarketPlace();
  }, []);



  return (
    <section className="gallery" >
      <ul className="gallery__wrapper">

      {parcelsData ? parcelsData.map(parcel => <Parcel key={parcel._id} parcel={parcel} />) : 'Loading marketplace'}

        {/* <li className="gallery__wrapper-item" >
          <img className="gallery__wrapper-img" src={parcel} alt="parcel" />
          <div className="gallery__wrapper__item" >
            <div className="gallery__wrapper__item-info" >
                <div>
                    <span>Decentraland</span>
                    <span className="verified-icons-color material-icons-outlined">verified</span>
                </div>
                <div>Owner ID</div>
            </div>
            <div className="gallery__wrapper__item-info">
                <div>Price</div>
                <div>10.000</div>
            </div>
          </div>
          <footer className="gallery__wrapper__footer">
                <div className="gallery__wrapper__footer-fav">
                    <span className="material-icons-outlined">favorite_border</span>
                    <span>75</span>
                </div>
          </footer>
        </li>
        <li className="gallery__wrapper-item" >
        <img className="gallery__wrapper-img" src={parcel} alt="parcel" />
          <div className="gallery__wrapper__item" >
            <div className="gallery__wrapper__item-info" >
                <div>
                    <span>Decentraland</span>
                    <span className="verified-icons-color material-icons-outlined">verified</span>
                </div>
                <div>Owner ID</div>
            </div>
            <div className="gallery__wrapper__item-info">
                <div>Price</div>
                <div>10.000</div>
            </div>
          </div>
          <footer className="gallery__wrapper__footer">
                <div className="gallery__wrapper__footer-fav">
                    <span className="material-icons-outlined">favorite_border</span>
                    <span>75</span>
                </div>
          </footer>
        </li>
        <li className="gallery__wrapper-item" >
        <img className="gallery__wrapper-img" src={parcel} alt="parcel" />
          <div className="gallery__wrapper__item" >
            <div className="gallery__wrapper__item-info" >
                <div>
                    <span>Decentraland</span>
                    <span className="verified-icons-color material-icons-outlined">verified</span>
                </div>
                <div>Owner ID</div>
            </div>
            <div className="gallery__wrapper__item-info">
                <div>Price</div>
                <div>10.000</div>
            </div>
          </div>
          <footer className="gallery__wrapper__footer">
                <div className="gallery__wrapper__footer-fav">
                    <span className="material-icons-outlined">favorite_border</span>
                    <span>75</span>
                </div>
          </footer>

        </li>
        <li className="gallery__wrapper-item" >
        <img className="gallery__wrapper-img" src={parcel} alt="parcel" />
          <div className="gallery__wrapper__item" >
            <div className="gallery__wrapper__item-info" >
                <div>
                    <span>Decentraland</span>
                    <span className="verified-icons-color material-icons-outlined">verified</span>
                </div>
                <div>Owner ID</div>
            </div>
            <div className="gallery__wrapper__item-info">
                <div>Price</div>
                <div>10.000</div>
            </div>
          </div>
          <footer className="gallery__wrapper__footer">
                <div className="gallery__wrapper__footer-fav">
                    <span className="material-icons-outlined">favorite_border</span>
                    <span>75</span>
                </div>
          </footer>

        </li> */}
      </ul>
    </section>
  )
}

export default Gallery
