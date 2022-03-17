import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="cart" element={<Cart/>} />
          <Route path="checkout" element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
