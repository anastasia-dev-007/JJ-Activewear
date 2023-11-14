import React from 'react'
import logo3 from "../../components/assets/logo3.png";
import styles from './LandingPage.module.css';
import Carousel from '../Carousel/Carousel';
import PopularProducts from '../PopularProducts/PopularProducts';
import Reviews from "../Reviews/Reviews"
import NavBar from '../NavBar/NavBar';
import Menu from '../Menu/Menu';
import ChooseJJ from "../WhyChooseJJ/WhyChooseJJ";
import Footer from '../Footer/Footer';

const LandingPage = () => {
    return (
        <div className={styles.mainContainer}>

            <NavBar />
            <Menu />
            {/* <Carousel /> */}
            <PopularProducts />
            <Reviews />
            <ChooseJJ/>
            <Footer/>
        </div>
    )
}


export default LandingPage;