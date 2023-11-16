const products = [
    {
        id: 1,
        title: 'Product 1',
        color: 'black',
        category: 'Leggings',
        size: 'S',
        status: 'Best Seller',
        currency: '$',
        price: 50,
        availability: 'available',
    },
    {
        id: 2,
        title: 'Product 2',
        color: 'cream',
        category: 'Matching Sets',
        size: 'M',
        status: 'Best Seller',
        currency: '$',
        price: 50,
        availability: 'available',
    },
    {
        id: 3,
        title: 'Product 3',
        color: 'mint',
        category: 'Top',
        size: 'L',
        status: null,
        currency: '$',
        price: 50,
        availability: 'out of stock',
    },
    {
        id: 4,
        title: 'Product 4',
        color: 'peach',
        category: 'Sport Bras',
        size: 'M',
        status: null,
        currency: '$',
        price: 50,
        availability: 'out of stock',
    },
    {
        id: 5,
        title: 'Product 5',
        color: 'purple',
        category: 'Tennis Shorts',
        size: 'S',
        status: null,
        currency: '$',
        price: 50,
        availability: 'available',
    },
    {
        id: 6,
        title: 'Product 6',
        color: 'blue',
        category: 'Long-sleeve top',
        size: 'L',
        status: null,
        currency: '$',
        price: 50,
        availability: 'available',
    },
    {
        id: 7,
        title: 'Product 7',
        color: 'white',
        category: 'Yoga-pants',
        size: 'M',
        status: null,
        currency: '$',
        price: 50,
        availability: 'available',
    },
    // Continue with the next 93 products
    {
        id: 8,
        title: 'Product 8',
        color: 'orange',
        category: 'Running Socks',
        size: 'S',
        status: null,
        currency: '$',
        price: 45,
        availability: 'available',
    },
    {
        id: 9,
        title: 'Product 9',
        color: 'grey',
        category: 'Shorts',
        size: 'M',
        status: 'Best Seller',
        currency: '$',
        price: 35,
        availability: 'available',
    },
    {
        id: 10,
        title: 'Product 10',
        color: 'pink',
        category: 'T-shirts Tops',
        size: 'L',
        status: null,
        currency: '$',
        price: 25,
        availability: 'Out of Stock',
    },
    // ... (previous array)

    {
        id: 11,
        title: 'Product 11',
        color: 'indigo',
        category: 'Leggings',
        size: 'S',
        status: 'Best Seller',
        currency: '$',
        price: 55,
        availability: 'available',
    },
    {
        id: 12,
        title: 'Product 12',
        color: 'yellow',
        category: 'Yoga Pants',
        size: 'M',
        status: null,
        currency: '$',
        price: 40,
        availability: 'Out of Stock',
    },
    {
        id: 13,
        title: 'Product 13',
        color: 'green',
        category: 'Sport Bras',
        size: 'L',
        status: null,
        currency: '$',
        price: 60,
        availability: 'available',
    },
    {
        id: 14,
        title: 'Product 14',
        color: 'blue',
        category: 'Matching Sets',
        size: 'S',
        status: 'Best Seller',
        currency: '$',
        price: 70,
        availability: 'available',
    },
    // ... (previous array)

    {
        id: 15,
        title: 'Product 15',
        color: 'pink',
        category: 'Long-sleeve workout tops',
        size: 'M',
        status: null,
        currency: '$',
        price: 55,
        availability: 'available',
    },
    {
        id: 16,
        title: 'Product 16',
        color: 'orange',
        category: 'Corset',
        size: 'L',
        status: null,
        currency: '$',
        price: 30,
        availability: 'Out of Stock',
    },
    {
        id: 17,
        title: 'Product 17',
        color: 'cream',
        category: 'Swimwear',
        size: 'S',
        status: 'Best Seller',
        currency: '$',
        price: 65,
        availability: 'available',
    },
    {
        id: 18,
        title: 'Product 18',
        color: 'black',
        category: 'Gym Bags',
        size: 'M',
        status: 'Best Seller',
        currency: '$',
        price: 80,
        availability: 'available',
    },

    {
        id: 19,
        title: 'Product 19',
        color: 'purple',
        category: 'Shorts',
        size: 'L',
        status: null,
        currency: '$',
        price: 45,
        availability: 'Out of Stock',
    },
    {
        id: 20,
        title: 'Product 20',
        color: 'mint',
        category: 'Running Socks',
        size: 'S',
        status: null,
        currency: '$',
        price: 30,
        availability: 'available',
    },
    {
        id: 21,
        title: 'Product 21',
        color: 'grey',
        category: 'T-shirts Tops',
        size: 'M',
        status: 'Best Seller',
        currency: '$',
        price: 25,
        availability: 'available',
    },
    // ... (previous array)

    {
        id: 22,
        title: 'Product 22',
        color: 'blue',
        category: 'Yoga Pants',
        size: 'S',
        status: 'Best Seller',
        currency: '$',
        price: 55,
        availability: 'available',
    },
    {
        id: 23,
        title: 'Product 23',
        color: 'green',
        category: 'Sport Bras',
        size: 'M',
        status: null,
        currency: '$',
        price: 40,
        availability: 'Out of Stock',
    },
    {
        id: 24,
        title: 'Product 24',
        color: 'indigo',
        category: 'Tennis Shorts',
        size: 'L',
        status: null,
        currency: '$',
        price: 70,
        availability: 'available',
    },
    {
        id: 25,
        title: 'Product 25',
        color: 'orange',
        category: 'Long-sleeve top',
        size: 'S',
        status: null,
        currency: '$',
        price: 45,
        availability: 'available',
    },
    {
        id: 26,
        title: 'Product 26',
        color: 'cream',
        category: 'Gym Bags',
        size: 'M',
        status: 'Best Seller',
        currency: '$',
        price: 80,
        availability: 'Out of Stock',
    },
    {
        id: 27,
        title: 'Product 27',
        color: 'pink',
        category: 'Shorts',
        size: 'S',
        status: null,
        currency: '$',
        price: 60,
        availability: 'available',
    },
    {
        id: 28,
        title: 'Product 28',
        color: 'black',
        category: 'Long-sleeve workout tops',
        size: 'L',
        status: null,
        currency: '$',
        price: 55,
        availability: 'available',
    },
    {
        id: 29,
        title: 'Product 29',
        color: 'purple',
        category: 'Yoga Pants',
        size: 'M',
        status: 'Best Seller',
        currency: '$',
        price: 50,
        availability: 'available',
    },
    {
        id: 30,
        title: 'Product 30',
        color: 'orange',
        category: 'Sport Bras',
        size: 'S',
        status: null,
        currency: '$',
        price: 65,
        availability: 'available',
    },
    {
        id: 31,
        title: 'Product 31',
        color: 'blue',
        category: 'Running Socks',
        size: 'L',
        status: 'Best Seller',
        currency: '$',
        price: 35,
        availability: 'available',
    },
    {
        id: 32,
        title: 'Product 32',
        color: 'white',
        category: 'T-shirts Tops',
        size: 'M',
        status: 'Best Seller',
        currency: '$',
        price: 75,
        availability: 'Out of Stock',
    },
    {
        id: 33,
        title: 'Product 33',
        color: 'yellow',
        category: 'Matching Sets',
        size: 'S',
        status: null,
        currency: '$',
        price: 40,
        availability: 'available',
    },
    // ... (previous array)

    {
        id: 34,
        title: 'Product 34',
        color: 'mint',
        category: 'Leggings',
        size: 'L',
        status: null,
        currency: '$',
        price: 60,
        availability: 'Out of Stock',
    },
    {
        id: 35,
        title: 'Product 35',
        color: 'black',
        category: 'Sport Bras',
        size: 'M',
        status: 'Best Seller',
        currency: '$',
        price: 55,
        availability: 'available',
    },
    {
        id: 36,
        title: 'Product 36',
        color: 'purple',
        category: 'Gym Bags',
        size: 'S',
        status: null,
        currency: '$',
        price: 70,
        availability: 'available',
    },
    {
        id: 37,
        title: 'Product 37',
        color: 'pink',
        category: 'Shorts',
        size: 'L',
        status: null,
        currency: '$',
        price: 45,
        availability: 'available',
    },

    // ... (previous array)

    {
        id: 38,
        title: 'Product 38',
        color: 'blue',
        category: 'Long-sleeve workout tops',
        size: 'S',
        status: 'Best Seller',
        currency: '$',
        price: 75,
        availability: 'Out of Stock',
    },
    {
        id: 39,
        title: 'Product 39',
        color: 'orange',
        category: 'Yoga Pants',
        size: 'M',
        status: null,
        currency: '$',
        price: 40,
        availability: 'available',
    },
    {
        id: 40,
        title: 'Product 40',
        color: 'green',
        category: 'Sport Bras',
        size: 'L',
        status: 'Best Seller',
        currency: '$',
        price: 50,
        availability: 'available',
    },
    {
        id: 41,
        title: 'Product 41',
        color: 'indigo',
        category: 'Swimwear',
        size: 'S',
        status: null,
        currency: '$',
        price: 65,
        availability: 'available',
    },
    {
        id: 42,
        title: 'Product 42',
        color: 'yellow',
        category: 'Matching Sets',
        size: 'M',
        status: null,
        currency: '$',
        price: 55,
        availability: 'Out of Stock',
    },
    {
        id: 43,
        title: 'Product 43',
        color: 'grey',
        category: 'Shorts',
        size: 'S',
        status: 'Best Seller',
        currency: '$',
        price: 30,
        availability: 'available',
    },
    {
        id: 44,
        title: 'Product 44',
        color: 'mint',
        category: 'T-shirts Tops',
        size: 'L',
        status: null,
        currency: '$',
        price: 45,
        availability: 'available',
    },
    {
        id: 45,
        title: 'Product 45',
        color: 'white',
        category: 'Gym Bags',
        size: 'M',
        status: null,
        currency: '$',
        price: 70,
        availability: 'available',
    },
    {
        id: 46,
        title: 'Product 46',
        color: 'pink',
        category: 'Long-sleeve top',
        size: 'S',
        status: null,
        currency: '$',
        price: 60,
        availability: 'available',
    },
    {
        id: 47,
        title: 'Product 47',
        color: 'orange',
        category: 'Running Socks',
        size: 'M',
        status: 'Best Seller',
        currency: '$',
        price: 35,
        availability: 'available',
    },
    {
        id: 48,
        title: 'Product 48',
        color: 'cream',
        category: 'T-shirts Tops',
        size: 'L',
        status: null,
        currency: '$',
        price: 40,
        availability: 'Out of Stock',
    },
    {
        id: 49,
        title: 'Product 49',
        color: 'green',
        category: 'Swimwear',
        size: 'S',
        status: 'Best Seller',
        currency: '$',
        price: 80,
        availability: 'available',
    },
    {
        id: 50,
        title: 'Product 50',
        color: 'grey',
        category: 'Sport Bag',
        size: null,
        status: 'Best Seller',
        currency: '$',
        price: 80,
        availability: 'available',
    },
];
