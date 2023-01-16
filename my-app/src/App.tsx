import React, { useState } from 'react';
import Main from './main/Main';
import Navbar from './Navbar/Navbar';
import Register from './register/Register';
import Login from './Login/Login';
import Cart from './Cart/Cart';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/"element={  <Main/>}/ >
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
 
  
    </div>
  );
}



export default App;
