import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getParcelsQuery } from '../../../api/querys';
import axios from 'axios';
import Parcel from './Parcel/Parcel';
import './Gallery.scss';

const Gallery = () => {
  const [parcelsData, setParcelsData] = useState(null);

  const loadMarketplace = async () => {
    const query = getParcelsQuery();
    const response = await axios.post('http://localhost:5000/graphql', { query });
    const allParcels = response.data.data.getParcels;
    setParcelsData(allParcels);
  }

  useEffect(() => {
    loadMarketplace();
  }, []);

  return (
    <section className="gallery" >
      <ul className="gallery__wrapper">
        {!parcelsData
          ? 'Loading marketplace'
          : parcelsData.map(parcel =>
            <Link key={parcel._id} className="gallery__item-link" to={`/marketplace/${parcel._id}`}>
              <Parcel data-id={parcel._id} parcel={parcel} />
            </Link>
          )}
      </ul>
    </section>
  )
}

export default Gallery
