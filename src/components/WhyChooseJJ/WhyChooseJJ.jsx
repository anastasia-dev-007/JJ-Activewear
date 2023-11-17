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
            title: 'Versatile Style',
            description: 'Beyond functionality, JJ Activewear are designed with a sleek and stylish aesthetic, making them suitable for both exercise and casual wear. You can effortlessly transition from the gym to running errands while looking fashionable.',
        },
        {
            id: 2,
            icon: durability,
            title: 'Tightening effect',
            description: 'Our products have the ability to provide a firm and sculpted appearance to your legs and waist. These leggings are designed with specialized compression fabric that offers optimal support and shaping, helping to smooth out and tighten your silhouette. Enjoy a confident and streamlined look with our tightening effect leggings.',
        },
        {
            id: 3,
            icon: sculpt,
            title: 'Enhanced Push-Up Effect',
            description: 'Our leggings are designed with special contouring to provide a flattering push-up effect, giving you a more defined and lifted appearance.',
        },
        {
            id: 4,
            icon: guarantee,
            title: 'Superior Comfort',
            description: 'Our leggings and longsleeve are crafted from high-quality, breathable fabrics that offer excellent stretch and support, allowing for unrestricted movement during workouts or everyday wear.',
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
