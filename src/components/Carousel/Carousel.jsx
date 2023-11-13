import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import lp1 from "../../components/assets/lp1.jpg";
import lp2 from "../../components/assets/lp2.jpg";
import lp3 from "../../components/assets/lp3.jpg";
import logo1wh from "../../components/assets/logo1wh.png";
import styles from './Carousel.module.css';

const MyCarousel = () => {
  const images = [lp1, lp2, lp3];

  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
          <Carousel.Caption className={styles.onCarouselElements}>
            <img src={logo1wh} alt="logo3" width='100px' />
            <h1>ACTIVEWEAR</h1>
            <p className={styles.question}>DO YOU SEARCH FOR HIGH-QUALITY SCULPTING ACTIVEWEAR?</p>
            <p>
              Discover the ultimate workout experience with JJ Activewear's premium activewear collection.
              Our trendy and functional designs are made with high-quality materials to help you achieve your fitness goals in style.
            </p>
            <a href='#'>SHOP NOW</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
