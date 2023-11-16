import React from 'react'
import styles from '../ProductCard/ProductCard.module.css'

const ProductCard = () => {
    return (
        <div className={styles.ProductCardContainer}>
            <header>
                <img src="https://scontent.fkiv1-1.fna.fbcdn.net/v/t39.30808-6/280215095_946063639401235_8011289012380031177_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fVN55iNyKhEAX-RLDmX&_nc_ht=scontent.fkiv1-1.fna&oh=00_AfASTM5Ge1lHQEjSu-NKDuSXwKtJRpgAnSq0gGPlBywwKw&oe=655AD6C4" alt="" />
            </header>

            <div className='label'>Popular</div>

            <p>Product Title</p>
            <p>$ 0.00</p>

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
    )
}

export default ProductCard;