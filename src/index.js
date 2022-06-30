/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-05 09:23:33
 * @LastEditTime: 2022-06-28 16:32:50
 * @LastEditors: liukun liukun0227@163.com
 */
import React from "react";
import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store/index";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

export default store;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
console.info(React.version, App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
