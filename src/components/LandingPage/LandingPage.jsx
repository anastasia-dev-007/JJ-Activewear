import React from 'react'
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import EN from "./assets/EN.png";
import RO from "./assets/RO.png";
import styles from './LandingPage.module.css';
import Carousel from '../Carousel/Carousel';
import PopularProducts from '../PopularProducts/PopularProducts';
import Reviews from "../Reviews/Reviews"

const LandingPage = () => {
    return (
        <div className={styles.mainContainer}>
            <nav className={styles.navBarContainer}>
                <div className='navBarRight'>
                    <img style={{ width: '60px' }} src={logo1} alt="logo1" />
                    <img style={{ width: '400px' }} src={logo2} alt="logo2" />
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

            <div className={styles.productList}>
                <ul style={{ listStyle: 'none' }}>
                    <li>NEW ARRIVALS</li>
                    <li>ACTIVEWEAR</li>
                    <li>SWIMWEAR</li>
                    <li>ACCESSORIES</li>
                    <li style={{ color: 'red' }}>OFFERS</li>
                </ul>
            </div>

            <div className={styles.carouselContainer}>
                <div className={styles.carouselWindow}>
                    <div className={styles.item1}></div>
                    <div className={styles.item2}></div>
                    <div className={styles.item3}></div>
                </div>
            </div>

            <Carousel />

            <PopularProducts />

            <Reviews />

            <div className="chooseJJContainer">
                <header>
                    <p>Why to choose JJ Activewear?</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </header>

                <div className="cardsChooseJJ">
                    <div className="cardChooseJJ">
                        <img src="" alt="card1" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos</p>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="upFooter">
                    <div>
                        <img src={logo3} alt="logo3" />
                    </div>
                    <div>
                        <header>Company</header>
                        <ul>
                            <li>About us</li>
                            <li>Confidentiality</li>
                            <li>Return Policy</li>
                            <li>Delivery Conditions</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Products</h4>
                        <ul>
                            <li><a href="#">Furniture</a></li>
                            <li><a href="#">Decoration</a></li>
                            <li><a href="#">Storage</a></li>
                            <li><a href="#">Baby and child</a></li>
                            <li><a href="#">Connected home</a></li>
                        </ul>
                    </div>

                    <div>
                        <header>Contacts</header>
                        <ul>
                            <li>+373 79 888 888</li>
                            <li>jj-activewear@gmail.com</li>
                        </ul>
                    </div>


                </div>

                <div className="socialMedia">
                    <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-square-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                </div>

                <div className="downFooter">
                    <p>Copyrights 2023 Tataru Anastasia</p>
                </div>
            </footer>
        </div>
    )
}


export default LandingPage;