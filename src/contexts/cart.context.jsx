import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({ //adaugam valori implicite aici pentru a le putea accesa din extern
    items: [],
    addItem: () => { }
});
{/**Toate proprietatile care le afisam se declara aici in acest file. Aici noi indicam ce valori sunt expuse din acest context: lista de produse, addProducts(), deleteProducts(), removeAll(),isOpen(true/false), etc. */ }

export function CartProvider(props) { //acesta este un component React
    const [cartItems, setCartItems] = useState([]); //cream un state care va tine datele

    //cream functii necesare pentru a lucra cu shopping cart
    const addItem = (item) => {
        console.log(item);
        setCartItems([...cartItems, item]);
    }
    
    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            addItem: addItem,
        }}>
            {props.children} {/**copii lui CartContext in index.jsx VOR FI RANDATI IN ACEASTA LINIE DE COD UTILIZAND "props.children" */}
        </CartContext.Provider>
    );
}