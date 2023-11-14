import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import lp1 from "../../components/assets/lp1.jpg";
import lp2 from "../../components/assets/lp2.jpg";
import lp3 from "../../components/assets/lp3.jpg";
import logo1wh from "../../components/assets/logo1wh.png";
import styles from './Carousel.module.css';

const MyCarousel = () => {
  const [index, setIndex] = useState(0);
  const images = [lp1, lp2, lp3];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.carouselContainer}>
      <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carouselWindow}>
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img className={`${styles.carouselImage} d-block w-100`} src={image} alt={`Slide ${idx + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className={styles.onCarouselWindow}>
        <header>
        <img src={logo1wh} alt="logo3" width='100px' />
        <h1>ACTIVEWEAR</h1>
        </header>

        <div className={styles.textContainer}>
          <p className= {styles.question}>
            DO YOU SEARCH FOR HIGH-QUALITY SCULPTING ACTIVEWEAR?
          </p>

          <p className={styles.carouselText}>
            Discover the ultimate workout experience with JJ Activewear's premium activewear collection.
            Our trendy and functional designs are made with high-quality materials to help you achieve your fitness goals in style.
          </p>

          <a href='#'>SHOP NOW</a>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;