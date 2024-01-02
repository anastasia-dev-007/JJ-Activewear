import React from 'react'
import styles from './LandingPage.module.css';
import Carousel from '../../components/Carousel/Carousel';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import Reviews from "../../components/Reviews/Reviews"
import ChooseJJ from "../../components/WhyChooseJJ/WhyChooseJJ";
import ClientsPhotos from '../../components/ClientsPhotos/ClientsPhotos';

const LandingPage = () => {
    return (
        <div className={styles.mainContainer}>
            <Carousel />
            <PopularProducts />
            <Reviews />
            <ClientsPhotos/>
            <ChooseJJ/>
        </div>
    )
}


export default LandingPage;