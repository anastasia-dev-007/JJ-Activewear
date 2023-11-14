import React from 'react'
import logo1wh from "../../assets/logo1wh.png";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
                <div className={styles.mainFooterContainer}>
                    <div className={styles.footerColumn1}>
                        <img width='100px' src={logo1wh} alt="logo3" />
                        <p>ACTIVEWEAR</p>
                    </div>
                    <div className={styles.column1}>
                        <h4>Company</h4>
                        <ul>
                            <li>About us</li>
                            <li>Confidentiality</li>
                            <li>Return Policy</li>
                            <li>Delivery Conditions</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn2}>
                        <h4>Products</h4>
                        <ul>
                            <li><a href="#">Furniture</a></li>
                            <li><a href="#">Decoration</a></li>
                            <li><a href="#">Storage</a></li>
                            <li><a href="#">Baby and child</a></li>
                            <li><a href="#">Connected home</a></li>
                        </ul>
                    </div>

                    <div footerColumn3>
                        <h4>Contacts</h4>
                        <ul>
                            <li>+373 79 888 888</li>
                            <li>jj-activewear@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.socialMedia}>
                    <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-square-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                </div>

                <div className={styles.pageBottom}>
                    <p>© 2023 Tataru Anastasia</p>
                </div>
            </footer>
  )
}

export default Footer;
