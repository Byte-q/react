import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/products.js';
import Header from './components/Header.js';
import Landing from './components/landing.js';
import Contact from './components/Contact.js';
import Login from './components/login.js';
import SignUp from './components/SignUp.js';
import Footer from './components/Footer.js';
import Cart from './components/Cart.js';
import Profile from './components/Profile.js';
import { CartProvider } from './components/CartContext.js';
import About from './components/About.js';
import Checkout from './components/Checkout.js';

function App() {
  return (
    <div className="App">
      <div className="contain">
        <CartProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </div>
    </div>
  );
}

export default App;
