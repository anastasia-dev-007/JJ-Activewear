import React from 'react';
import styles from "./Menu.module.css";
import lp1 from "../../assets/lp1.jpg";

const Menu = () => {
  return (
    <div className={styles.productList}>
      <ul className={styles.productListItems}>
        <li>NEW ARRIVALS</li>

        <li className={styles.activewearList}>
          <div className={styles.dropDownMenu}>
            <span>ACTIVEWEAR</span>
            <div className={styles.dropDownMenuList}>
              <ul>
                <li>Tops & Sport Bras</li>
                <li>T-shirts</li>
                <li>Long-sleeve workout tops</li>
                <li>Tennis Shorts</li>
                <li>Leggings & Yoga Pants</li>
                <li>Matching Sets</li>
              </ul>

              <img width='100px' src={lp1} alt="" />
            </div>
          </div>
        </li>
        <li>SWIMWEAR</li>
        <li>ACCESSORIES</li>
        <li style={{ color: 'red' }}>OFFERS</li>
      </ul>
    </div>
  );
}

export default Menu;
