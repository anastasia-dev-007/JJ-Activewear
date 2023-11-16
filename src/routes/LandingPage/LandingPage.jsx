import React from 'react'
import styles from './LandingPage.module.css';
import Carousel from '../../components/Carousel/Carousel';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import Reviews from "../../components/Reviews/Reviews"
import NavBar from '../../components/NavBar/NavBar';
import Menu from '../../components/Menu/Menu';
import ChooseJJ from "../../components/WhyChooseJJ/WhyChooseJJ";
import Footer from '../../components/Footer/Footer';
import ClientsPhotos from '../../components/ClientsPhotos/ClientsPhotos';

const LandingPage = () => {
    return (
        <div className={styles.mainContainer}>
            <Menu />
            <Carousel />
            <PopularProducts />
            <Reviews />
            <ClientsPhotos/>
            <ChooseJJ/>
        </div>
    )
}


export default LandingPage;