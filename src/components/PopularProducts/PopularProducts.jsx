import React from 'react'
import styles from "./PopularProducts.module.css"
import { products } from '../../products.service'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { FavoritesContext } from '../../contexts/favorites.context'


const PopularProducts = () => {
    const favoritesContext = useContext(FavoritesContext);

    const toggleFavoriteItem = (product) => {
        favoritesContext.toggleFavoriteItem(product);
    }

    return (
        <div className={styles.popularProductsWrapper}>
            <h3>Popular Products</h3>
           <div className={styles.popularProductsContainer}>
           {/* <i class="fa-solid fa-chevron-left" ></i> */}
            {products.filter(item => item.bestSellerStatus === 'Best Seller')
            .map(item => (
                <div className={styles.popularProductCard}
                    key={item.id}>
                         <div key={item.id} className={styles.productCard}>
                <Link to={'/product-details/' + item.id}>
                  <div className={styles.popularProductImg}>
                  <img src={Array.isArray(item.imgs) && item.imgs.length > 0 ? `/assets${item.imgs[0]}` : ''} alt="" />
                  </div>
                </Link>

                <div className={styles.label}>{item.bestSellerStatus}</div>

                <div className={styles.favorites}>
                <div onClick={() => toggleFavoriteItem(item)}>
                    {favoritesContext.items.some(favorite => favorite.id === item.id) ? (
                      // Render a solid heart if the item is in favorites
                      <i className="fa-solid fa-heart"></i>
                    ) : (
                      // Render a regular heart if the item is not in favorites
                      <i className="fa-regular fa-heart"></i>
                    )}
                  </div>
                </div>

                <Link to={'/product-details/' + item.id} style={{ fontWeight: '600px' }}>{item.title}</Link>
                <div style={{ fontSize: '12px', marginBottom: '5px' }}>{item.category} | {item.subcategory}</div>
                <div style={{ fontSize: '14px', marginBottom: '5px' }}>{item.currency} {item.price.toFixed(2)}</div>

                {/* <div className={styles.addToCartAndFavorites}>
                  <button className={styles.addToCartBtn} onClick={(item) => addToCart(item)}>Add to favorites <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </div> */}
              </div>





                    {/* <div className={styles.popProductImg}>
                    <img src={Array.isArray(item.imgs) && item.imgs.length > 0 ? `/assets${item.imgs[0]}` : ''} alt={item.title} />
                    </div>
                    <p>Popular</p>
                    <ul>
                        <li>XXS</li>
                        <li>XS</li>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                    </ul>
                    <div>
                        <header>{item.title}</header>
                        <p>{item.category} | {item.subcategory}</p>
                        <p>{item.currency} {item.price}</p>
                        <div>
                            <button>Add to cart</button>
                            <button>Details</button>
                        </div>
                    </div> */}

                </div>
            ))}
            {/* <i class="fa-solid fa-chevron-right" ></i> */}
           </div>

        </div>
    )
}

export default PopularProducts;