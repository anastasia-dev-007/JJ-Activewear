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


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/products-list' element={<ProductListing />} />
          <Route path='/products-list/:category' element={<ProductListing />} />
          <Route path='/products-list/newArrival' element={<ProductListing newArrivalFilter="Y" />} /> {/**I didn't know about this construction, but 'newArrivalFilter' is a prop defined in ProductListing component to filter products based on the condition item.newArrival === 'Y'. Chat GPT says that there is no predefined prop named newArrivalFilter in your ProductListing component. You should stick to using newArrival directly. */}
          <Route path='/products-list/promo' element={<ProductListing promoFilter="Y"/>}/>
          <Route path='/products-list/:category/:subcategory' element={<ProductListing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product-details/:id' element={<ProductDetails />} />
          <Route path='/favorites/:id' element={<Favorites />} />
          <Route path='/shopping-cart/:id' element={<ShoppingCart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order-confirmation' element={<OrderConfirmation />} />
          <Route path='*' element={<>Page not found</>}></Route>
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
