import React, { useState } from 'react'
import styles from '../ShoppingCart/ShoppingCart.module.css'
import MightLikeProducts from '../../components/Recommendations/Recommendations';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Link } from 'react-router-dom';
import { addToCart } from '../../products.service';
import { updateProductQuantity } from '../../products.service';
import { decrementCartItem } from '../../contexts/cart.context';
import Checkout from '../Checkout/Checkout';



const ShoppingCart = () => {
  const cartContext = useContext(CartContext); //consumam contextul
  const [quantity, setQuantity] = useState(1); // State to manage the quantity

  const subtotalPrice = cartContext.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  //   const handleRemoveFromCart = (itemId) => {
  //     cartContext.removeFromCart(product, selectedSize, quantity);
  // };

  const { addToCart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);
  const { decrementCartItem } = useContext(CartContext);


  return (
    <div className={styles.shoppingCartPage}>
      {
        cartContext.cartItems.length < 1 ? (
          <div className={styles.emptyShoppingCart}>
            <h5>Your cart is empty</h5>
            <p>There are no products added to shopping cart</p>
            <p>Add our products to the cart</p>
            <Link to='/products-list/'>
              <button>Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <div className={styles.shoppingCartContainer}>
            <div className={styles.cartContent}>
              {
                cartContext.cartItems.length < 1 ? (
                  <></>
                ) : (
                  <div style={{marginBottom: '20px'}}>Shopping Cart: {cartContext.cartItems.reduce((total, item) => total + item.quantity, 0)}</div>)
              }

              {/**Info will be rendered from the constant of cart array */}
              {
                cartContext.cartItems.map(item => (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.imageContainer}>
                      <Link to={'/product-details/' + item.id}>
                        <div className={styles.image}>
                          <img
                            src={Array.isArray(item.imgs) && item.imgs.length > 0 ? `/assets${item.imgs[0]}` : ''}
                            alt={`Product: ${item.title}`}
                          />
                        </div></Link>
                    </div>
                    <div className={styles.infoPriceAndBtnContainer}>
                      <div className={styles.productInfoAndPrice}>
                        <div className={styles.productInfo}>
                          <div style={{fontWeight: '900'}}>{item.title}</div>
                          <div>Item ID: {item.id}</div>
                          <div>{item.category} | {item.subcategory}</div>
                          <div>Quantity: {item.quantity}</div>
                          <div>Size: {item.selectedSize}</div>
                          <div>Color: {item.color}</div>

                          <div className={styles.quantity}>
                            <header>Quantity</header>
                            <div className={styles.quantityPanel}>
                              <button
                                disabled={item.size[item.selectedSize] === 0}
                                onClick={() => decrementCartItem(item, item.selectedSize, quantity)}
                              >
                                -
                              </button>
                              <p className={styles.quantityInput} style={{ width: '40px', height: '28px', fontSize: '14px' }}>{item.quantity}</p>
                              <button
                                disabled={quantity >= item.size[item.selectedSize]}
                                onClick={() => addToCart(item, item.selectedSize, quantity)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <div style={{fontWeight: '900'}} className={styles.price}>
                        {item.currency} {parseFloat(item.quantity * item.price).toFixed(2)}
                          </div>
                      </div>

                      <div className={styles.removeBtn}>
                        <button onClick={() => removeFromCart(item.id, item.selectedSize)}>Remove</button>
                      </div>
                    </div >
                  </div>
                ))
              }


            </div>

            <div className={styles.total}>
              <div className={styles.subTotalLine}>
                <div className={styles.subTotal}>Subtotal</div>
                <div className={styles.subTotalPrice}>$ {subtotalPrice.toFixed(2)}</div>
              </div>
              
              <div className={styles.deliveryLine}>
                <div className={styles.delivery}>Delivery</div>
                <div className={styles.deliveryPrice}>$ 10</div>
              </div>
              <hr></hr>
              <div style={{fontWeight: '900'}} className={styles.deliveryLine}>
                <div className={styles.delivery}>Total</div>
                <div className={styles.deliveryPrice}>$ {subtotalPrice + 10}</div>
              </div>

              <div className={styles.buyBtn}>
                <Checkout />
              </div>
            </div>
          </div>
        )
      }

      <MightLikeProducts />
    </div>

  )
}

export default ShoppingCart;
