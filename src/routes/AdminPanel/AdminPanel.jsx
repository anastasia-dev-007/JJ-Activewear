import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './AdminPanel.module.css'
import { products } from '../../products.service';
import Form from 'react-bootstrap/Form';//for Modal
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useRef, useState } from 'react';
import { saveProduct } from '../../products.service';

function AdminPanel() {
    const [newProduct, setNewProduct] = useState({
        id: '',
        imgs: [],
        title: '',
        titleCode: '',
        color: '',
        category: '',
        subcategory: '',
        subcategoryCode: '',
        size: '',
        quantity: '',
        bestSellerStatus: '',
        currency: '',
        price: '',
        promo: '',
        promoPrice: '',
        productDescription: '',
    });

    const fileInputRef = useRef(null);

const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setNewProduct({ ...newProduct, imgs: files });
};

    return (
        <div className={styles.adminPanelContainer}>
            <Tabs
                defaultActiveKey="products"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="products" title="View Products">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Product ID</th>
                                <th scope="col">Cover photo</th>
                                <th scope="col">Gallery</th>
                                <th scope="col">Title</th>
                                <th scope="col">Title Code</th>
                                <th scope="col">Color</th>
                                <th scope="col">Category</th>
                                <th scope="col">Subcategory</th>
                                <th scope="col">Subcategory Code</th>
                                <th scope="col">Size</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Best Seller</th>
                                <th scope="col">New</th>
                                <th scope="col">Currency</th>
                                <th scope="col">Price</th>
                                <th scope="col">Promo</th>
                                <th scope="col">Promo Price</th>
                                <th scope="col">Description</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(item => (
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.imgs[0]}</td>
                                        <td>{item.imgs}</td>
                                        <td>{item.title}</td>
                                        <td>{item.titleCode}</td>
                                        <td>{item.color}</td>
                                        <td>{item.category}</td>
                                        <td>{item.subcategory}</td>
                                        <td>{item.subcategoryCode}</td>
                                        <td>{item.size}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.bestSellerStatus}</td>
                                        <td>{item.newArrival}</td>
                                        <td>{item.currency}</td>
                                        <td>{item.price}</td>
                                        <td>{item.promo}</td>
                                        <td>{item.promoPrice}</td>
                                        <td>{item.productDescription}</td>
                                        <td>
                                            <button>Edit</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </Tab>
                <Tab eventKey="addProducts" title="Add New Products">
                    <div>
                        <span>Product ID</span>
                        <input type="text" disabled />
                    </div>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload your photos</Form.Label>
                        <Form.Control type="file" ref={fileInputRef} onChange={handleFileChange} multiple />
                        <Form.Control type="file" ref={fileInputRef} onChange={handleFileChange} multiple/>
                        <Form.Control type="file" ref={fileInputRef} onChange={handleFileChange} multiple/>
                        <Form.Control type="file" ref={fileInputRef} onChange={handleFileChange} multiple/>
                        <Form.Control type="file" ref={fileInputRef} onChange={handleFileChange} multiple/>
                    </Form.Group>

                    <FloatingLabel
                        controlId="floatingTitle"
                        label="Product Title"
                        className="mb-3">
                        <Form.Control type="text" placeholder="Enter product title..."
                            value={newProduct.title}
                            onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTitleCode" label="Title Code">
                        <Form.Control type="text" placeholder="Enter product title code..."
                            value={newProduct.titleCode}
                            onChange={(e) => setNewProduct({ ...newProduct, titleCode: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingColor" label="Color">
                        <Form.Control type="text" placeholder="Enter product color..."
                            value={newProduct.color}
                            onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })} />
                    </FloatingLabel>


                    <FloatingLabel controlId="floatingCategory" label="Category">
                        <Form.Control type="text" placeholder="" value={newProduct.category}
                            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
                    </FloatingLabel>


                    <FloatingLabel controlId="floatingSubcategory" label="Subcategory">
                        <Form.Control type="text" placeholder="" value={newProduct.subcategory}
                            onChange={(e) => setNewProduct({ ...newProduct, subcategory: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSubcategoryCode" label="Subcategory Code">
                        <Form.Control type="text" placeholder="" value={newProduct.subcategoryCode}
                            onChange={(e) => setNewProduct({ ...newProduct, subcategoryCode: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSize" label="Size">
                        <Form.Control type="text" placeholder="" value={newProduct.size}
                            onChange={(e) => setNewProduct({ ...newProduct, size: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingQuantity" label="Quantity">
                        <Form.Control type="text" placeholder="" value={newProduct.quantity}
                            onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingBestSellerStatus" label="Best Seller Status">
                        <Form.Control type="text" placeholder="" value={newProduct.bestSellerStatus}
                            onChange={(e) => setNewProduct({ ...newProduct, bestSellerStatus: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingCurrency" label="Currency">
                        <Form.Control type="text" placeholder="" value={newProduct.currency}
                            onChange={(e) => setNewProduct({ ...newProduct, currency: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPrice" label="Price">
                        <Form.Control type="number" placeholder="" value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPromo" label="Promo">
                        <Form.Control type="text" placeholder="" value={newProduct.promo}
                            onChange={(e) => setNewProduct({ ...newProduct, promo: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPromoPrice" label="Promo Price">
                        <Form.Control type="text" placeholder="" value={newProduct.promoPrice}
                            onChange={(e) => setNewProduct({ ...newProduct, promoPrice: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingDescription" label="Description">
                        <Form.Control type="textare" placeholder="" value={newProduct.productDescription}
                            onChange={(e) => setNewProduct({ ...newProduct, productDescription: e.target.value })} />
                    </FloatingLabel>

                    <button onClick={() => saveProduct(newProduct)}>SAVE PRODUCT</button>
                </Tab>
                <Tab eventKey="orders" title="Orders">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Order date</th>
                                <th scope="col">Client Name</th>
                                <th scope="col">Client Phone</th>
                                <th scope="col">Client email</th>
                                <th scope="col">Order - product id, quantity, price</th>
                                <th scope="col">Final price</th>
                                <th scope="col">Status - completed, in process, new</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>cell 1</td>
                                <td>cell 2</td>
                                <td>cell 3</td>
                                <td>cell 4</td>
                                <td>cell 5</td>
                                <td>cell 6</td>
                                <td>cell 6</td>
                            </tr>
                        </tbody>
                    </table>
                </Tab>
                <Tab eventKey="clients" title="Clients">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Client ID</th>
                                <th scope="col">Registration date</th>
                                <th scope="col">Name Surname</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Birthday</th>
                                <th scope="col">Orders history</th>
                                <th scope="col">Status - active, inactive</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>cell 1</td>
                                <td>cell 2</td>
                                <td>cell 3</td>
                                <td>cell 4</td>
                                <td>cell 5</td>
                                <td>cell 6</td>
                                <td>cell 6</td>
                                <td>cell 7</td>
                            </tr>
                        </tbody>
                    </table>
                </Tab>
            </Tabs>
        </div>
    );
}

export default AdminPanel;