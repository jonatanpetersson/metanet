import { getParcelsQuery, getUserByUsername, getParcelByIdQuery, getOffersByUsername } from './querys.js';
import { createParcelMutation, createOfferMutation, updateOfferMutation } from './mutations.js';
import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();

export const login = async (loginInfo, setLoginInfo, dispatch, navigate, loginAction) => {
  try {
    const response = await axios.post(process.env.AUTH_LOGIN || 'http://localhost:4000/api/auth/login', { username: loginInfo.username, password: loginInfo.password });
    setLoginInfo({ username: '', password: '' });
    dispatch(loginAction(response.headers.metanetauth));
    navigate('/');
  } catch (err) {
    console.log(err.message);
  }
}

export const loadMarketplace = async setParcelsData => {
  try {
    const query = getParcelsQuery();
    const response = await axios.post(process.env.RESOURCES || 'http://localhost:5000/graphql', { query });
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
    const response = await axios.post(process.env.RESOURCES || 'http://localhost:5000/graphql',
      { query },
      {
        headers:
          { 'Authorization': `Bearer ${localStorage.jwt}` }
      });
    const user = response.data.data.getUserByUsername;
    setUserData(user);
  } catch (err) {
    console.log(err);
  }
}

export const loadParcel = async (location, setParcelData) => {
  const id = location.pathname.split('/')[2];
  const query = getParcelByIdQuery(id);
  const response = await axios.post(process.env.RESOURCES || 'http://localhost:5000/graphql', { query });
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
    await axios.post(process.env.RESOURCES || 'http://localhost:5000/graphql',
      { query },
      {
        headers:
          { 'Authorization': `Bearer ${localStorage.jwt}` }
      });
  } catch (err) {
    console.log(err.message);
  }
};

export const loadOffers = async (loggedInUser, setOffersData) => {
  try {
    const username = loggedInUser;
    const query = getOffersByUsername(username);
    const response = await axios.post(process.env.RESOURCES || 'http://localhost:5000/graphql',
      { query },
      {
        headers:
          { 'Authorization': `Bearer ${localStorage.jwt}` }
      });
    const offers = response.data.data.getOffersByUsername;
    setOffersData(offers);
  } catch (err) {
    console.log(err);
  }
};

export const createOffer = async inputData => {
  try {
    const query = createOfferMutation(inputData);
    await axios.post(process.env.RESOURCES || 'http://localhost:5000/graphql',
      { query },
      {
        headers:
          { 'Authorization': `Bearer ${localStorage.jwt}` }
      });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateOffer = async inputData => {
  try {
    const query = updateOfferMutation(inputData);
    return await axios.post(process.env.RESOURCES || 'http://localhost:5000/graphql',
      { query },
      {
        headers:
          { 'Authorization': `Bearer ${localStorage.jwt}` }
      });
  } catch (err) {
    console.log(err.message);
  }
};
