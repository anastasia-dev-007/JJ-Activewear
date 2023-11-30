import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import LandingPage from './routes/LandingPage/LandingPage';
import ProductListing from './routes/ProductListing/ProductListing';
import ProductDetails from './routes/ProductDetails/ProductDetails';
import ShoppingCart from './routes/ShoppingCart/ShoppingCart';
import Checkout from './routes/Checkout/Checkout';
import OrderConfirmation from './routes/OrderConfirmation/OrderConfirmation';
import Login from './routes/Login/Login';
import Favorites from './routes/Favorites/Favorites';
import { useState } from 'react';
import Management from './routes/Management/Management';


function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = (query) => {
      setSearchQuery(query);
  };

  return (
    <BrowserRouter>
      <div>
        <NavBar onSearchQuery={handleSearchQuery}/>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/products-list' element={<ProductListing searchQuery={searchQuery}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/product-details/:id' element={<ProductDetails />} />
          <Route path='/favorites/:id' element={<Favorites />} />
          <Route path='/shopping-cart/:id' element={<ShoppingCart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order-confirmation' element={<OrderConfirmation />} />
          <Route path='/management' element={<Management />} />
          <Route path='*' element={<>Page not found</>}></Route>
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
