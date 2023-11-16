import React from 'react'
import styles from '../ProductCard/ProductCard.module.css'
import { products } from '../../products.service'

const ProductCard = () => {
    return (
        <div className={styles.ProductCardContainer}>
            <header>
                <img src={products.img} alt="" />
            </header>

            <div className='label'>{products.status}</div>

            <p>{products.title}</p>
            <p>{products.currency} {products.price}</p>

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