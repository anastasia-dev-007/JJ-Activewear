import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './AdminPanel.module.css'
import { products } from '../../products.service';
import Form from 'react-bootstrap/Form';//for Modal


function AdminPanel() {
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
                        <input type="text" disabled/>
                    </div>
                    
                    <Form.Group controlId="formFile" className="mb-3">
                                            <Form.Label>Upload your photos</Form.Label>
                                            <Form.Control type="file" />
                                            <Form.Control type="file" />
                                            <Form.Control type="file" />
                                            <Form.Control type="file" />
                                            <Form.Control type="file" />
                                        </Form.Group>
                                        <input type="text" name="" id="" />
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