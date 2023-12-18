import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import styles from './Checkout.module.css'
import Form from 'react-bootstrap/Form';


const Checkout = () => {
  const cartContext = useContext(CartContext); //consumam contextul
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

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
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="Name Surname"
                  />
                  <label htmlFor="floatingPasswordCustom">Name Surname</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputCustom">Email address</label>
                </Form.Floating>
                <Form.Select aria-label="Default select example">
                  <option>Select country</option>
                  <option value="1">Moldova</option>
                  <option value="2">Romania</option>
                  <option value="3">Germany</option>
                  <option value="3">France</option>
                </Form.Select>

                <Form.Floating>
                  <Form.Control
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="Address"
                  />
                  <label htmlFor="floatingPasswordCustom">Address</label>
                </Form.Floating>

                <Form.Floating>
                  <Form.Control
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="+373 79 000 000"
                  />
                  <label htmlFor="floatingPasswordCustom">Phone number</label>
                </Form.Floating>
                
              </>
              <p>By clicking the button you agree to the <u>Terms and Conditions</u></p>
              <button>Place Order</button>

            </div>
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

              <div>{item.currency} {item.price.toFixed(2)}</div>
            </div>
            
            ))
           }
            <div>

            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>)
}

export default Checkout;
