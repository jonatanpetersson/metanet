import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddParcel.scss';
import '../Register/Form.scss';


function CreateItem() {
  const [parcelData, setParcelData] = useState(null);
  const [idInput, setIdInput] = useState(null);
  const [inputData, setInputData] = useState({
    user: 'testUser',
    metaverse: 'testMetaverse',
    image: 'testImage',
    name: '',
    description: '',
    external_url: 'testUrl',
    area: '',
    island: '',
    suburb: '',
    price: '',
  });

  const handleIdInput = ev => setIdInput(ev.currentTarget.value);

  const handleIdConfirmation = async ev => {
    ev.preventDefault();
    try {
      const data = await axios.get(`https://www.cryptovoxels.com/p/${idInput}`);
      const parcel = {
        name: data.data.name,
        image: data.data.image,
        description: data.data.description,
        external_url: data.data.external_url,
        area: data.data.attributes.area,
        island: data.data.attributes.island,
        suburb: data.data.attributes.suburb
      };
      setParcelData(parcel);
      setInputData({
        name: parcel.name,
        description: parcel.description,
        area: parcel.area,
        island: parcel.island,
        suburb: parcel.suburb
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleInputData = (ev) => {
    setInputData({ ...inputData, [ev.target.name]: ev.target.value })
  }

  const addHandler = async (ev) => {
    ev.preventDefault();
    try {
      const mutationBody = `mutation {
        createParcel(parcel: {
          user: ${inputData.user},
          metaverse: ${inputData.metaverse},
          parcelId: ${inputData.user},
          name: ${inputData.name},
          price: ${inputData.price},
          image: ${inputData.image},
          description: ${inputData.description},
          external_url: ${inputData.external_url},
          area: ${inputData.area},
          island: ${inputData.island},
          suburb: ${inputData.suburb}
        }) {
          parcelId,
          name,
          user
        }
      }`

      const response = await axios.post('http://localhost:5000/graphql', {
        query: mutationBody
      });
      console.log(response)
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <main className="page__register" >
      <h1 className="page__register-title">Add your parcel</h1>

      <form className="page__register__form" onSubmit={handleIdConfirmation}>
        <label for="fname">Pass in your official parcel id</label>
        <input className="page__register__form-text" type="text" name="fname" onChange={handleIdInput} required />
        <input className="page__register__form-btn" type="submit" value="Confirm id" />
      </form>
      {parcelData ?
        <form className="page__register__form" onSubmit={addHandler}>

          <div className="item__counts-img">
            <img src={parcelData.image} alt="" />
          </div>

          <label for="name">Name</label>
          <input className="page__register__form-text" type="text" name="name" onChange={handleInputData} value={inputData.name} required />

          <label for="description">Description</label>
          <input className="page__register__form-text" type="text" name="description" onChange={handleInputData} value={inputData.description} required />

          <label for="area">Area</label>
          <input className="page__register__form-text" type="text" name="area" onChange={handleInputData} value={inputData.area} required />

          <label for="island">Island</label>
          <input className="page__register__form-text" type="text" name="island" onChange={handleInputData} value={inputData.island} required />

          <label for="suburb">Suburb</label>
          <input className="page__register__form-text" type="text" name="suburb" onChange={handleInputData} value={inputData.suburb} required />

          <label for="suburb">Price</label>
          <input className="page__register__form-text" type="text" name="price" onChange={handleInputData} value={inputData.price} required />

          <input className="page__register__form-btn" type="submit" value="Add parcel to marketplace" />
        </form>
        : ''}


    </main>
  )
}

export default CreateItem
