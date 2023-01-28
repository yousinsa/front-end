import React, { useEffect } from "react";
import axios from "axios";

const Api = () => {
  useEffect(() => {
    axios
      .get("/v1/search/shop.json", {
        params: {
          query: "여성",
          display: 100,
        },
        headers: {
          "X-Naver-Client-Id": process.env.REACT_APP_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SECRET,
        },
      })
      .then((res) => console.log(res))
      .catch((e) => {});
  });
  return <div></div>;
};

export default Api;
