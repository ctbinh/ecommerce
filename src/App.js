import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home/Home";
import HomeAdmin from "./Admin/components/Home";
import AdminLogin from "./Admin/components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer"
import User from "./components/User/User";
import Product from "./Admin/components/products/index";
import AdminDetail from "./Admin/components/products/Detail";
import Customer from "./Admin/components/customers/Customer";
import Detail from "./components/Detail";
import AddProduct from "./Admin/components/products/AddProduct";
import Orders from "./Admin/components/orders/Orders";
import Invoice from "./Admin/components/orders/Invoice";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="admin" element={<Admin />}>
            <Route path="product" element={<Product />} />
            <Route path="customer" element={<Customer />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="orders" element={<Orders />} />
            <Route path="product/detail" element={<AdminDetail />} />
            <Route path="" element={<HomeAdmin />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="header" element={<Header />} />
          <Route path="footer" element={<Footer />} />
          <Route path="user" element={<User />} />
          <Route path="detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
