import React from 'react'
import { useContext } from 'react'
import { FavoritesContext } from '../../contexts/favorites.context'
import styles from './Favorites.module.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import MightLikeProducts from '../../components/Recommendations/Recommendations'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
import RecentlyViewed from '../../components/RecentlyViewed/RecentlyViewed'

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
      <div> Favorites: {favoritesContext.items.length}</div>
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
              <Link to={'/product-details/' + item.id}>
                <img src={Array.isArray(item.imgs) && item.imgs.length > 0 ? `/assets${item.imgs[0]}` : ''} alt="" />
              </Link>

              <div className={styles.label}>{item.bestSellerStatus}</div>

              <div className={styles.favorites} onClick={() => removeItem(item)}>
                {favoritesContext.items.some(favorite => favorite.id === item.id) ? (
                  <i className="fa-solid fa-heart"></i>
                ) : (
                  <i className="fa-regular fa-heart"></i>
                )}
              </div>

              <Link to={'/product-details/' + item.id} style={{ fontWeight: '600px' }}>{item.title}</Link>
              <div style={{ fontSize: '12px', marginBottom: '5px' }}>{item.category} | {item.subcategory}</div>
              <div style={{ fontSize: '14px', marginBottom: '5px' }}>{item.currency} {item.price.toFixed(2)}</div>
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

      <RecentlyViewed />
    </div>
  )
}

export default Favorites;
