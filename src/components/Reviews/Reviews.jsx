import React from 'react'
import styles from "../Reviews/Reviews.module.css"


const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      img: "/assets/pop1.jpg",
      reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      img: "/assets/pop1.jpg",
      reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 3,
      img: "/assets/pop1.jpg",
      reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  return (
    <div className={styles.reviewsContainer}>
      <header className={styles.reviewsHeader}>
        <p style={{ letterSpacing: '5px' }}>Ultimate Workout Experience</p>
        <p style={{ fontSize: '54px', letterSpacing: '10px' }}> Reviews</p>
        <p style={{ fontSize: '10px', letterSpacing: '2px' }}>Everything to love about JJ Activewear</p>
      </header>

      <p className={styles.header}>What are our customers saying?</p>
      <hr />

      <div className={styles.reviewCards}>
        {/* <div className={styles.arrows}> <i class="fa-solid fa-chevron-left" ></i></div> */}

        {reviewsData.map(item => (
          <div key={item.id} className={styles.reviewCard}>
            <div>
              <header className={styles.headerReviewCard}>
                <img src={item.img} alt="" />
                <div>
                  <div className={styles.name}>Alisa Anderson</div>
                  <div className={styles.stars}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </header>

              <p>{item.reviewText}</p>
            </div>
          </div>
        ))}

        {/* <div className={styles.arrows}> <i class="fa-solid fa-chevron-right" ></i></div> */}
      </div>

      <button className={styles.leaveReviewButton}>Leave a Review</button>
    </div>
  )
}
export default Reviews;
