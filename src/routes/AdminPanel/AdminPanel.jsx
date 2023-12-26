import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './AdminPanel.module.css'
import { deleteProduct, editProduct, getProductById, products } from '../../products.service';
import Form from 'react-bootstrap/Form';//for Modal
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useRef, useState } from 'react';
import { saveProduct } from '../../products.service';
import { users } from '../../users.service'
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { useEffect } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { orders } from '../../orders.service';
import { deleteOrder } from '../../orders.service';
import { useNavigate } from 'react-router-dom';

function AdminPanel() {
    const [productsData, setProductsData] = useState([...products]);
    const [searchQuery, setSearchQuery] = useState('');
    const [editedProduct, setEditedProduct] = useState({
        id: '',
        imgs: [],
        title: '',
        titleCode: '',
        color: '',
        category: '',
        subcategory: '',
        subcategoryCode: '',
        size: { S: '', M: '', L: '' },
        newArrival: '',
        bestSellerStatus: '',
        currency: '',
        price: '',
        promo: '',
        promoPrice: '',
        productDescription: '',
    });

    const [newProduct, setNewProduct] = useState({
        id: '',
        imgs: [],
        title: '',
        titleCode: '',
        color: '',
        category: '',
        subcategory: '',
        subcategoryCode: '',
        size: {},
        newArrival: '',
        bestSellerStatus: '',
        currency: '',
        price: '',
        promo: '',
        promoPrice: '',
        productDescription: '',
    });

    const [imgs, setImgs] = useState([]);
    const [title, setTitle] = useState('');
    const [titleCode, setTitleCode] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [subcategoryCode, setSubcategoryCode] = useState('');
    const [size, setSize] = useState('');
    const [newArrival, setNewArrival] = useState('');
    const [bestSellerStatus, setBestSellerStatus] = useState('');
    const [currency, setCurrency] = useState('');
    const [price, setPrice] = useState('');
    const [promo, setPromo] = useState('');
    const [promoPrice, setPromoPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [orderStatus, setOrderStatus] = useState('new');
    const [ordersInAdminPannel, setOrdersInAdminPannel] = useState([...orders]);

    const { user } = useContext(UserContext);
    const cartContext = useContext(CartContext); //consumam contextul

    // useEffect(() => {
    //     if (!user || !user.roles.includes('admin')) {
    //         // Redirect or show unauthorized message
    //     }
    // }, [user]);

    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setNewProduct({ ...newProduct, imgs: files });
    };

    const handleAddNewProduct = () => {
        const newProductData = {
            id: products.length + 1,
            imgs: newProduct.imgs || [],
            title: newProduct.title || '',
            titleCode: newProduct.titleCode || '',
            color: newProduct.color || '',
            category: newProduct.category || '',
            subcategory: newProduct.subcategory || '',
            subcategoryCode: newProduct.subcategoryCode || '',
            size: newProduct.size || '',
            newArrival: newProduct.newArrival || '',
            bestSellerStatus: newProduct.bestSellerStatus || '',
            currency: newProduct.currency || '',
            price: newProduct.price || '',
            promo: newProduct.promo || '',
            promoPrice: newProduct.promoPrice || '',
            productDescription: newProduct.productDescription || '',
        };

        setProductsData([...products, newProductData]);

        saveProduct(newProductData);

        setNewProduct({
            id: '',
            imgs: [],
            title: '',
            titleCode: '',
            color: '',
            category: '',
            subcategory: '',
            subcategoryCode: '',
            size: '',
            newArrival: '',
            bestSellerStatus: '',
            currency: '',
            price: '',
            promo: '',
            promoPrice: '',
            productDescription: '',
        });
    };

    // const handleSelectOrderStatus = (orderId, selectedStatus) => {
    //     const updatedOrders = ordersInAdminPannel.map((order) =>
    //         order.id === orderId ? { ...order, orderStatus: selectedStatus } : order
    //     );

    //     if (selectedStatus === 'Done') {
    //         const remainingOrders = updatedOrders.filter((order) => order.id !== orderId);
    //         setOrdersInAdminPannel(remainingOrders);
    //         deleteOrder(orderId);
    //     } 
    //     else {
    //         setOrdersInAdminPannel(updatedOrders);
    //     }
    // };

    const handleSelectOrderStatus = (orderId, selectedStatus) => {
        const updatedOrders = ordersInAdminPannel.map((order) =>
            order.id === orderId ? { ...order, orderStatus: selectedStatus } : order
        );
        setOrdersInAdminPannel(updatedOrders);
    };

    const handleDeleteOrder = (orderId) => {
        deleteOrder(orderId);
        setOrdersInAdminPannel((prevOrders) => prevOrders.filter(order => order.id !== orderId));
    };

    const handleDeleteProduct = (productId) => {
        deleteProduct(productId);
        setProductsData((prevProducts) => prevProducts.filter(product => product.id !== productId))
    };

    const handleSearchClick = (productId) => {
        const foundProduct = products.find(product => product.id == productId); // cu triple === nu mergea nu stiu din ce cauza

        if (foundProduct) {
            setEditedProduct({
                id: foundProduct.id,
                imgs: foundProduct.imgs || [],
                title: foundProduct.title,
                titleCode: foundProduct.titleCode,
                color: foundProduct.color,
                category: foundProduct.category,
                subcategory: foundProduct.subcategory,
                subcategoryCode: foundProduct.subcategoryCode,
                size: foundProduct.size || {},
                newArrival: foundProduct.newArrival,
                bestSellerStatus: foundProduct.bestSellerStatus,
                currency: foundProduct.currency,
                price: foundProduct.price,
                promo: foundProduct.promo,
                promoPrice: foundProduct.promoPrice,
                productDescription: foundProduct.productDescription,
            });
            console.log('Found Product:', foundProduct);
        } else {
            console.error('Product not found');
        }
    };

    const handleEditProductChange = (field, value) => {
        setEditedProduct(prevProduct => ({
            ...prevProduct,
            [field]: value,
        }));
    };

    const editProduct = (field, value) => {
        // Create a copy of the editedProduct state
        const updatedProduct = { ...editedProduct, [field]: value };
        
        // Update the editedProduct state
        setEditedProduct(updatedProduct);
    };
    
    const saveEditedProduct = () => {
        // Assuming products is a state variable containing the list of products
        const updatedProducts = products.map((product) =>
            product.id === editedProduct.id ? editedProduct : product
        );
    
        // Update the products state with the edited product
        setProductsData(updatedProducts);
    
        // Save the edited product data to your service
        saveProduct(editedProduct);
    
        // Reset the editedProduct state
        setEditedProduct({
            id: '',
            imgs: [],
            title: '',
            titleCode: '',
            color: '',
            category: '',
            subcategory: '',
            subcategoryCode: '',
            size: {},
            newArrival: '',
            bestSellerStatus: '',
            currency: '',
            price: '',
            promo: '',
            promoPrice: '',
            productDescription: '',
        });
    };

    return (
        <div className={styles.adminPanelContainer}>
            <Tabs
                defaultActiveKey="tabs"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="orders" title={`Orders ${orders.length}`}>
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
                                    <tr>
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

                                                        <div>{item.currency} {item.price.toFixed(2)}</div>
                                                    </div>

                                                ))
                                            }
                                        </td>
                                        <td>
                                            {item.totalAmount ? `$ ${item.totalAmount.toFixed(2)}` : 'N/A'}
                                        </td>
                                        <td>
                                            <Form.Select
                                                aria-label="Default select example"
                                                onChange={(e) => {
                                                    setOrderStatus(e.target.value);
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
                </Tab>

                <Tab eventKey="products" title={`Products ${products.length}`}>
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
                                <th scope="col">Size S, units</th>
                                <th scope="col">Size M, units</th>
                                <th scope="col">Size L, units</th>
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
                                        <td>{item.size.S}</td>
                                        <td>{item.size.M}</td>
                                        <td>{item.size.L}</td>
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
                                            <button onClick={() => handleDeleteProduct(item.id)}>Delete</button>
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
                        <input type="text" disabled value={products.length + 1} />
                    </div>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload your photos</Form.Label>
                        <Form.Control type="file" ref={fileInputRef} onChange={handleFileChange} multiple />
                        <Form.Control type="file" ref={fileInputRef} onChange={handleFileChange} multiple />
                        <Form.Control type="file" ref={fileInputRef} onChange={handleFileChange} multiple />
                        <Form.Control type="file" ref={fileInputRef} onChange={handleFileChange} multiple />
                        <Form.Control type="file" ref={fileInputRef} onChange={handleFileChange} multiple />
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

                    <FloatingLabel controlId="floatingNewArrival" label="New Arrival">
                        <Form.Control type="text" placeholder="" value={newProduct.newArrival}
                            onChange={(e) => setNewProduct({ ...newProduct, newArrival: e.target.value })} />
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

                    <button onClick={() => handleAddNewProduct()}>SAVE PRODUCT</button>
                </Tab>

                <Tab eventKey="editProducts" title="Edit Products">
                    <div>
                        <span>Product ID</span>
                        <input type="text" placeholder='Search product by ID...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button onClick={() => handleSearchClick(searchQuery)}>Search</button>
                    </div>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload your photos</Form.Label>
                        <Form.Control type="file" />
                        <Form.Control type="file" />
                        <Form.Control type="file" />
                        <Form.Control type="file" />
                        <Form.Control type="file" />
                    </Form.Group>

                    <FloatingLabel
                        controlId="floatingTitle"
                        label="Product Title"
                        className="mb-3">
                        <Form.Control type="text" placeholder="Enter product title..." 
                        value={editedProduct.title} 
                        onChange={(e) => handleEditProductChange('title', e.target.value)} //'title': The first argument is a string representing the field you want to update in your state. In this case, it's the 'title' field of the editedProduct state.
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTitleCode" label="Title Code">
                        <Form.Control type="text" placeholder="Enter product title code..." 
                        value={editedProduct.titleCode} 
                        onChange={(e) => handleEditProductChange('titleCode', e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingColor" label="Color">
                        <Form.Control type="text" placeholder="Enter product color..." 
                        value={editedProduct.color} 
                        onChange={(e) => handleEditProductChange('color', e.target.value)} />
                    </FloatingLabel>


                    <FloatingLabel controlId="floatingCategory" label="Category">
                        <Form.Control type="text" placeholder="" 
                        value={editedProduct.category} 
                        onChange={(e) => handleEditProductChange('category', e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSubcategory" label="Subcategory">
                        <Form.Control type="text" placeholder="" 
                        value={editedProduct.subcategory} 
                        onChange={(e) => handleEditProductChange('subcategory', e.target.value)} 
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSubcategoryCode" label="Subcategory Code">
                        <Form.Control type="text" placeholder="" 
                        value={editedProduct.subcategoryCode}
                        onChange={(e) => handleEditProductChange('subcategoryCode', e.target.value)}  />
                    </FloatingLabel>

                    <div>
                        <h3>Size</h3>
                        <FloatingLabel controlId="floatingSize" label="SizeS">
                            <Form.Control type="text" placeholder="" 
                            value={editedProduct.size.S} 
                            onChange={(e) => handleEditProductChange('size.S', e.target.value)} /> 
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingSize" label="SizeM">
                            <Form.Control type="text" placeholder="" 
                            value={editedProduct.size.M} 
                            onChange={(e) => handleEditProductChange('size.M', e.target.value)} /> 
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingSize" label="SizeL">
                            <Form.Control type="text" placeholder="" 
                            value={editedProduct.size.L} 
                            onChange={(e) => handleEditProductChange('size.L', e.target.value)} /> 

                        </FloatingLabel>
                    </div>

                    <FloatingLabel controlId="floatingNewArrival" label="New Arrival">
                        <Form.Control type="text" placeholder="" 
                        value={editedProduct.newArrival} 
                        onChange={(e) => handleEditProductChange('newArrival', e.target.value)} /> 
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingBestSellerStatus" label="Best Seller Status">
                        <Form.Control type="text" placeholder="" 
                        value={editedProduct.bestSellerStatus}
                        onChange={(e) => handleEditProductChange('bestSellerStatus', e.target.value)} /> 
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingCurrency" label="Currency">
                        <Form.Control type="text" placeholder="" 
                        value={editedProduct.currency}
                        onChange={(e) => handleEditProductChange('currency', e.target.value)} /> 
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPrice" label="Price">
                        <Form.Control type="number" placeholder="" 
                        value={editedProduct.price} 
                        onChange={(e) => handleEditProductChange('price', e.target.value)} /> 
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPromo" label="Promo">
                        <Form.Control type="text" placeholder="" 
                        value={editedProduct.promo}
                        onChange={(e) => handleEditProductChange('promo', e.target.value)} /> 
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPromoPrice" label="Promo Price">
                        <Form.Control type="text" placeholder="" 
                        value={editedProduct.promoPrice}
                        onChange={(e) => handleEditProductChange('promoPrice', e.target.value)} /> 
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingDescription" label="Description">
                        <Form.Control type="textare" placeholder="" 
                        value={editedProduct.productDescription} 
                        onChange={(e) => handleEditProductChange('productDescription', e.target.value)} /> 
                    </FloatingLabel>

                    <button onClick={saveEditedProduct}>SAVE</button>
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(item => (
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>cell 1</td>
                                        <td>{item.nameSurname}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.email}</td>
                                        <td>{item.birthday}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </Tab>
            </Tabs>
        </div>
    );
}

export default AdminPanel;