import React from 'react'
import logo3 from "../../components/assets/logo3.png";
import styles from './LandingPage.module.css';
import Carousel from '../Carousel/Carousel';
import PopularProducts from '../PopularProducts/PopularProducts';
import Reviews from "../Reviews/Reviews"
import NavBar from '../NavBar/NavBar';
import Menu from '../Menu/Menu';
import ChooseJJ from "../WhyChooseJJ/WhyChooseJJ";

const LandingPage = () => {
    return (
        <div className={styles.mainContainer}>

            <NavBar />
            <Menu />
            <Carousel />
            <PopularProducts />
            <Reviews />

            <ChooseJJ/>

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