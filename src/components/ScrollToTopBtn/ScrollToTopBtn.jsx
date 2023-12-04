import React from 'react'
import styles from './ScrollToTopBtn.module.css'
import { useNavigate } from 'react-router-dom'

const ScrollToTopBtn = () => {
    const navigate = useNavigate();

   const handleScrollTopBtnClick = () => {
        navigate('#');
        window.scrollTo(0,0);
    }

    return (
        <div className={styles.scrollToTopBtnContainer} onClick={handleScrollTopBtnClick}>
            <i className="fa-solid fa-chevron-up"></i>
        </div>
    )
}

export default ScrollToTopBtn;
