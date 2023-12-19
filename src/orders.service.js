const orders = [
    {
        id: '1',
        name: 'test order', //admin or user
        email: 'test.order@email.com',
        country: 'testCountryOfOrder',
        address: 'testAddressofOrder',
        phoneNumber: '076-666-666',
    },
];

export const saveOrder = (order) => {
   
        orders.push(order);
        return order;
};