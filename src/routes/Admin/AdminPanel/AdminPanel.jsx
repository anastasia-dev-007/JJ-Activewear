import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from '../AdminPanel/AdminPanel.module.css'
import { getProducts } from '../../../products.service';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchOrders } from '../../../orders.service';
import { Link, Outlet } from 'react-router-dom';

function AdminPanel() {
    const [ordersLength, setOrdersLength] = useState(null);
    const [productsLength, setProductsLength] = useState(null);

    useEffect(() => {
        const orders = fetchOrders();
        const products = getProducts();

        setOrdersLength(orders.length);
        setProductsLength(products.length);
    }, []);

    return (
        <div className={styles.adminPanelContainer}>

            <nav>
                <ul>
                    <li><Link to="orders">Orders {ordersLength}</Link></li>
                    <li><Link to="products">Products {productsLength}</Link></li>
                    <li><Link to="clients">Clients</Link></li>
                </ul>
            </nav>

            <Outlet />

            {/* <Tabs
                defaultActiveKey="tabs"
                id="uncontrolled-tab-example"
                className="mb-3" >
                <Tab eventKey="orders" title={`Orders ${ordersLength}`}>
                    <Orders />
                </Tab>

                <Tab eventKey="products" title={`Products ${productsLength}`}>
                    <Products />
                </Tab>

                <Tab eventKey="addProducts" title="Add New Products">
                    <AddNewProduct />
                </Tab>

                <Tab eventKey="editProducts" title="Edit Products">
                    <EditProduct />
                </Tab>

                <Tab eventKey="clients" title="Clients">
                    <Clients />
                </Tab>
            </Tabs> */}
        </div>
    );
}

export default AdminPanel;