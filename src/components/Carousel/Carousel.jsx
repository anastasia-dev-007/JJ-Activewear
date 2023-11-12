import React from 'react';
import lp1 from "../LandingPage/assets/lp2.jpg";
import lp2 from "../LandingPage/assets/lp1.jpg";
import lp3 from "../LandingPage/assets/lp3.jpg";
import logo3 from "../LandingPage/assets/logo3.png";
import styles from './Carousel.module.css'

const Carousel = () => {
  const images = [
    {
      id: 1,
      img: lp1,
    },
    {
      id: 2,
      img: lp2,
    },
    {
      id: 3,
      img: lp3,
    },
  ];

  return (
    <div>
      <div className={styles.carouselContainer}>

        <div className={styles.carouselWindow}>
          {images.map((image, index) => (
            <img key={index} src={image.img} alt='' />
          ))}
        </div>

        <div className="onCarouselWindow">
          <div className="carouselArrows">
            <i class="fa-solid fa-chevron-left"></i>
            <i class="fa-solid fa-chevron-right"></i>
          </div>

          <div className="carouselBullets">
            <i class="fa-solid fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
          </div>
        </div>

        <div className="landingText">
          <header>
            <img src={logo3} alt="logo3" />
          </header>
          <p>DO YOU SERACH FOR HIGH-QUALITY SCULPTING ACTIVEWEAR?</p>
          <p>Discover the ultimate workout experience with JJ Activewear premium activewear collection. Our trendy and functional designs are made with high-quality materials to help you achive your fitness goals in style.</p>
          <a href='#'>SHOP NOW</a>
        </div>
      </div>

    </div>
  );
};

export default Carousel;
