import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import styles from './Checkout.module.css'
import Form from 'react-bootstrap/Form';
import { saveOrder } from '../../orders.service';
import CheckoutModal from '../../components/CheckoutModal/CheckoutModal';

const Checkout = () => {
  const cartContext = useContext(CartContext); //consumam contextul
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const { cartItems } = useContext(CartContext);

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleCountryChange = (event) => setCountry(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);

  const handleOrderSave = () => {
    const totalAmount = cartContext.cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    const currentDate = new Date();
    const order = {
      id: Date.now(),
      name: name, //admin or user
      email: email,
      country: country,
      address: address,
      phoneNumber: phoneNumber,
      cartItems: cartItems, //am mai incercat cartItems: cartContext.items cu commented const {cartItems} de sus si cu [...cartItems] tot am incercat
      orderDate: currentDate.toISOString(),
      totalAmount: totalAmount,
    };

    const savedOrder = saveOrder(order);

    if (savedOrder) {
      console.log('Order saved:', order);
      setName('');
      setEmail('');
      setCountry('');
      setAddress('');
      setPhoneNumber('');
    }

    cartContext.setCartItems([]);
  };

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Buy
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.checkoutBody}>
            <div>
              <h3>Billing details</h3>
              <>
                <Form.Floating>
                  <Form.Control
                    id="floatingNameCustom"
                    type="text"
                    placeholder="Name Surname"
                    onChange={handleNameChange}
                  />
                  <label htmlFor="floatingNameCustom">Name Surname</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingEmailustom"
                    type="email"
                    placeholder="name@example.com"
                    onChange={handleEmailChange}
                  />
                  <label htmlFor="floatingEmailCustom">Email address</label>
                </Form.Floating>
                <Form.Select aria-label="Default select example"
                  onChange={handleCountryChange}
                >
                  <option>Select country</option>
                  <option value="1">Moldova</option>
                  <option value="2">Romania</option>
                  <option value="3">Germany</option>
                  <option value="4">France</option>
                </Form.Select>

                <Form.Floating>
                  <Form.Control
                    id="floatingAddressCustom"
                    type="text"
                    placeholder="Address"
                    onChange={handleAddressChange}
                  />
                  <label htmlFor="floatingAddressCustom">Address</label>
                </Form.Floating>

                <Form.Floating>
                  <Form.Control
                    id="floatingPhoneCustom"
                    type="text"
                    placeholder="+373 79 000 000"
                    onChange={handlePhoneNumberChange}
                  />
                  <label htmlFor="floatingPhoneCustom">Phone number</label>
                </Form.Floating>

              </>
              <p>By clicking the button you agree to the <u>Terms and Conditions</u></p>
              <CheckoutModal handleOrderSave={handleOrderSave} />
            </div>

            <div className={styles.cartSummaryContainer}>
              <h3>Cart summary</h3>
              {
                cartContext.cartItems.map(item => (
                  <div className={styles.itemCard}>
                    <div>
                      <h6>{item.quantity} x {item.title}</h6>
                      <div>{item.category} | {item.subcategory}</div>
                      <div>Item ID: {item.id}</div>
                      <div>Size: {item.selectedSize}</div>
                      <div>Color: {item.color}</div>
                    </div>

                    <div>{item.currency} {((item.quantity) * (item.price)).toFixed(2)}</div>
                  </div>

                ))
              }
            </div>
            <div>

            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>)
}

export default Checkout;
