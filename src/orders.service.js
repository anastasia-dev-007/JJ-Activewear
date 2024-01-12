export const orders = [];

// const currentDate = new Date();
// const order = {
//     id: Date.now(),
//     name: '', //admin or user
//     email: '',
//     country: '',
//     address: '',
//     phoneNumber: '',
//     cartItems: [
//         {
//             id: '',
//             imgs: [],
//             title: '',
//             titleCode: '',
//             color: '',
//             category: '',
//             subcategory: '',
//             subcategoryCode: '',
//             size: { S: '', M: '', L: '', },
//             bestSellerStatus: '',
//             newArrival: '',
//             currency: '',
//             price: '',
//             promo: '',
//             promoPrice: '',
//             productDescription: '',
//         }
//     ],
//     orderDate: currentDate.toISOString(),
// };

export const saveOrder = (order) => {
    const orderWithStatus = { ...order, orderStatus: 'New' };
    orders.push(orderWithStatus);
    return orderWithStatus;
  };

  export const deleteOrder = (id) => {
    const foundIndex = orders.findIndex(order => order.id === id);

    if (foundIndex > -1) {
        orders.splice(foundIndex, 1);
    }
};
  
export const fetchOrders = () => {
  return orders;
}