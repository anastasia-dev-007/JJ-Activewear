import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../products.service';
import styles from '../ProductDetails/ProductDetails.module.css';
import { CartContext } from '../../contexts/cart.context';
import Offcanvas from 'react-bootstrap/Offcanvas';


const ShoppingOffcanvas = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null); // Add selectedSize state


    const [show, setShow] = useState(false); //for offCanvas
    const handleClose = () => setShow(false);//for offCanvas
    const { addToCart } = useContext(CartContext);
    const { decrementCartItem } = useContext(CartContext);

    useEffect(() => {
        setProduct(getProductById(+id)); //transmitem id in form numerica de asta punem "+"
    }, [id]);

    //La prima randare setam valoare implicita prima marime din produs.De fiecare data cand product se modifica, daca el exista, setez o noua valoare in selectedSize, prima proprietate 
    useEffect(() => {
        if (product) {
            setSelectedSize(Object.keys(product.size)[0]);
        }
    }, [product]);

    const cartContext = useContext(CartContext);// consumam contextul
    const subtotalPrice = cartContext.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title> Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    cartContext.cartItems.map(item => (
                        <div key={item.id} className={styles.cartItem}>
                            <div className={styles.imageContainer}>
                                <div className={styles.image}>
                                    <Link to={'/product-details/' + item.id}>
                                        <img
                                            src={Array.isArray(item.imgs) && item.imgs.length > 0 ? `/assets${item.imgs[0]}` : ''}
                                            alt={`Product: ${item.title}`}
                                        /></Link>
                                </div>
                            </div>
                            <div className={styles.infoPriceAndBtnContainer}>
                                <div className={styles.productInfoAndPrice}>
                                    <div className={styles.productInfo}>
                                        <div>{item.title}</div>
                                        <div>{item.category} | {item.subcategory}</div>
                                        <div>Item code: {item.id}</div>
                                        <div>Quantity: {item.quantity}</div>
                                        <div>Size: {item.selectedSize}</div>
                                        <div>Color: {item.color}</div>
                                    </div>

                                    <div className={styles.price}> Price: {item.currency} {parseFloat(item.price).toFixed(2)}</div>
                                </div>

                                <div className={styles.quantity}>
                                    <header>Quantity</header>
                                    <div className={styles.quantityPanel}>
                                        <button
                                            disabled={product[selectedSize] === 0} // Update here
                                            onClick={() => decrementCartItem(item, item.selectedSize, quantity)}
                                        >
                                            -
                                        </button>
                                        <button>{item.quantity}</button>
                                        <button
                                            disabled={quantity >= product[selectedSize]} // Update here
                                            onClick={() => addToCart(item, item.selectedSize, quantity)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* <div className={styles.removeBtn}>
                              <button>Remove</button>
                            </div> */}
                            </div >
                        </div>
                    ))
                }

                <div className={styles.total}>
                    <div className={styles.subTotalLine}>
                        <div className={styles.subTotal}>Subtotal</div>
                        <div className={styles.subTotalPrice}>$ {subtotalPrice.toFixed(2)}</div>
                    </div>
                    <div className={styles.deliveryLine}>
                        <div className={styles.delivery}>Delivery</div>
                        <div className={styles.deliveryPrice}>$ 10</div>
                    </div>

                    <div className={styles.buyBtn}>
                        <Link to='/shopping-cart'>
                            <button>
                                <span>Go to cart</span>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ShoppingOffcanvas;