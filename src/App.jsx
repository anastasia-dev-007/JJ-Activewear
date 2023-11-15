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


function App() {
  return (
    <div>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/product-list' element={<ProductListing />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/product-details' element={<ProductDetails />} />
          <Route path='/shopping-cart' element={<ShoppingCart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order-confirmation' element={<OrderConfirmation />} />
          <Route path='*' element={<>Page not found</>}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>

  );
}

export default App;
