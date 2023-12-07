import React from 'react'
import { useState } from 'react';
import { products } from '../../products.service';
import styles from "../PopularProducts/PopularProducts.module.css"
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { FavoritesContext } from '../../contexts/favorites.context'

const Recommendations = () => {
    const [randomProducts, setRandomProducts] = useState([]);

    const favoritesContext = useContext(FavoritesContext);

    const toggleFavoriteItem = (product) => {
        favoritesContext.toggleFavoriteItem(product);
    }

    useEffect(() => {
        if (products && products.length > 0) {
          // Assuming you have a function getRandomProducts that takes an array and a count
          const getRandomProducts = (array, count) => {
            const shuffledArray = array.sort(() => Math.random() - 0.5);
            return shuffledArray.slice(0, count);
          };
    
          const numberOfRandomProducts = 5; // Adjust the number of random products you want to display
          const selectedRandomProducts = getRandomProducts(products, numberOfRandomProducts);
          setRandomProducts(selectedRandomProducts);
        }
      }, [products]);

    return (
        <div className={styles.popularProductsWrapper}>
        <h3>Recommendations for you</h3>
       <div className={styles.popularProductsContainer}>
       {/* <i class="fa-solid fa-chevron-left" ></i> */}
        {randomProducts.map(item => (
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

export default Recommendations;