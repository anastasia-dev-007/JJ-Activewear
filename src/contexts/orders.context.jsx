import React, { createContext, useState } from 'react';
import { orders } from '../orders.service';

export const OrdersContext = createContext({
  orderItems: [],
  removeOrder: () => { },
});

export function OrdersProvider(props) {
  const [orderItems, setOrderItems] = useState([...orders]);

  const removeOrder = (orderId, selectedSize) => {
    setOrderItems((prevOrders) =>
      prevOrders.filter(
        (item) => !(item.id === orderId && item.selectedSize === selectedSize)
      )
    );
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
