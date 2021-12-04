import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.scss';
import axios from 'axios';
import Parcel from './Parcel/Parcel';
// import parcel from '../../../assets/img/parcel.png'

const Gallery = () => {
  const [parcelsData, setParcelsData] = useState(null);

  const loadMarketplace = async () => {
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
  }

  useEffect(() => {
    loadMarketplace();
  }, []);

  return (
    <section className="gallery" >
      <ul className="gallery__wrapper">

        {parcelsData ? parcelsData.map(parcel =>
          <Link key={parcel._id} className="gallery__item-link" to={`/marketplace/${parcel._id}`}>
            <Parcel data-id={parcel._id} parcel={parcel} />
          </Link>
        ) : 'Loading marketplace'}
      </ul>
    </section>
  )
}

export default Gallery
