import React from "react";
import Main from "./main/Main";
import NavigationBar from "./NavigationBar/NavigationBar";
import Register from "./register/Register";
import Login from "./Login/Login";
import Cart from "./Cart/Cart";

import Footer from "./Footer/Footer";
import Community from "./Community/Community";
import { Routes, Route } from "react-router-dom";
import Logout from "./Logout/Logout";
import Goods from "./Goods/Goods";
import FindId from "./FindUser/FindId";
import FindPassword from "./FindUser/FindPassword";
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
        {/* <Route path="/mypage" element={<Mypage />} /> */}
        <Route path="/community" element={<Community />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpassword" element={<FindPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
