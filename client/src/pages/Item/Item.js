import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ItemSocial from './ItemSocial/ItemSocial';
import ItemCounts from './ItemCounts/ItemCounts';
import ItemTrading from './ItemTrading/ItemTrading';
import ItemInfo from './ItemInfo/ItemInfo';
import { CircularProgress } from '../../components/CircularProgress/CircularProgress';
import { loadParcel } from '../../api/fetch.js';
import './Item.scss';

const Item = () => {
  const [parcelData, setParcelData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    loadParcel(location, setParcelData);
  }, []);

  return (
    <main className="page__item">
    {!parcelData 
      ? <>
          <CircularProgress />
          <span>Loading parcel...</span>
        </>
      : <><ItemSocial metaverse={parcelData.metaverse} />
      <ItemCounts name={parcelData.name} image={parcelData.image} user={parcelData.user} />
      <ItemTrading price={parcelData.price} external_url={parcelData.external_url} />
      <ItemInfo description={parcelData.description} island={parcelData.island} suburb={parcelData.suburb} /></>}
    </main>
  )
}

export default Item
