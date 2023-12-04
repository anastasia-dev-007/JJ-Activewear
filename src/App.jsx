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
import Favorites from './routes/Favorites/Favorites';
import { useContext, useState } from 'react';
import AdminPanel from './routes/AdminPanel/AdminPanel';
import { UserContext } from './contexts/user.context';


function App() {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        {user && <h1 style={{ marginTop: '100px' }}>{user.email}</h1>}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/products-list' element={<ProductListing/>} />
          <Route path='/product-details/:id' element={<ProductDetails />} />
          <Route path='/favorites/:id' element={<Favorites />} />
          <Route path='/shopping-cart' element={<ShoppingCart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order-confirmation' element={<OrderConfirmation />} />
          <Route path='/admin-panel' element={<AdminPanel />} />
          <Route path='*' element={<>Page not found</>}></Route>
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
