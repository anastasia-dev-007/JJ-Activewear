import { useEffect, useState } from "react";
import { deleteOrder, fetchOrders } from "../../../orders.service";
import styles from '../AdminPanel/AdminPanel.module.css';
import Form from 'react-bootstrap/Form';//for Modal;



export default function Orders() {
    const [orders, setOrders] = useState([]);

    //useEffect scoate orders din baza de date
    useEffect(() => {
        const data = fetchOrders();
        setOrders(data);
    }, []);

    const handleSelectOrderStatus = (orderId, selectedStatus) => {
        const updatedOrders = orders.map((order) =>
            order.id === orderId ? { ...order, orderStatus: selectedStatus } : order
        );
        setOrders(updatedOrders);
    };

    const handleDeleteOrder = (orderId) => {
        deleteOrder(orderId);
        setOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
    };

    return (
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
                    <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                {orders
                    .filter(item => item.orderStatus !== 'Done')
                    .map(item => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.orderDate}</td>
                            <td>{item.name}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.email}</td>
                            <td>
                                {
                                    item.cartItems.map(item => (
                                        <div className={styles.itemCard}>
                                            <div>
                                                <h6>{item.quantity} x {item.title}</h6>
                                                <div>{item.category} | {item.subcategory}</div>
                                                <div>Item ID: {item.id}</div>
                                                <div>Size: {item.selectedSize}</div>
                                                <div>Color: {item.color}</div>
                                            </div>

                                            <div>{item.currency} {parseFloat(item.price).toFixed(2)}</div>
                                        </div>

                                    ))
                                }
                            </td>
                            <td>
                                {item.totalAmount ? `$ ${parseFloat(item.totalAmount).toFixed(2)}` : 'N/A'}
                            </td>
                            <td>
                                <Form.Select
                                    aria-label="Default select example"
                                    onChange={(e) => {
                                        handleSelectOrderStatus(item.id, e.target.value);
                                    }}
                                >
                                    <option value="New">New</option>
                                    <option value="In progress">In progress</option>
                                    <option value="Done">Done</option>
                                </Form.Select>
                            </td>
                            <td><button onClick={() => handleDeleteOrder(item.id)}>Delete</button></td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}