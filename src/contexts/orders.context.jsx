import React, { createContext } from 'react';

export const OrdersContext = createContext({
});

export function OrdersProvider(props) {

  return (
    <OrdersContext.Provider
      value={{

      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
}