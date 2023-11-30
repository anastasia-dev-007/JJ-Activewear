import React from 'react'
import styles from '../ShoppingCart/ShoppingCart.module.css'
import MightLikeProducts from '../../components/MightLikeProducts/MightLikeProducts';
import { products } from '../../products.service';

const ShoppingCart = () => {
  return (
    <div className={styles.shoppingCartPage}>
      <div className={styles.shoppingCartContainer}>
        <div className={styles.cartContent}>
          <header>Shopping Cart "in brackets number of items in cart"</header>

{/**Info will be rendered from the constant of cart array */}
         {
          products.filter(products.status === '').map(item => (
            <div className={styles.cartItem}>
            <div className={styles.image}></div>
            <div>
              <div className={styles.productInfo}></div>
              <button className={styles.removeItemBtn}>Remove</button>
            </div>
            <div className={styles.price}></div>
          </div>
          ))
         }
        </div>

        <div className={styles.Total}>
          <div className='subTotalLine'>
            <div className="subTotal"></div>
            <div className="subTotalPrice"></div>
          </div>
          <div className='deliveryLine'>
            <div className="delivery"></div>
            <div className="deliveryPrice"></div>
          </div>

          <div>
            <button>Buy</button>
          </div>
        </div>
      </div>

      <MightLikeProducts />
    </div>

  )
}

export default ShoppingCart;
