import { useState } from "react";
import { createContext } from "react";
import { checkIfProductIsAvailable, updateProduct } from "../products.service";

export const CartContext = createContext({ //adaugam valori implicite aici pentru a le putea accesa din extern
    items: [],
    addItem: () => { },
    addToCart: () => { },
    removeFromCart: () => { },
});
{/**Toate proprietatile care le afisam se declara aici in acest file. Aici noi indicam ce valori sunt expuse din acest context: lista de produse, addProducts(), deleteProducts(), removeAll(),isOpen(true/false), etc. */ }

export function CartProvider(props) { //acesta este un component React
    const [cartItems, setCartItems] = useState([]); //cream un state care va tine datele
    /**
     {
        id:
        title:
        size:
        quantity:
     }
     */

    //cream functii necesare pentru a lucra cu shopping cart
    const addItem = (item, size, quantity) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id && cartItem.selectedSize === size);

        if (existingItem) {
            // If the item already exists in the cart with the same size, update the quantity
            existingItem.quantity += quantity;
            setCartItems([...cartItems]); // Trigger a state update to re-render
        } else {
            //sa verific daca in shopping cart deja exista asa item cu asa selected size. Daca da, maresc quantity, daca nu, el adaug in array existent
            console.log(item);
            setCartItems([...cartItems, {
                ...item,
                selectedSize: size,
                quantity: quantity,
            }]);
        };
    };

    async function addToCart(product, selectedSize, quantity) {
        //is quantity available?
        const isAvailable = checkIfProductIsAvailable(product, selectedSize, quantity);
        // YES? ->
        if (isAvailable) {
            try {
                //decrease quantity of item
                await updateProduct(product, selectedSize, quantity);
                //add item to items
                setCartItems(prev => [...prev, {
                    ...product,
                    selectedSize: selectedSize,
                    quantity: quantity,

                }])

            } catch (e) {
                console.log(e);
            }
        } else {
            console.log('Product is not available');
        }
        //NO?  -> set error
        const result = updateProduct(product.id, selectedSize, quantity);

        if (CartContext && CartContext.addItem) {
            CartContext.addItem(result, selectedSize, quantity);
        };

        setCartItems([...cartItems]);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            addItem: addItem,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
        }}>
            {props.children} {/**copii lui CartContext in index.jsx VOR FI RANDATI IN ACEASTA LINIE DE COD UTILIZAND "props.children" */}
        </CartContext.Provider>
    );
}