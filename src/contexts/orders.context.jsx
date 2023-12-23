import React, { createContext, useState } from 'react';
import { orders } from '../orders.service';

export const OrdersContext = createContext({
  orderItems: [],
  removeOrder: () => { },
});

export function OrdersProvider(props) {
  const [orderItems, setOrderItems] = useState([...orders]);

  const removeOrder = (orderId) => {
    // Update the state or context with the remaining orders
    setOrderItems((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
  };


  // const deleteOrder = (id) => {
  //   const foundIndex = orders.findIndex(order => order.id === id);

  //   if (foundIndex > -1) {
  //       orders.splice(foundIndex, 1);
  //   }}

  return (

    <OrdersContext.Provider
      value={{
        orderItems: orderItems,
        removeOrder: removeOrder,
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
}
