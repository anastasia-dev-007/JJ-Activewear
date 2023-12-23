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
    orders.push(order);
    return order;
};