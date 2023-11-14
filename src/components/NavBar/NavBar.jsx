import React from 'react'
import styles from "./NavBar.module.css"
import logo1 from "../../assets/logo1.png";
import EN from "../../assets/EN.png";
import RO from "../../assets/RO.png";

const NavBar = () => {
    return (
        <nav className={styles.navBarContainer}>
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
        </nav>
    )
}
export default NavBar;
