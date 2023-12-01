import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getProductById, products } from '../../products.service';
import styles from '../ProductDetails/ProductDetails.module.css';
import ReactImageMagnify from 'react-image-magnify';
import WhyChooseJJ from '../../components/WhyChooseJJ/WhyChooseJJ';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import MightLikeProducts from '../../components/MightLikeProducts/MightLikeProducts';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [openAccordions, setOpenAccordions] = useState([]); //openAccordions is an array that keeps track of the accordion items that are currently open.
  // const [selectedSize, setSelectedSize] = useState(null);
  // const [selectedColor, setSelectedColor] = useState(null);

  const [show, setShow] = useState(false); //for offCanvas
  const handleClose = () => setShow(false);//for offCanvas
  const handleShow = () => setShow(true);//for offCanvas


  useEffect(() => {
    setProduct(getProductById(+id)); //transmitem id in form numerica de asta punem "+"
  }, [id]);

  const cartContext = useContext(CartContext);// consumam contextul
  const subtotalPrice = cartContext.cartItems.reduce((total, item) => total + item.price, 0);//for offCanvas

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
  ]

  //toggleAccordion function is responsible for managing which accordions are open and which ones are closed.
  const toggleAccordion = (id) => {
    if (openAccordions.includes(id)) { //  // Check if the accordion with this id is already in the openAccordions array
      setOpenAccordions(openAccordions.filter(acc => acc !== id));  // If it is already open, close it by updating openAccordions to exclude the current id. If the accordion is already open ('includes' returns 'true'), it removes that id from the openAccordions array. It uses the 'filter' function to create a new array that includes all the items from openAccordions except the one with the id clicked on.
    } else {
      setOpenAccordions([...openAccordions, id]); //If the accordion is closed ('includes' returns 'false'), means it's opening. So, it sets the openAccordions array to a new array that contains all the existing items from openAccordions ([...openAccordions]) and adds the new id to it.
    }
  };

  const addToCart = (product) => {
    // if (!selectedSize) {
    //   alert('Please select a size before adding to the cart');
    //   return;
    // }

    if (cartContext && cartContext.addItem) {
      cartContext.addItem(product);
    }
  }

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
                <div className={styles.photo}><img src={Array.isArray(product.imgs) && product.imgs.length > 0 ? `/assets${product.imgs[1]}` : ''} alt="" /></div>
                <div className={styles.photo}><img src={Array.isArray(product.imgs) && product.imgs.length > 0 ? `/assets${product.imgs[2]}` : ''} alt="" /></div>
                <div className={styles.photo}><img src={Array.isArray(product.imgs) && product.imgs.length > 0 ? `/assets${product.imgs[3]}` : ''} alt="" /></div>
              </div>
              <div className={styles.mainPhoto}>
                {/* https://www.npmjs.com/package/react-image-magnify
                https://www.youtube.com/watch?app=desktop&v=onUH6Op5GKQ */}
                <ReactImageMagnify {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: Array.isArray(product.imgs) && product.imgs.length > 0 ? `/assets${product.imgs[0]}` : '',
                  },
                  largeImage: {
                    src: Array.isArray(product.imgs) && product.imgs.length > 0 ? `/assets${product.imgs[0]}` : '',
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

              <div className={styles.itemCode}>Item code: LF028</div>

              <h3 className={styles.price}>$ 50.00</h3>

              <div className={styles.sizes}>
                <header>Size</header>
                <div>
                  {/* <button onClick={() => setSelectedSize('S')} className={selectedSize === 'S' ? styles.selectedSize : ''}>S</button>
                  <button onClick={() => setSelectedSize('M')} className={selectedSize === 'M' ? styles.selectedSize : ''}>M</button>
                  <button onClick={() => setSelectedSize('L')} className={selectedSize === 'L' ? styles.selectedSize : ''}>L</button> */}
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                </div>
                <div>| Size Guide</div>
              </div>

              <div className={styles.colors}>
                <header>Color</header>
                <div className={styles.colorCircles}>
                  {
                    colors.map(
                      item => (
                        <button key={item.id} style={{ backgroundColor: item.title }}></button>
                      ))
                  }
                </div>
              </div>

              <div className={styles.quantity}>
                <header>Quantity</header>
                <div className={styles.quantityPanel}>
                  <button>-</button>
                  <input className={styles.quantityInput} type="number" placeholder='1' style={{ width: '40px', height: '28px', fontSize: '14px' }} />
                  <button>+</button>
                </div>
              </div>

              <div className={styles.addToCartBtnAndFavorites}>

                <Button variant="primary" onClick={handleShow}>
                  <button className={styles.addToCartBtn}
                    onClick={() => addToCart(product)}
                  >Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                </Button>


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
                              <img
                                src={Array.isArray(item.imgs) && item.imgs.length > 0 ? `/assets${item.imgs[0]}` : ''}
                                alt={`Product: ${item.title}`}
                              />
                            </div>
                          </div>
                          <div className={styles.infoPriceAndBtnContainer}>
                            <div className={styles.productInfoAndPrice}>
                              <div className={styles.productInfo}>
                                <div>{item.title}</div>
                                <div>{item.category} | {item.subcategory}</div>
                                <div>Quantity: {item.quantity}</div>
                                <div>Size: {item.size}</div>
                                <div>Color: {item.color}</div>
                              </div>

                              <div className={styles.price}> Price: {item.currency} {item.price.toFixed(2)}</div>
                            </div>

                            <div className={styles.quantity}>
                              <header>Quantity</header>
                              <div className={styles.quantityPanel}>
                                <button>-</button>
                                <input className={styles.quantityInput} type="number" placeholder='1' style={{ width: '40px', height: '28px', fontSize: '14px' }} />
                                <button>+</button>
                              </div>
                            </div>

                            <div className={styles.removeBtn}>
                              <button>Remove</button>
                            </div>
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
                  <button>
                    <i class="fa-regular fa-heart"></i>
                  </button>
                  <button style={{ display: 'none' }}>
                    <i class="fa-solid fa-heart"></i>
                  </button>

                </div>
              </div>

              <div className={styles.Accordions}>
                {AccordionsData.map(item => (
                  <div key={item.id} className={styles.accordionItem}>
                    <div className={styles.accordionHeader} onClick={() => toggleAccordion(item.id)}>
                      <div>{item.title}</div>
                      <div>{openAccordions.includes(item.id) ? (<i class="fa-solid fa-chevron-up"></i>) : (<i class="fa-solid fa-chevron-down"></i>)}</div> {/*displays +/-  based on whether the current accordion is open (i.e., its id is in the openAccordions array). */}
                    </div>
                    {openAccordions.includes(item.id) && ( //checks if the current accordion is open. If open, accordion content is rendered.
                      <div className={styles.accordionList}>
                        {item.content.map(listItem => (
                          <div key={listItem.id}>{listItem}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
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