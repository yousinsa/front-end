import React from "react";
import Main from "./Page/main/Main";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Register from "./Page/Register/Register";
import Login from "./Page/Login/Login";
import Cart from "./Page/Cart/Cart";
import MyPage from "./Page/MyPage/MyPage";
import Footer from "./components/Footer/Footer";
import Community from "./Page/Community/Community";
import { Routes, Route } from "react-router-dom";

import Goods from "./Page/Goods/service/Goods";
import FindId from "./Page/FindUser/FindId";
import FindPassword from "./Page/FindUser/FindPassword";
import Upload from "./Page/Upload/Upload";
import Woman from "./Page/Goods/category/Woman";
import Man from "./Page/Goods/category/Man";
import Accessory from "./Page/Goods/category/Accessory";
import Information from "./Page/MyPage/services/Information";
import MyStyle from "./Page/MyPage/services/MyStyle";
import MyWritten from "./Page/MyPage/services/MyWritten";
import Paid from "./Page/MyPage/services/Paid";
import Payment from "./Page/MyPage/services/Payment";

import "./App.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { goodsInfo } from "./Slice/goodsSlice";

function App() {
  let { pathname } = useLocation();
  let dispatch = useDispatch();

  if (pathname === "/goods/man") {
    dispatch(goodsInfo("남성"));
  }
  if (pathname === "/goods/woman") {
    dispatch(goodsInfo("여성"));
  }
  if (pathname === "/goods/accessory") {
    dispatch(goodsInfo("악세서리"));
  }

  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/community" element={<Community />} />

        <Route path="/goods" element={<Goods />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpassword" element={<FindPassword />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/goods/man" element={<Man />} />
        <Route path="/goods/woman" element={<Woman />} />
        <Route path="/goods/accessory" element={<Accessory />} />
        <Route path="/mypage/information" element={<Information />} />
        <Route path="/mypage/mystyle" element={<MyStyle />} />
        <Route path="/mypage/mywritten" element={<MyWritten />} />
        <Route path="/mypage/paid" element={<Paid />} />
        <Route path="/mypage/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
