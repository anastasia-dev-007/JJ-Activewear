import React, { useState, useEffect } from 'react'
import { getProducts } from '../../products.service';
import styles from "../ProductListing/ProductListing.module.css"

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Used the `getProducts` function to fetch products data and update the state.
    const data = getProducts();

    setProducts(data);
  }, []);

  return (
    <div>
      <header>
        <div className='path'>
          <p>Home | Page with title of category selected by user</p>
        </div>

        <div className='title'>
          <h2>Title of category selected by user</h2>
        </div>
      </header>

      <div className='sortByPrice'></div>

      {/* to copy style from Aimo */}
      <div className='filterContainer'>
        <div className='categoryAccordions'></div>
        <div className='colorsAccordions'></div>
        <div className='sizeAcordeon'></div>
        <div className='priceRuler'></div>
      </div>

      <div className={styles.ProductCardContainer}>
        {
          products.map(item => (
            <div key={item.id}>
              <header>
                <img src={item.img} alt="" />
              </header>

              <div className='label'>{item.status}</div>

              <p>{item.title}</p>
              <p>{item.currency} {item.price}</p>

              <div>
                <button>Add to cart</button>

                <button>
                  <i class="fa-regular fa-heart"></i>
                </button>

                <button>
                  <i class="fa-solid fa-heart"></i>
                </button>
              </div>
            </div>
          ))
        }
      </div>

      <button>More</button>

      <div className='recentlyViewed'>
        <h3>Recently Viewed Products</h3>
        <div className='fiveCards'></div>
      </div>
    </div>
  )
}

export default ProductListing;