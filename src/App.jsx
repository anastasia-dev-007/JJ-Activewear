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
import { useContext } from 'react';
import AdminPanel from './routes/Admin/AdminPanel/AdminPanel';
import { UserContext } from './contexts/user.context';
import ScrollToTopBtn from './components/ScrollToTopBtn/ScrollToTopBtn';
import Orders from './routes/Admin/Orders/Orders';
import Clients from './routes/Admin/Clients/Clients';
import Products from './routes/Admin/Products/Products';
import AddNewProduct from './routes/Admin/AddNewProduct/AddNewProduct';
import EditProduct from './routes/Admin/EditProduct/EditProduct';


function App() {
  const { user } = useContext(UserContext);
  const userContext = useContext(UserContext);

  return (
    <BrowserRouter>
      <div>
        <ScrollToTopBtn />
        <NavBar />
        {/* {user && <h1 style={{ marginTop: '100px' }}>{user.email}</h1>} */}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/products-list' element={<ProductListing />} />
          <Route path='/product-details/:id' element={<ProductDetails />} />
          {/* {userContext.user === null ? (<></>) : ()}*/}
          <Route path='/favorites' element={<Favorites />} />
          {/* {userContext.user === null ? (<></>) : ()}*/}
          <Route path='/shopping-cart' element={<ShoppingCart />} />
          {userContext.user !== null && userContext.user.role === 'admin' && (
            <Route path='/admin-panel' element={<AdminPanel />} >
              <Route path='orders' Component={Orders} />
              <Route path='products' Component={Products} />
              <Route path='addProducts' Component={AddNewProduct} />
              <Route path='editProducts/:id' Component={EditProduct} />
              <Route path='clients' Component={Clients} />
            </Route>
          )}
          <Route path='*' element={<>Page not found</>}></Route>
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
