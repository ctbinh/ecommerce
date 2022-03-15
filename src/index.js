import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin/index.jsx";
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="admin" element={<Admin />} />
      <Route path="cart" element={<Cart/>} />
      <Route path="checkout" element={<Checkout/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
