import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getProductById, products } from '../../products.service';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(getProductById(+id)); //transmitem id in form numerica de asta punem "+"
  }, [id]);

   // Check if product is null before rendering
   if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <header>
        <Link to={"/"}>Home | Activewear | Leggings | Workout Premium Push-Up Set</Link>
      </header>

          <div key={product.id}>
            <div className='productGallery'>{product.img}</div>

            <div className='productDetails'>
              <header>{product.title}</header>
              <p>Item code: LF028</p>
              <p>$ 50.00</p>
              <div className='sizes'>
                <header>Size</header>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <p>Size Guide</p>
              </div>

              <div className='colors'>
                <header>Color</header>
                <div className='colorCircles'></div>
              </div>

              <div>
                <button>Add to cart</button>
                <div className='quantity'>
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
                <button><i class="fa-regular fa-heart"></i>
                </button>
              </div>

              <div className='productDescription'> {/*To make this section scroling but fixed in size like on Moonglow webpage*/}
                <header>Product description</header>
                <div>
                  Get ready to flaunt your curves with our Premium Push-Up Set. Our push-up technology and sculpting leggings will give you a flattering silhouette that is perfect for any activity.
                  Stay comfortable and confident during any activity with moisture-wicking fabric and a high-waistband that offers tummy control and additional support. Perfect gym clothes for women
                  Feel confident and supported with our high-waist leggings and push-up sports bra. Our tummy control and moisture-wicking fabric will keep you comfortable throughout your workout.
                  Upgrade your workout gear with JJ Activewear's Premium Set. Our breathable and sculpting leggings and push-up sports bra are available in a range of sizes and colors to choose from
                  Our sculpting leggings and push-up sports bra provide maximum support and enhance your curves, making it the perfect addition to your workout clothes collection
                </div>
              </div>
            </div>
          </div>

      <div className='similarProducts'>
        <header>You might also like</header>
        <div className='fiveCards'></div>
      </div>

      <div className='similarProducts'>
        <header>You might also like</header>
        <div className='fiveCards'></div>
      </div>

      <div className='recentlyViewed'>
        <h3>Recently Viewed Products</h3>
        <div className='fiveCards'></div>
      </div>
    </div>
  )
}

export default ProductDetails;