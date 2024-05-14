import { useState } from 'react'

//import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Women from './pages/women';
import Men from './pages/men';
import Teens from './pages/teens';
import Kids from './pages/kids';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer';
import Login from './pages/Login';
import Product from './pages/Product';


function App() {
 

  return (
    <>
   
     <Router>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          
          <Route path="/women" element={<Women  />} />
          <Route path="/men" element={<Men />} />
          <Route path="/teens" element={<Teens />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
