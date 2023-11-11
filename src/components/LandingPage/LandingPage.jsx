import React from 'react'
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import EN from "./assets/EN.png";
import RO from "./assets/RO.png";
import lp1 from "./assets/lp1.jpg";
import lp2 from "./assets/lp2.jpg";
import lp3 from "./assets/lp3.jpg";
import pop1 from "./assets/pop1.jpg"

const LandingPage = () => {
    return (
        <div>
            <nav className="navBar">
                <img src={logo1} alt="logo1" />
                <img src={logo2} alt="logo2" />
                <input type="text" placeholder='Search' />
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-user"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <select id="language">
                    <option value="EN">EN<img src={EN} alt="EN" /></option> {/**flag is not displayed((( */}
                    <option value="RO">RO<img src={RO} alt="RO" /></option>{/**flag is not displayed((( */}
                </select>
            </nav>

            <div className="productsList">
                <ul style={{ listStyle: 'none' }}>
                    <li>NEW ARRIVALS</li>
                    <li>ACTIVEWEAR</li>
                    <li>SWIMWEAR</li>
                    <li>ACCESSORIES</li>
                    <li style={{ color: 'red' }}>OFFERS</li>
                </ul>
            </div>

            <div className="carousel">
                <img src={lp1} alt="lp1" />
                <img src={lp2} alt="lp2" />
                <img src={lp3} alt="lp3" />
                <i class="fa-solid fa-circle"></i>
                <i class="fa-regular fa-circle"></i>
                <i class="fa-regular fa-circle"></i>
                <div className="landingText">
                    <header>
                        <img src={logo3} alt="logo3" />
                    </header>
                    <p>DO YOU SERACH FOR HIGH-QUALITY SCULPTING ACTIVEWEAR?</p>
                    <p>Discover the ultimate workout experience with JJ Activewear’s premium activewear collection. Our trendy and functional designs are made with high-quality materials to help you achive your fitness goals in style.</p>
                    <a href='#'>SHOP NOW</a>
                </div>
            </div>

            <div className="popularProducts">
                <div>
                    <img src={pop1} alt="pop1" />
                    <p>Popular</p>
                    <ul>
                        <li>XXS</li>
                        <li>XS</li>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                    </ul>
                    <div>
                        <header>Matching Set</header>
                        <p>Workout Premium Push-Up Set: Sculpting Leggings and High-Waistband for Tummy Control, Back Support, and Flattering Silhouette</p>
                        <p>$80</p>
                        <div>
                            <button>Add to cart</button>
                            <button>Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reviewsContainer">
                <header className="reviewsHeader">
                    <p>Ultimate Workout Experience</p>
                    <p>Reviews</p>
                    <p>Everything to love about JJ Activewear</p>
                </header>

                <div className="reviewCards">
                    <header>What are our customers saying?</header>

                    <div className="reviewCard">
                        <div>
                            <img src="" alt="client1" />
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>


                    </div>

                    <div className="reviewCard">
                        <div>
                            <img src="" alt="client1" />
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>


                    </div>

                    <div className="reviewCard">
                        <div>
                            <img src="" alt="client1" />
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>


                    </div>
                </div>
            </div>

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