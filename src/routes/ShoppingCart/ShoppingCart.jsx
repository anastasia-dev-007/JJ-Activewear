import React from 'react'
import styles from '../ShoppingCart/ShoppingCart.module.css'
import MightLikeProducts from '../../components/Recommendations/Recommendations';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const cartContext = useContext(CartContext); //consumam contextul

  const subtotalPrice = cartContext.cartItems.reduce((total, item) => total + item.price, 0);

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
              <div>Shopping Cart "{cartContext.cartItems.length}"</div>)
          }

          {/**Info will be rendered from the constant of cart array */}
          {
            cartContext.cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.imageContainer}>
                  <div className={styles.image}>
                    <img
                      src={Array.isArray(item.imgs) && item.imgs.length > 0 ? `/assets${item.imgs[0]}` : ''}
                      alt={`Product: ${item.title}`}
                    />
                  </div>
                </div>
                <div className={styles.infoPriceAndBtnContainer}>
                  <div className={styles.productInfoAndPrice}>
                    <div className={styles.productInfo}>
                      <div>{item.title}</div>
                      <div>{item.category} | {item.subcategory}</div>
                      <div>Quantity: {item.quantity}</div>
                      <div>Size: {item.size}</div>
                      <div>Color: {item.color}</div>
                    </div>

                    <div className={styles.price}>{item.currency} {item.price.toFixed(2)}</div>
                  </div>

                  <div className={styles.removeBtn}>
                    <button>Remove</button>
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

          <div className={styles.buyBtn}>
            <button>Buy</button>
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
