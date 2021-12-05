import { getParcelsQuery } from './querys.js';
import { getUserByUsername } from './querys.js';
import { getParcelByIdQuery } from './querys.js';
import { createParcelMutation } from './mutations.js';
import axios from 'axios';

export const loadMarketplace = async setParcelsData => {
  try {
    const query = getParcelsQuery();
    const response = await axios.post('http://localhost:5000/graphql', { query });
    const allParcels = response.data.data.getParcels;
    setParcelsData(allParcels);
  } catch (err) {
    console.log(err.message);
  }
};

export const loadProfile = async setUserData => {
  try {
    const username = JSON.parse(Buffer.from(localStorage.jwt.split('.')[1], 'base64')).username;
    const query = getUserByUsername(username);
    const response = await axios.post('http://localhost:5000/graphql',
      { query },
      { headers: 
        { 'Authorization': `Bearer ${localStorage.jwt}` }
      });
    const user = response.data.data.getUserByUsername;
    console.log(user);
    setUserData(user);
  } catch (err) {
    console.log(err);
  }
}

export const loadParcel = async (location, setParcelData) => {
  const id = location.pathname.split('/')[2];
  const query = getParcelByIdQuery(id);
  const response = await axios.post('http://localhost:5000/graphql', { query });
  const parcel = response.data.data.getParcelById;
  setParcelData(parcel);
}

export const loadInfoToCreateParcel = async (setInputData, idInput, inputData) => {
  try {
    const data = await axios.get(`https://www.cryptovoxels.com/p/${idInput}`);
    setInputData({
      user: JSON.parse(Buffer.from(localStorage.jwt.split('.')[1], 'base64')).username,
      metaverse: inputData.metaverse,
      parcel_id: idInput,
      name: data.data.name,
      image: data.data.image,
      description: data.data.description,
      external_url: data.data.external_url,
      area: data.data.attributes.area,
      island: data.data.attributes.island,
      suburb: data.data.attributes.suburb,
      price: '',
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const createParcel = async inputData => {
  try {
    const query = createParcelMutation(inputData);
    await axios.post('http://localhost:5000/graphql',
      { query },
      { headers: 
        { 'Authorization': `Bearer ${localStorage.jwt}` }
      });
  } catch (err) {
    console.log(err.message);
  }
};
