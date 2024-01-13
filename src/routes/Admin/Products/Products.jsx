import { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../../../products.service";
import { Link } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);

    //din baza de date noi luam obligatoriu in urmatorul mod:
    useEffect(() => {
        const data = getProducts(); //tinem valorile din baza de date
        setProducts(data); //actualizam datele care vin din ace service
    }, []);

    const handleDeleteProduct = (productId) => {
        deleteProduct(productId);
        setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId))
    };

    return (
      <div>
<button><Link to="/admin-panel/addProducts">Add new item</Link></button>

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
                {products.map(item => (
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
                            <button><Link to={"/admin-panel/editProducts/" + item.id}>Edit</Link></button>
                            <button onClick={() => handleDeleteProduct(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
      </div>
    );
}