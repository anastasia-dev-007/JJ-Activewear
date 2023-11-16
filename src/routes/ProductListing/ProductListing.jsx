import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductListing = () => {
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

      <div className='productsCards'>
        <ProductCard/>
      </div>

      <button>More</button>

      <div className='recentlyViewed'>
        <h3>Recently Viewed Products</h3>
        <div className='fiveCards'>
        <ProductCard/>
        </div>
      </div>
    </div>
  )
}

export default ProductListing;