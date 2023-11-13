import React from 'react'
import styles from "./Menu.module.css"

const Menu = () => {
  return (
    <div className={styles.productList}>
    <ul style={{ listStyle: 'none' }}>
        <li>NEW ARRIVALS</li>
        <li>ACTIVEWEAR</li>
        <li>SWIMWEAR</li>
        <li>ACCESSORIES</li>
        <li style={{ color: 'red' }}>OFFERS</li>
    </ul>
</div>
  )
}

export default Menu;
