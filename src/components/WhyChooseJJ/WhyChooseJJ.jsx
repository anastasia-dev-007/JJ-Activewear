import React from 'react'
import styles from "./WhyChooseJJ.module.css"

const WhyChooseJJ = () => {
    const reasonsToChooseJJ = [
        {
            id: 1,
            icon: '',
            title: 'Body Sculpting Design',
            description: 'Activewear that are specifically tailored for body sculpting can provide additional support and compression, helping to create a flattering silhouette. This can boost confidence and motivation during workouts, as individuals feel more comfortable and confident in their activewear.',
        },
        {
            id: 2,
            icon: '',
            title: 'Durability and Longevity',
            description: 'Investing in high-quality activewear often means that the clothing is more durable and has a longer lifespan. This can be particularly beneficial for those who engage in regular and intense workouts, as the clothes will withstand the wear and tear associated with active lifestyles.',
        },
        {
            id: 3,
            icon: '',
            title: 'Fashion and Style',
            description: 'Beyond functionality, premium activewear brands often prioritize fashion and style in their designs. JJ Activewear, if it follows this trend, might offer a range of stylish and trendy options, allowing women to express their personal style while staying comfortable and supported during their fitness routines.',
        },
        {
            id: 4,
            icon: '',
            title: '30 days  Guarantee',
            description: 'A 30-day warranty allows customers to thoroughly test and assess the activewear. If they are not satisfied with the product within the specified period, they can return it for a refund or replacement. This helps build trust and confidence in the brand.',
        },
    ];

    return (
        <div className={styles.chooseJJContainer}>
            <header>
                <h1>Why to choose JJ Activewear?</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </header>

            <div className="cardsChooseJJ">
                <div className="cardChooseJJ">
                    <img src="" alt="card1" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos</p>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseJJ;
