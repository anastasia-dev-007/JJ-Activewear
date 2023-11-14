import React from 'react'
import styles from "./WhyChooseJJ.module.css"
import sculpt from "../../assets/sculpt.png"
import durability from "../../assets/durability.png"
import fashion from "../../assets/fashion.png"
import guarantee from "../../assets/guarantee.png"

const WhyChooseJJ = () => {
    const reasonsToChooseJJ = [
        {
            id: 1,
            icon: fashion,
            title: 'Fashion and Style',
            description: 'Beyond functionality, JJ Activewear follows  trend and offers a range of stylish and trendy options for their fitness routines.',
        },
        {
            id: 2,
            icon: durability,
            title: 'Durability and Longevity',
            description: 'Clothing is more durable and has a longer lifespan perfect for regular and intense workouts associated with active lifestyles.',
        },
        {
            id: 3,
            icon: sculpt,
            title: 'Body Sculpting Design',
            description: 'Activewear specifically tailored for body sculpting, helping to create a flattering silhouette. boosting confidence and motivation during workouts.',
        },
        {
            id: 4,
            icon: guarantee,
            title: '30 days  Guarantee',
            description: 'A 30-day warranty allows you to return product  for a refund or replacement at the request, to build trust and confidence in the brand.',
        },
    ];

    return (
        <div className={styles.chooseJJContainer}>
            <header>
                <h1>Why to choose JJ Activewear?</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </header>

            <div className={styles.cardsChooseJJ}>
                {reasonsToChooseJJ.map(item => (
                    <div key={item.id} className={styles.cardChooseJJ}>
                        <img width='40px' src={item.icon} alt="card1" />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChooseJJ;
