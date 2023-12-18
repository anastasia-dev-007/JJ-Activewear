import { useState } from "react";
import { createContext } from "react";
import { checkIfProductIsAvailable, updateProductByReducing, updateProductByIncreasing } from "../products.service";

export const CartContext = createContext({ //adaugam valori implicite aici pentru a le putea accesa din extern
    items: [],
    addItem: () => { },
    addToCart: () => { },
    removeFromCart: () => { },
    decrementCartItem: () => { },
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


    function addToCart(product, selectedSize, quantity) {
        //is quantity available?
        //Verifici daca produsul este disponibil, transmit ca parametru la functia checkIfProductIsAvailable id-ul produsului
        const isAvailable = checkIfProductIsAvailable(product.id, selectedSize, quantity);
        // YES? ->
        if (isAvailable) { //Daca este ->
            //decrease quantity of item
            const updatedProduct = updateProductByReducing(product.id, selectedSize, quantity);

            //Fac update la produs(transmit id-ul deoarece el se asteapta in acea functie)
            if (typeof updateProductByReducing === 'string') { //Functia updateProduct retuneaza fie obiectul modificat, fie un string ce reprezinta eroarea. Daca rezultatul din functie este un string (inseamna ca este o eroare), eu afisez in consola acel string - dar ar trebui de afisat o eroare
                console.log(updatedProduct);
            } else { //Daca nu este string, atunci eu apelez functia addItem pentru al adauga in cos
                //add item to items
                addItem(product, selectedSize, quantity);
            }
        } else { //Daca produsul nu este disponibil, afisez o eroare
            console.log('Product is not available');
        }
    };


    //function decrementCartItemExlanation (product, selectedSize, quantity) {
    //1. find product and selectedsize (const cartItem + method find)
    //2. if found...
    //if item quantity higher then 0:
    //decrease quantity in cart and increase back quantity in products.service with updateProduct function
    //else if item quantity is lower then 0 => removeProduct from cart (removeFromCart(product.id, selectedSize))
    // }


    // New function to decrement items in the cart and update product availability
    const decrementCartItem = (product, selectedSize, quantity) => {
        const cartItem = cartItems.find(
            (item) => item.id === product.id && item.selectedSize === selectedSize
        );

        if (cartItem) {
            if (quantity > 0 && quantity <= cartItem.quantity) {
                // Decrease quantity in the cart
                const updatedQuantity = cartItem.quantity - quantity;

                // Update cart items
                setCartItems((prevCartItems) =>
                    prevCartItems.map((item) =>
                        item.id === product.id && item.selectedSize === selectedSize
                            ? { ...item, quantity: updatedQuantity }
                            : item
                    )
                );

                // Update product availability in the database
                const updatedProduct = updateProductByIncreasing(
                    product.id,
                    selectedSize,
                    quantity
                );

                if (typeof updatedProduct === 'string') {
                    console.log(updatedProduct); // Handle error if needed
                }

                // Remove the item from the cart if quantity becomes 0
                if (updatedQuantity === 0) {
                    removeFromCart(product.id, selectedSize);
                }
            }
        }
    };

    const removeFromCart = (itemId, selectedSize) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter(
                (item) => !(item.id === itemId && item.selectedSize === selectedSize)
            )
        );
    };

    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            addItem: addItem,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            decrementCartItem: decrementCartItem,
        }}>
            {props.children} {/**copii lui CartContext in index.jsx VOR FI RANDATI IN ACEASTA LINIE DE COD UTILIZAND "props.children" */}
        </CartContext.Provider>
    );
}