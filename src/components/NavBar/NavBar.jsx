import React, { useContext, useState } from 'react'
import styles from "./NavBar.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import LoginAndRegistration from '../LoginAndRegistration/LoginAndRegistration';
import { FavoritesContext } from '../../contexts/favorites.context';
import { UserContext } from '../../contexts/user.context';
import { handleLoginButtonClick } from '../../users.service'

const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchResults, setSearchResults] = useState('');

    const navigate = useNavigate(); // used to go on click on search input tO PRODUCT LISTING page
    const cartContext = useContext(CartContext);
    const favoritesContext = useContext(FavoritesContext);
    const userContext = useContext(UserContext);

    const { user } = useContext(UserContext);

    //function to search products through NavBar input
    const handleSearchClick = () => {
        if (searchQuery) {
            navigate(`/products-list?search=${searchQuery}`);
        };
        setSearchQuery(''); // Reset the search query after onSearchQuery has processed the current value
    };

    const handleLinkClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <nav >
            <div className={styles.fullNavBarContainer}>
                <div className={styles.navBarContainer}>
                    <Link to="/" onClick={handleLinkClick} className={styles.navBarLogo}>
                        <div className={styles.navBarLogo}>
                            <img src="/assets/logo1.png" alt="logo1" />

                            <p>ACTIVEWEAR</p>
                        </div></Link>

                    <div className={styles.navBarLeft}>
                        <div className={styles.searchContainer}>
                            <input
                                className={styles.searchInput}
                                type="text"
                                value={searchQuery}
                                onChange={(event) => setSearchQuery(event.target.value)}
                                placeholder='Search' />
                            <div className={styles.searchIcon} >
                                <i className="fa-solid fa-magnifying-glass" onClick={handleSearchClick}></i>
                            </div>
                        </div>

                        <LoginAndRegistration />

                        <Link to='/favorites/' onClick={handleLinkClick}>
                            <button type="button" class="btn position-relative">
                                <i className="fa-regular fa-heart"></i>
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {favoritesContext.items.length >= 1 && favoritesContext.items.length}
                                </span>
                            </button>
                        </Link>

                        {/* {
                            userContext.user === null ? (
                                <i className="fa-regular fa-heart"></i>
                            ) : (
                                <Link to='/favorites/' onClick={handleLinkClick}>
                                    <button type="button" class="btn position-relative">
                                        <i className="fa-regular fa-heart"></i>
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {favoritesContext.items.length >= 1 && favoritesContext.items.length}
                                        </span>
                                    </button>
                                </Link>
                            )
                        } */}


                        <Link to='/shopping-cart/' onClick={handleLinkClick}>
                            <div className={styles.cartOnNav}>
                                <button type="button" class="btn position-relative">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    {cartContext.cartItems.length > 0 && (
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {cartContext.cartItems.length}
                                        </span>
                                    )}
                                </button>
                            </div>
                        </Link>

                        {/* {
                            userContext.user === null ? (
                                <i className="fa-solid fa-cart-shopping"></i>
                            ) : (
                                <Link to='/shopping-cart/' onClick={handleLinkClick}>
                                    <div className={styles.cartOnNav}>
                                        <button type="button" class="btn position-relative">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                            {cartContext.cartItems.length > 0 && (
                                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                    {cartContext.cartItems.length}
                                                </span>
                                            )}
                                        </button>
                                    </div>
                                </Link>
                            )
                        } */}

                        <select id="language">
                            <option value="EN">EN</option> {/**flag is not displayed((( */}
                            <option value="RO">RO</option>{/**flag is not displayed((( */}
                        </select>
                    </div>
                </div>

                <div className={styles.productList}>
                    <ul className={styles.productListItems}>
                        <li><Link to='/products-list' onClick={handleLinkClick}>CATALOGUE</Link></li>

                        <li>
                            <div className={styles.dropDownMenu}>
                                <span><Link to='/products-list?category=Activewear' onClick={handleLinkClick}>ACTIVEWEAR</Link></span>

                                <div className={styles.dropDownMenuList}>
                                    <div styles={styles.dropDownMenuContainer}>
                                        <ul>
                                            <li><Link to="/products-list?category=Activewear&subcategoryCode=tops_and_sport_bras" onClick={handleLinkClick}>Tops & Sport Bras</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategoryCode=T-shirts" onClick={handleLinkClick}>T-shirts</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategoryCode=long-sleeve_workout_tops" onClick={handleLinkClick}>Long-sleeve workout tops</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategoryCode=tennis_shorts" onClick={handleLinkClick}>Tennis Shorts</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategoryCode=leggings_and_yoga_pants" onClick={handleLinkClick}>Leggings & Yoga Pants</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategoryCode=matching_sets" onClick={handleLinkClick}>Matching Sets</Link></li>
                                            <li><Link to="/products-list?category=Activewear" onClick={handleLinkClick}>All Activewear <i className="fa-solid fa-arrow-right-long"></i></Link></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.dropDownMenu}>
                                <span><Link to='/products-list?category=Swimwear' onClick={handleLinkClick}>SWIMWEAR</Link></span>

                                <div className={styles.dropDownMenuList}>
                                    <div styles={styles.dropDownMenuContainer}>
                                        <ul>
                                            <li id='Swimwear'>
                                                <Link to="/products-list?category=Swimwear" onClick={handleLinkClick}>All Swimwear <i className="fa-solid fa-arrow-right-long"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.dropDownMenu}>
                                <span><Link to='/products-list?category=Accessories' onClick={handleLinkClick}>ACCESSORIES</Link></span>

                                <div className={styles.dropDownMenuList}>
                                    <div styles={styles.dropDownMenuContainer}>
                                        <ul>
                                            <li id='Sport Bags'><Link to="/products-list?category=Accessories&subcategoryCode=sport_bags" onClick={handleLinkClick}>Sport Bags</Link></li>
                                            <li id='Corsets'><Link to="/products-list?category=Accessories&subcategoryCode=corsets" onClick={handleLinkClick}>Corsets</Link></li>
                                            <li id='Resistance Bands'><Link to="/products-list?category=Accessories&subcategoryCode=resistance_bands" onClick={handleLinkClick}>Resistance Bands</Link></li>
                                            <li id='Accessories'>
                                                <Link to="/products-list?category=Accessories" onClick={handleLinkClick}>All Accessories <i className="fa-solid fa-arrow-right-long"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {userContext.user !== null && userContext.user.role === 'admin' && (
                            <li><Link to="/admin-panel" onClick={handleLinkClick}>ADMIN PANEL</Link></li>
                        )}

                    </ul>
                </div>
            </div>

            {/* Placeholder will ensure normal display of the following component to not be covered */}
            <div className={styles.placeholder}></div>
        </nav>
    )
}
export default NavBar;