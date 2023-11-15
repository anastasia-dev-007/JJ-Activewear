import React from 'react'
import styles from "./NavBar.module.css"
import logo1 from "../../assets/logo1.png";
import EN from "../../assets/EN.png";
import RO from "../../assets/RO.png";
import lp1 from "../../assets/lp1.jpg";

const NavBar = () => {
    return (
        <nav className={styles.fullNavBarContainer}>
            <div className={styles.navBarContainer}>
                <div className={styles.navBarLogo}>
                    <img src={logo1} alt="logo1" />

                    <p>ACTIVEWEAR</p>
                </div>

                <div className={styles.navBarLeft}>
                    <div className={styles.searchContainer}>
                        <input className={styles.searchInput} type="text" placeholder='Search' />
                        <div className={styles.searchIcon} >
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>

                    <i class="fa-regular fa-user"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <select id="language">
                        <option value="EN">EN<img src={EN} alt="EN" /></option> {/**flag is not displayed((( */}
                        <option value="RO">RO<img src={RO} alt="RO" /></option>{/**flag is not displayed((( */}
                    </select>
                </div>
            </div>

            <div className={styles.productList}>
                <ul className={styles.productListItems}>
                    <li>NEW ARRIVALS</li>

                    <li className={styles.activewearList}>
                        <div className={styles.dropDownMenu}>
                            <span>ACTIVEWEAR</span>
                            <div className={styles.dropDownMenuList}>
                                <ul>
                                    <li>Tops & Sport Bras</li>
                                    <li>T-shirts</li>
                                    <li>Long-sleeve workout tops</li>
                                    <li>Tennis Shorts</li>
                                    <li>Leggings & Yoga Pants</li>
                                    <li>Matching Sets</li>
                                </ul>

                                <img width='100px' src={lp1} alt="" />
                            </div>
                        </div>
                    </li>
                    <li>SWIMWEAR</li>
                    <li>ACCESSORIES</li>
                    <li style={{ color: 'red' }}>OFFERS</li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;
