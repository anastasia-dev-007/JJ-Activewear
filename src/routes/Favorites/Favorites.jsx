import React from 'react'
import { useContext } from 'react'
import { FavoritesContext } from '../../contexts/favorites.context'
import styles from './Favorites.module.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import MightLikeProducts from '../../components/Recommendations/Recommendations'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
import RecentlyViewed from '../../components/RecentlyViewed/RecentlyViewed'
import Recommendations from '../../components/Recommendations/Recommendations'

const Favorites = () => {
  const favoritesContext = useContext(FavoritesContext);
  // const cartContext = useContext(CartContext);

  // const addToCart = (item) => {
  //   cartContext.addItem(item);
  // }

  const removeItem = (product) => {
    favoritesContext.removeItem(product);
  }

  return (

    <div className={styles.favoritesContainer}>
      {
        favoritesContext.items.length < 1 ? (
          <div className={styles.emptyWishList}>
            <h5>Your wishlist is empty</h5>
            <p>There are no products added to favourites</p>
            <p>Add our favourites to your wishlist</p>
            <Link to='/products-list/'>
              <button>Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <div> Favorites: {favoritesContext.items.length}</div>)
      }

      <div className={styles.ProductCardsContainer}>
        {
          favoritesContext.items.map(item => (
            //Link-ul lucreaza in felul urmator:
            //Daca ai slash in fata, la <Link to= - el face redirect pe pagina aia
            // Daca nu ai slash in fata, el adauga acel link la linkul existent
            ////In exemplul cu students lucra din motiv ca:
            //Noi ne aflam pe pagina /
            // De pe acea pagina noi am facut redirect pe edit. Practic el la / a adaugat edit si intr-un final a fost /edit
            // Daca ne aflam pe alta pagina, de ex. details, si am fi utilizat doar edit era sa fie details/edit
            <div key={item.id} className={styles.productCard}>
             <div className={styles.productImg}>
             <Link to={'/product-details/' + item.id}>
                <img className={styles.productPhoto} src={Array.isArray(item.imgs) && item.imgs.length > 0 ? `/assets${item.imgs[0]}` : ''} alt="" />
              </Link>
             </div>

              <div className={styles.label}>{item.bestSellerStatus}</div>

              <div className={styles.favorites} onClick={() => removeItem(item)}>
                {favoritesContext.items.some(favorite => favorite.id === item.id) ? (
                  <i className="fa-solid fa-heart"></i>
                ) : (
                  <i className="fa-regular fa-heart"></i>
                )}
              </div>



              <div className={styles.cardHeader}><Link to={'/product-details/' + item.id} style={{ fontWeight: '600px' }}>{item.title}</Link></div>
              <div className={styles.cardCategory}>{item.category} | {item.subcategory}</div>
              <div className={styles.cardItemCode}>Item code: {item.id}</div>
              {/* <div style={{ fontSize: '12px', marginBottom: '5px' }}>Color: {item.color}</div> */}
              <div className={styles.cardItemPrice}>{item.currency} {item.price ? `${parseFloat(item.price).toFixed(2)}` : 'N/A'}</div>
              {/* <button onClick={() => removeItem(item)}>Remove</button> */}

              {/* <div className={styles.addToCartAndFavorites}>
                <button className={styles.addToCartBtn} onClick={() => addToCart(item)}>Add to cart <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div> */}
            </div>
          ))
        }
      </div>


      <PopularProducts />
      <Recommendations/>
    </div>
  )
}

export default Favorites;
