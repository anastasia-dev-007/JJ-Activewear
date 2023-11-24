import React from 'react'
import styles from "./NavBar.module.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav >
            <div className={styles.fullNavBarContainer}>
                <div className={styles.navBarContainer}>
                    <Link to="/" className={styles.navBarLogo}>
                        <div className={styles.navBarLogo}>
                            <img src="/assets/logo1.png" alt="logo1" />

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
                            <option value="EN">EN<img src="/assets/EN.png" alt="EN" /></option> {/**flag is not displayed((( */}
                            <option value="RO">RO<img src="/assets/RO.png" alt="RO" /></option>{/**flag is not displayed((( */}
                        </select>
                    </div>
                </div>

                <div className={styles.productList}>
                    <ul className={styles.productListItems}>
                        <li><Link to="/products-list?newArrival=Y">NEW ARRIVALS</Link></li>

                        <li><Link to='/products-list'>CATALOGUE</Link></li>

                        <li>
                            <div className={styles.dropDownMenu}>
                                <span><Link to='/products-list?category=Activewear'>ACTIVEWEAR</Link></span>

                                <div className={styles.dropDownMenuList}>
                                    <div styles={styles.dropDownMenuContainer}>
                                        <ul>
                                            <li><Link to="/products-list?category=Activewear&subcategory=Tops%20%26%20Sport%20Bras">Tops & Sport Bras</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategory=T-shirts">T-shirts</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategory=Long-sleeve%20workout%20tops">Long-sleeve workout tops</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategory=Tennis%20Shorts">Tennis Shorts</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategory=Leggings%20%26%20Yoga%20Pants">Leggings & Yoga Pants</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategory=Matching%20Sets">Matching Sets</Link></li>
                                            <li><Link to="/products-list?category=Activewear">All Activewear <i className="fa-solid fa-arrow-right-long"></i></Link></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.dropDownMenu}>
                                <span><Link to='/products-list?category=Swimwear'>SWIMWEAR</Link></span>

                                <div className={styles.dropDownMenuList}>
                                    <div styles={styles.dropDownMenuContainer}>
                                        <ul>
                                            <li id='Swimwear'>
                                                <Link to="/products-list?category=Swimwear">All Swimwear <i class="fa-solid fa-arrow-right-long"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.dropDownMenu}>
                                <span><Link to='/products-list?category=Accessories'>ACCESSORIES</Link></span>

                                <div className={styles.dropDownMenuList}>
                                    <div styles={styles.dropDownMenuContainer}>
                                        <ul>
                                            <li id='Sport Bags'><Link to="/products-list?category=Accessories&subcategory=Sport%20Bags">Sport Bags</Link></li>
                                            <li id='Corsets'><Link to="/products-list?category=Accessories&subcategory=Corsets">Corsets</Link></li>
                                            <li id='Resistance Bands'><Link to="/products-list?category=Accessories&subcategory=Resistance Bands">Resistance Bands</Link></li>
                                            <li id='Accessories'>
                                                <Link to="/products-list?category=Accessories">All Accessories <i class="fa-solid fa-arrow-right-long"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{ color: 'red' }}><Link to="/products-list?promo=Y">OFFERS</Link></li>
                    </ul>
                </div>
            </div>

            {/* Placeholder will ensure normal display of the following component to not be covered */}
            <div className={styles.placeholder}></div>
        </nav>
    )
}
export default NavBar;