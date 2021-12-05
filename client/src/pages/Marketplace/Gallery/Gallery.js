import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Parcel from './Parcel/Parcel';
import { CircularProgress } from '../../../components/CircularProgress/CircularProgress';
import { loadMarketplace } from '../../../api'
import './Gallery.scss';

const Gallery = () => {
  const [parcelsData, setParcelsData] = useState(null);

  useEffect(() => {
    loadMarketplace(setParcelsData);
  }, []);

  return (
    <section className="gallery" >
      <ul className="gallery__wrapper">
        {!parcelsData
          ? <>
              <CircularProgress />
              <span>Loading marketplace...</span>
            </>
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
