import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './contexts/cart.context';
import { UserProvider } from './contexts/user.context';
import { FavoritesProvider } from './contexts/favorites.context';
import { OrdersProvider } from './contexts/orders.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OrdersProvider>
      <FavoritesProvider>
        <CartProvider> {/**acesta acum este un react component, iar in forma lui orginiala de context el a fost creat in cart.context.jsx unde vor fi declarate toate valorile acestuia */}
          <UserProvider>
            <App /> {/**cand am inserat App in acest context tot App a disparut pentru ca noi incercam sa afisam un component in cadrul la alt component, si componentul App este copil al componentului CartProvider. Pentru a afisa App(copilul lui CreateContext, trebuie sa il afisam prin proprietati) */}
          </UserProvider>
        </CartProvider>
      </FavoritesProvider>
    </OrdersProvider>
  </React.StrictMode>
);
