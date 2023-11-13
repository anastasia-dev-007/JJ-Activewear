import React from 'react'
import pop1 from "../../components/assets/pop1.jpg"
import styles from "./PopularProducts.module.css"


const PopularProducts = () => {
    const popularProductsList = [
        {
            id: 1,
            img: pop1,
            title: 'Matching Set',
            description: 'Workout Premium Push-Up Set: Sculpting Leggings and High-Waistband for Tummy Control, Back Support, and Flattering Silhouette',
            currency: '$',
            price: 80
        },
        {
            id: 2,
            img: pop1,
            title: 'Matching Set',
            description: 'Workout Premium Push-Up Set: Sculpting Leggings and High-Waistband for Tummy Control, Back Support, and Flattering Silhouette',
            currency: '$',
            price: 80
        },
        {
            id: 3,
            img: pop1,
            title: 'Matching Set',
            description: 'Workout Premium Push-Up Set: Sculpting Leggings and High-Waistband for Tummy Control, Back Support, and Flattering Silhouette',
            currency: '$',
            price: 80
        },

    ]

    return (
        <div className={styles.popularProductsContainer}>
            <i class="fa-solid fa-chevron-left" ></i>
            {popularProductsList.map(item => (
                <div className={styles.popularProductCard}
                    key={item.id}>
                    <img src={item.img} alt={item.title} />
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
                        <p>{item.description}</p>
                        <p>{item.currency} {item.price}</p>
                        <div>
                            <button>Add to cart</button>
                            <button>Details</button>
                        </div>
                    </div>
                </div>
            ))}
            <i class="fa-solid fa-chevron-right" ></i>

        </div>
    )
}

export default PopularProducts;