import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.mainFooterContainer}>
                <div className={styles.footerColumn}>
                    <img width='100px' src="/assets/logo1wh.png" alt="logo3" />
                    <p>ACTIVEWEAR</p>
                </div>
                <div className={styles.footerColumn}>
                    <h4>Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Confidentiality</li>
                        <li>Return Policy</li>
                        <li>Delivery Terms</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h4>Products</h4>
                    <ul>
                        <li><a href="#">Catalogue</a></li>
                        <li><a href="#">Activewear</a></li>
                        <li><a href="#">Swimwear</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h4>Contacts</h4>
                    <ul>
                        <li>+373 79 888 888</li>
                        <li>jj-activewear@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className={styles.socialMedia}>
                <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-square-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
            </div>

            <div className={styles.pageBottom}>
                <p>© 2023 JJ Activewear Limited | Powered by Anastasia Tataru</p>
            </div>
        </footer>
    )
}

export default Footer;
