import React from "react";
import Main from "./main/Main";
import NavigationBar from "./NavigationBar/NavigationBar";
import Register from "./register/Register";
import Login from "./Login/Login";
import Cart from "./Cart/Cart";
import Mypage from "./Mypage/Mypage";
import Footer from "./Footer/Footer";
import Community from "./Community/Community";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
