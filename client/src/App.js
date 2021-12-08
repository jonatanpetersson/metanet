import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyTokenAction } from './actions/auth.js';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Marketplace from './pages/Marketplace/Marketplace';
import AddParcel from './pages/AddParcel/AddParcel';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';
import { ProfileModel } from './components/Models/ProfileModel/ProfileModel';
import Login from './pages/Register/Login/Login';
import SignUp from './pages/Register/SignUp/SignUp';
import Item from './pages/Item/Item';
import Offers from './pages/Offers/Offers';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

export const App = () => {
const dispatch = useDispatch()

  useEffect(() => {
    dispatch(verifyTokenAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/addparcel" element={<AddParcel />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<ProfileModel />} />
        <Route path="/profile/account" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/marketplace/:id" element={<Item />} />    
        <Route path="/marketplace/:id" element={<Item />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
      <Footer />
    </>
  )
}