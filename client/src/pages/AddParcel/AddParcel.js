import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddParcel.scss';
import '../Register/Form.scss';


function CreateItem() {
  const [parcelData, setParcelData] = useState(null);
  const [idInput, setIdInput] = useState(null);
  const [inputData, setInputData] = useState({
    name: '',
    description: '',
    area: '',
    island: '',
    suburb: '',
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
    setInputData({...inputData, [ev.target.name]: ev.target.value})
    // setInputData([...inputData, { name: ev.target.value, description: ev.target.value }]);
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
      <form className="page__register__form">
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

        <input className="page__register__form-btn" type="submit" value="Add parcel to marketplace" />
      </form> 
      : ''}
      

    </main>
  )
}

export default CreateItem
