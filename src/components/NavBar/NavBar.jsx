import React, { useContext, useState } from 'react'
import styles from "./NavBar.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../../products.service';
import { CartContext } from '../../contexts/cart.context';
import Button from 'react-bootstrap/Button';//for Modal
import Form from 'react-bootstrap/Form';//for Modal
import Modal from 'react-bootstrap/Modal';//for Modal
import Dropdown from 'react-bootstrap/Dropdown';//for DropDown on login
import DropdownButton from 'react-bootstrap/DropdownButton';//for DropDown on login

const NavBar = ({ onSearchQuery }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchResults, setSearchResults] = useState('');
    const [activeModal, setActiveModal] = useState(null);
    const navigate = useNavigate(); // used to go on click on search input tO PRODUCT LISTING page
    const cartContext = useContext(CartContext);

    //function to search products through NavBar input
    const handleSearchClick = () => {
        if (searchQuery) {
            const result = products.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.subcategoryCode.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(result);
            setSearchResults(result);

            navigate(`/products-list?search=${searchQuery}`);
        };
        onSearchQuery(searchQuery); // Ensure onSearchQuery receives the updated searchQuery

        setSearchQuery(''); // Reset the search query after onSearchQuery has processed the current value
    };

    const [show, setShow] = useState(false); //for Modal

    const handleClose = () => {
        setShow(false)
        setActiveModal(null);
    };//for Modal
    const handleShow = () => setShow(true);//for Modal
    const handleModalButtonClick = (modalId) => {//for Modal
        setActiveModal(modalId);
    };

    return (
        <nav >
            <div className={styles.fullNavBarContainer}>
                <div className={styles.navBarContainer}>
                    <Link to="/" className={styles.navBarLogo}>
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

                        <DropdownButton id="dropdown-basic-button" className={styles.loginDropDownBtn} title={<i className="fa-regular fa-user"></i>}>
                            <Button variant="primary" onClick={() => handleModalButtonClick('login')}>
                                <Dropdown.Item href="#/action-1">Log in</Dropdown.Item>
                            </Button>

                            <Button variant="primary" onClick={() => handleModalButtonClick('createAccount')}>
                                <Dropdown.Item href="#/action-2">Create account</Dropdown.Item>
                            </Button>
                        </DropdownButton>

                        {/* Modal for Login */}
                        <Modal show={activeModal === 'login'} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Please log in to your account</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            // placeholder="name@example.com"
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            autoFocus
                                        />
                                    </Form.Group>
                                    
                                        <p><Link>Forgot your password?</Link></p>
                                        <p onClick={() => handleModalButtonClick('createAccount')}><Link>Create account</Link></p>
                                    
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Log in
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        {/* Modal for create account */}
                        <Modal show={activeModal === 'createAccount'} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Create your account</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name Surname</Form.Label>
                                        <Form.Control
                                            type="text"
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            // placeholder="name@example.com"
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>New password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Confirm password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            autoFocus
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Upload your photo</Form.Label>
                                        <div className="m-3">
                                            <label className="mx-3">Choose file: </label>
                                            <input className="d-none" type="file" />
                                            <button className="btn btn-outline-primary">Upload</button>
                                        </div>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Log in
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <button type="button" class="btn position-relative">
                            <i className="fa-regular fa-heart"></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                99+
                            </span>
                        </button>


                        <Link to='/shopping-cart/'>
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
                        <select id="language">
                            <option value="EN">EN</option> {/**flag is not displayed((( */}
                            <option value="RO">RO</option>{/**flag is not displayed((( */}
                        </select>
                    </div>
                </div>

                <div className={styles.productList}>
                    <ul className={styles.productListItems}>
                        <li><Link to="/products-list?newArrival=Y">NEW ARRIVALS</Link></li>

                        <li><Link to='/products-list'>CATALOGUE</Link></li>

                        <li>
                            <div className={styles.dropDownMenu}>
                                <span><Link to='/products-list?category=Activewear'>ACTIVEWEAR</Link></span>

                                <div className={styles.dropDownMenuList}>
                                    <div styles={styles.dropDownMenuContainer}>
                                        <ul>
                                            <li><Link to="/products-list?category=Activewear&subcategoryCode=tops_and_sport_bras">Tops & Sport Bras</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategoryCode=T-shirts">T-shirts</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategoryCode=long-sleeve_workout_tops">Long-sleeve workout tops</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategoryCode=tennis_shorts">Tennis Shorts</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategoryCode=leggings_and_yoga_pants">Leggings & Yoga Pants</Link></li>
                                            <li><Link to="/products-list?category=Activewear&subcategoryCode=matching_sets">Matching Sets</Link></li>
                                            <li><Link to="/products-list?category=Activewear">All Activewear <i className="fa-solid fa-arrow-right-long"></i></Link></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.dropDownMenu}>
                                <span><Link to='/products-list?category=Swimwear'>SWIMWEAR</Link></span>

                                <div className={styles.dropDownMenuList}>
                                    <div styles={styles.dropDownMenuContainer}>
                                        <ul>
                                            <li id='Swimwear'>
                                                <Link to="/products-list?category=Swimwear">All Swimwear <i className="fa-solid fa-arrow-right-long"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.dropDownMenu}>
                                <span><Link to='/products-list?category=Accessories'>ACCESSORIES</Link></span>

                                <div className={styles.dropDownMenuList}>
                                    <div styles={styles.dropDownMenuContainer}>
                                        <ul>
                                            <li id='Sport Bags'><Link to="/products-list?category=Accessories&subcategoryCode=sport_bags">Sport Bags</Link></li>
                                            <li id='Corsets'><Link to="/products-list?category=Accessories&subcategoryCode=corsets">Corsets</Link></li>
                                            <li id='Resistance Bands'><Link to="/products-list?category=Accessories&subcategoryCode=resistance_bands">Resistance Bands</Link></li>
                                            <li id='Accessories'>
                                                <Link to="/products-list?category=Accessories">All Accessories <i className="fa-solid fa-arrow-right-long"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{ color: 'red' }}><Link to="/products-list?promo=Y">OFFERS</Link></li>
                    </ul>
                </div>
            </div>

            {/* Placeholder will ensure normal display of the following component to not be covered */}
            <div className={styles.placeholder}></div>
        </nav>
    )
}
export default NavBar;