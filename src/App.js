import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home/Home";
import HomeAdmin from "./Admin/components/Home";
import Login from "./Admin/components/Login";
import Header from "./components/Header";
import Product from "./Admin/components/products/index";
import Detail from "./Admin/components/products/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="admin/login" element={<Login />} />
          {/* <Route path="admin/product" element={<Detail />} /> */}
          <Route path="admin" element={<Admin />}>
            <Route path="product" element={<Product />} />
            <Route path="product/detail" element={<Detail />} />
            <Route path="" element={<HomeAdmin />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
