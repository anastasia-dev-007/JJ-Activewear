import React from 'react'
import styles from "./NavBar.module.css"
import logo1 from "../../assets/logo1.png";
import EN from "../../assets/EN.png";
import RO from "../../assets/RO.png";
import lp1 from "../../assets/lp1.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../../products.service';

const NavBar = () => {

    return (
        <nav >
            <div className={styles.fullNavBarContainer}>
                <div className={styles.navBarContainer}>
                    <Link to="/" className={styles.navBarLogo}>
                        <div className={styles.navBarLogo}>
                            <img src={logo1} alt="logo1" />

                            <p>ACTIVEWEAR</p>
                        </div></Link>

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
                        <li><Link to="/products-list/newArrival">NEW ARRIVALS</Link></li>

                        <li><Link to='/products-list'>CATALOGUE</Link></li>

                        <li>
                            <div className={styles.dropDownMenu}>
                                <span>ACTIVEWEAR</span>

                                <div className={styles.dropDownMenuList}>
                                    <div styles={styles.dropDownMenuContainer}>
                                    <ul>
                                                <li><Link to="/products-list/Activewear/Tops & Sport Bras">Tops & Sport Bras</Link></li>
                                                <li><Link to="/products-list/Activewear/T-shirts">T-shirts</Link></li>
                                                <li><Link to="/products-list/Activewear/Long-sleeve workout tops">Long-sleeve workout tops</Link></li>
                                                <li><Link to="/products-list/Activewear/Tennis Shorts">Tennis Shorts</Link></li>
                                                <li><Link to="/products-list/Activewear/Leggings & Yoga Pants">Leggings & Yoga Pants</Link></li>
                                                <li><Link to="/products-list/Activewear/Matching Sets">Matching Sets</Link></li>
                                                <li><Link to="/products-list/Activewear">All Activewear <i class="fa-solid fa-arrow-right-long"></i></Link></li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.dropDownMenu}>
                                <span>SWIMWEAR</span>

                                <div className={styles.dropDownMenuList}>
                                    <div styles={styles.dropDownMenuContainer}>
                                        <ul>
                                            <li id='Swimwear'>
                                                <Link to="/products-list/Swimwear">All Swimwear <i class="fa-solid fa-arrow-right-long"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.dropDownMenu}>
                                <span>ACCESSORIES</span>

                                <div className={styles.dropDownMenuList}>
                                    <div styles={styles.dropDownMenuContainer}>
                                        <ul>
                                            <li id='Sport Bags'><Link to="/products-list/Accessories/Sport Bags">Sport Bags</Link></li>
                                            <li id='Corsets'><Link to="/products-list/Accessories/Corsets">Corsets</Link></li>
                                            <li id='Resistance Bands'><Link to="/products-list/Accessories/Resistance Bands">Resistance Bands</Link></li>
                                            <li id='Accessories'>
                                                <Link to="/products-list/Accessories">All Accessories <i class="fa-solid fa-arrow-right-long"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{ color: 'red' }}><Link to="/products-list/promo">OFFERS</Link></li>
                    </ul>
                </div>
            </div>

            {/* Placeholder will ensure normal display of the following component to not be covered */}
            <div className={styles.placeholder}></div>
        </nav>
    )
}
export default NavBar;