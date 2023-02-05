import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { decodeToken } from "react-jwt";
import SetAuthorizationToken from "./Page/Login/utils/SetAuthorizationToken";
import { setUserInformation } from "./Slice/userSlice";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (localStorage.jwtToken) {
  SetAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setUserInformation(decodeToken(localStorage.jwtToken)));
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
