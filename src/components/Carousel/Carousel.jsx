import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Carousel.module.css';
import { Link } from 'react-router-dom';

const MyCarousel = () => {
  const [index, setIndex] = useState(0);
  const images = ["/assets/lp1.jpg", "/assets/lp2.jpg", "/assets/lp3.jpg"];

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
        

        <div className={styles.textContainer}>

        <div>
          <img src={"/assets/logo1wh.png"} alt="logo3" width='100px' />
          <h1 className={styles.header}>ACTIVEWEAR</h1>
        </div>

          <div className={styles.carouselText}>
            <p>
              Discover the ultimate workout experience with JJ Activewear's premium activewear collection.
              Our trendy and functional designs are made with high-quality materials to help you achieve your fitness goals in style.
            </p>
          </div>
          
          <Link to="/products-list">
            <a href='#' className={styles.shopButton}>SHOP NOW</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;