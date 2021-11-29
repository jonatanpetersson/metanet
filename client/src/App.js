import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Marketplace from './pages/Marketplace/Marketplace';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Account from './pages/Account/Account';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </>
  )
}