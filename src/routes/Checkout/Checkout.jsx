import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
  const cartContext = useContext(CartContext); //consumam contextul
  const subtotalPrice = cartContext.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        <button>Buy</button>
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
Checkout          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {
              cartContext.cartItems.length < 1 ? (
                <></>
              ) : (
                <div>Shopping Cart: {cartContext.cartItems.length}</div>)
            }

            {/**Info will be rendered from the constant of cart array */}
            {
              cartContext.cartItems.map(item => (
                <div key={item.id} >
                  <div>
                    <Link to={'/product-details/' + item.id}>
                      <div>
                        <img style={{ width: '50px' }}
                          src={Array.isArray(item.imgs) && item.imgs.length > 0 ? `/assets${item.imgs[0]}` : ''}
                          alt={`Product: ${item.title}`}
                        />
                      </div></Link>
                  </div>
                  <div >
                    <div >
                      <div >
                        <div>{item.title}</div>
                        <div>Item ID: {item.id}</div>
                        <div>{item.category} | {item.subcategory}</div>
                        <div>Quantity: {item.quantity}</div>
                        <div>Size: {item.selectedSize}</div>
                        <div>Color: {item.color}</div>

                      </div>

                      <div>{item.currency} {item.price.toFixed(2)}</div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div>Subtotal</div>
                      <div >$ {subtotalPrice.toFixed(2)}</div>
                    </div>
                    <div>
                      <div>Delivery</div>
                      <div>$ 10</div>
                    </div>
                  </div>
                </div>
              ))
            }


          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>)
}

export default Checkout;
