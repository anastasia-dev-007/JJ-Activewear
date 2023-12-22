import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getProductById, products, updateProduct } from '../../products.service';
import styles from '../ProductDetails/ProductDetails.module.css';
import ReactImageMagnify from 'react-image-magnify';
import WhyChooseJJ from '../../components/WhyChooseJJ/WhyChooseJJ';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import MightLikeProducts from '../../components/Recommendations/Recommendations';
import { CartContext } from '../../contexts/cart.context';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FavoritesContext } from '../../contexts/favorites.context';
import { UserContext } from '../../contexts/user.context';
import Accordion from 'react-bootstrap/Accordion';


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedMainPhotoIndex, setSelectedMainPhotoIndex] = useState(0); //keep track of the index of the currently selected main photo.
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null); // Add selectedSize state
  const [sizeError, setSizeError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);

  const [openAccordions, setOpenAccordions] = useState([]); //openAccordions is an array that keeps track of the accordion items that are currently open.
  // const [selectedSize, setSelectedSize] = useState(null);
  // const [selectedColor, setSelectedColor] = useState(null);

  const [show, setShow] = useState(false); //for offCanvas
  const handleClose = () => setShow(false);//for offCanvas
  const handleShow = () => setShow(true);//for offCanvas

  const favoritesContext = useContext(FavoritesContext);
  const userContext = useContext(UserContext);

  const { user } = useContext(UserContext);
  const { addToCart } = useContext(CartContext);
  const { decrementCartItem } = useContext(CartContext);

  useEffect(() => {
    setProduct(getProductById(+id)); //transmitem id in form numerica de asta punem "+"
  }, [id]);

  //La prima randare setam valoare implicita prima marime din produs.De fiecare data cand product se modifica, daca el exista, setez o noua valoare in selectedSize, prima proprietate 
  useEffect(() => {
    if (product) {
      setSelectedSize(Object.keys(product.size)[0]);
    }
  }, [product]);

  const cartContext = useContext(CartContext);// consumam contextul
  const subtotalPrice = cartContext.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const colors = [
    { id: 1, title: '#ffffff' },
    { id: 2, title: '#dea18e' },
    { id: 3, title: '#e7d682' },
    { id: 4, title: '#aabbb1' },
    { id: 5, title: '#f34221' },
    { id: 6, title: '#0e0f13' },
    { id: 7, title: '#c8c6eb' },
    { id: 8, title: '#438ad0' },
    { id: 9, title: '#7d888a' },
    { id: 10, title: '#dc3e79' },
  ];

  const AccordionsData = [
    {
      id: 1,
      title: 'Product description',
      content: [
        "Get ready to flaunt your curves with our Premium Push-Up Set. Our push-up technology and sculpting leggings will give you a flattering silhouette that is perfect for any activity. Stay comfortable and confident during any activity with moisture-wicking fabric and a high-waistband that offers tummy control and additional support. Perfect gym clothes for women.Feel confident and supported with our high-waist leggings and push-up sports bra. Our tummy control and moisture-wicking fabric will keep you comfortable throughout your workout. Upgrade your workout gear with JJ Activewear Premium Set. Our breathable and sculpting leggings and push-up sports bra are available in a range of sizes and colors to choose from. Our sculpting leggings and push-up sports bra provide maximum support and enhance your curves, making it the perfect addition to your workout clothes collection"
      ],
    },
    {
      id: 2,
      title: 'Delivery Terms',
      content: [
        "Delivery is made within 24 hours."
      ],
    },
    {
      id: 3,
      title: 'Characteristics',
      content: [
        "The strategic design of our leggings and longsleeve provides a slimming and supportive fit, enhancing your natural curves and boosting your confidence."
      ],
    },
  ];

  const handleSizeButtonClick = (size) => {
    if (product.size[size] > 0) {
      setQuantity(1);
      setSelectedSize(size); // Update selected size
    } else {
      alert(`Size ${size} is not available.`);
    }
  };

  const handleAddToCart = (product, selectedSize, quantity) => {
    if (!selectedSize && product.category !== 'Accessories') {
      setSizeError(true);
      return;
    }

    if (product.size.hasOwnProperty("noSize")) {
      addToCart(product, 'noSize', quantity);
    } else {
      addToCart(product, selectedSize, quantity);
    }

    setQuantity(1);
    setSelectedSize(null); // Reset selected size after adding to the cart
    setSizeError(false);
  };


  const handleSmallPhotoClick = (index) => { //the index of the small photo clicked
    setSelectedMainPhotoIndex(index); //updates the selectedMainPhotoIndex state with the clicked index.
  };

  const toggleFavoriteItem = (product) => {
    favoritesContext.toggleFavoriteItem(product);
  };

  const handleQuantityDecrement = () => {
    if (!selectedSize && product.category !== 'Accessories') {
      setSizeError(true); // Set the size error to true
      setQuantityError(false); // Reset the quantity error
      return;
    }

    if (quantity <= 1) {
      setQuantityError(true); // Set the quantity error to true
      setSizeError(false); // Reset the size error
      return;
    }

    setQuantity((prev) => prev - 1);
    setSizeError(false); // Reset both errors
    setQuantityError(false);
  };

  const handleQuantityIncrement = () => {
    if (!selectedSize && product.category !== 'Accessories') {
      setSizeError(true); // Set the size error to true
      setQuantityError(false); // Reset the quantity error
      return;
    }

    if (quantity >= product.size[selectedSize]) {
      setQuantityError(true); // Set the quantity error to true
      setSizeError(false); // Reset the size error
      return;
    }

    setQuantity((prev) => prev + 1);
    setSizeError(false); // Reset both errors
    setQuantityError(false);
  };

  return (
    <div className={styles.productDetailsContainer}>
      <header className={styles.productDetailsHeader}>
        <Link to={"/"}>Home | Activewear | Leggings | Workout Premium Push-Up Set</Link>
      </header>

      { ////product && ( ) - insemnca ca noi afisam ceva doar daca produsul exista!
        product && (
          <div key={product.id} className={styles.productInfoContainer}>
            <div className={styles.productGallery}>
              <div className={styles.allPhotos}>
                {
                  product.imgs.map((img, index) => (
                    <div
                      key={index}
                      className={styles.photo}
                      onClick={() => handleSmallPhotoClick(index)}>
                      <img src={`/assets${img}`} alt="" />
                    </div>
                  ))
                }
              </div>
              <div className={styles.mainPhoto} style={{ zIndex: 10 }}>
                {/* https://www.npmjs.com/package/react-image-magnify
                https://www.youtube.com/watch?app=desktop&v=onUH6Op5GKQ */}
                <ReactImageMagnify {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: Array.isArray(product.imgs) && product.imgs.length > 0 ? `/assets${product.imgs[selectedMainPhotoIndex]}` : '',
                  },
                  largeImage: {
                    src: Array.isArray(product.imgs) && product.imgs.length > 0 ? `/assets${product.imgs[selectedMainPhotoIndex]}` : '',
                    width: 1400,
                    height: 1800
                  },
                  isHintEnabled: true,
                  enlargedImageContainerDimensions: {
                    width: '180%',
                    height: '100%'
                  },
                }} />
              </div>
            </div>

            <div className={styles.productDetails}>
              <div className={styles.productTitle}>{product.title}</div>

              <div className={styles.itemCode}>Item code: {product.id}</div>

              <h3 className={styles.price}>$ {product.price.toFixed(2)}</h3>

              {product.category === 'Accessories' ? (
                <></>
              ) : (
                <div className={styles.sizes}>
                  <header>Size</header>
                  <div>
                    {Object.entries(product.size).map(([sizeKey, sizeValue]) => (
                      <button
                        key={sizeKey}
                        disabled={sizeValue < 1}
                        onClick={() => handleSizeButtonClick(sizeKey)}
                        className={selectedSize === sizeKey ? styles.selectedSize : ''}
                      >
                        {sizeKey}
                      </button>
                    ))}
                  </div>
                  <div>| Size Guide</div>
                </div>
              )}

              {/* <div className={styles.colors}>
                <header>Color</header>
                <div className={styles.colorCircles}>
                  {
                    colors.map(
                      item => (
                        <button key={item.id} style={{ backgroundColor: item.title }}></button>
                      ))
                  }
                </div>
              </div> */}

              <div className={styles.quantity}>
                <header>Quantity</header>
                <div className={styles.quantityPanel}>
                  <button
                    disabled={product.size[selectedSize] === 0}
                    onClick={handleQuantityDecrement}
                  >
                    -
                  </button>
                  <button>{quantity}</button>
                  <button
                    disabled={quantity >= product.size[selectedSize]}
                    onClick={handleQuantityIncrement}
                  >
                    +
                  </button>
                </div>
              </div>

              {sizeError && (
                <p style={{ color: 'red', fontSize: '10px' }}>Please select a size before.</p>
              )}

              <div className={styles.addToCartBtnAndFavorites}>

                {/* <Button variant="primary" onClick={handleShow}>
                  <button className={styles.addToCartBtn}
                    onClick={() => addToCart(product)}
                  >Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                </Button> */}


                <div variant="primary" onClick={handleShow}>
                  <button disabled={quantity === 0 || !selectedSize} className={styles.addToCartBtn}
                    onClick={() => handleAddToCart(product, selectedSize, quantity)}
                  >Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                </div>


                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title> Shopping Cart</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {
                      cartContext.cartItems.map(item => (
                        <div key={item.id} className={styles.cartItem}>
                          <div className={styles.imageContainer}>
                            <div className={styles.image}>
                              <Link to={'/product-details/' + item.id}>
                                <img
                                  src={Array.isArray(item.imgs) && item.imgs.length > 0 ? `/assets${item.imgs[0]}` : ''}
                                  alt={`Product: ${item.title}`}
                                /></Link>
                            </div>
                          </div>
                          <div className={styles.infoPriceAndBtnContainer}>
                            <div className={styles.productInfoAndPrice}>
                              <div className={styles.productInfo}>
                                <div>{item.title}</div>
                                <div>{item.category} | {item.subcategory}</div>
                                <div>Quantity: {item.quantity}</div>
                                <div>Size: {item.selectedSize}</div>
                                <div>Color: {item.color}</div>
                              </div>

                              <div className={styles.price}> Price: {item.currency} {item.price.toFixed(2)}</div>
                            </div>

                            <div className={styles.quantity}>
                              <header>Quantity</header>
                              <div className={styles.quantityPanel}>
                                <button
                                  disabled={product[selectedSize] === 0} // Update here
                                  onClick={() => decrementCartItem(item, item.selectedSize, quantity)}
                                >
                                  -
                                </button>
                                <button>{item.quantity}</button>
                                <button
                                  disabled={quantity >= product[selectedSize]} // Update here
                                  onClick={() => addToCart(item, item.selectedSize, quantity)}
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            {/* <div className={styles.removeBtn}>
                              <button>Remove</button>
                            </div> */}
                          </div >
                        </div>
                      ))
                    }

                    <div className={styles.total}>
                      <div className={styles.subTotalLine}>
                        <div className={styles.subTotal}>Subtotal</div>
                        <div className={styles.subTotalPrice}>$ {subtotalPrice.toFixed(2)}</div>
                      </div>
                      <div className={styles.deliveryLine}>
                        <div className={styles.delivery}>Delivery</div>
                        <div className={styles.deliveryPrice}>$ 10</div>
                      </div>

                      <div className={styles.buyBtn}>
                        <Link to='/shopping-cart'>
                          <button>
                            <span>Go to cart</span>
                            <i className="fa-solid fa-cart-shopping"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>

                <div className={styles.favoritesBtn}>
                  <button onClick={() => toggleFavoriteItem(product)}>
                    {favoritesContext.items.some(favorite => favorite.id === product.id) ? (
                      <i className="fa-solid fa-heart"></i>
                    ) : (
                      <i className="fa-regular fa-heart"></i>
                    )}
                  </button>
                </div>
              </div>


              {AccordionsData.map((item) => (
                <Accordion key={item.id} defaultActiveKey={item.id}>
                  <Accordion.Item eventKey={item.id} className={styles.accordionItem}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                      {item.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))}


            </div>
          </div>
        )
      }

      <div className='similarProducts'>
        <h3>You might also like</h3>
        <PopularProducts />
      </div>

      <MightLikeProducts />

      <WhyChooseJJ />
    </div>
  )
}

export default ProductDetails;