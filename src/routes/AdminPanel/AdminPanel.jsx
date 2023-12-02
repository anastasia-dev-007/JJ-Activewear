import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './AdminPanel.module.css'
import { products } from '../../products.service';

function AdminPanel() {
    return (
        <div className={styles.adminPanelContainer}>
            <Tabs
                defaultActiveKey="products"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="products" title="Products">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
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
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </Tab>
                <Tab eventKey="orders" title="Orders">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="clients" title="Clients">
                    Tab content for Contact
                </Tab>
            </Tabs>
        </div>
    );
}

export default AdminPanel;