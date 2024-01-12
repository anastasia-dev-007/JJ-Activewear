import Form from 'react-bootstrap/Form';//for Modal
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useRef, useState } from 'react';
import { emptyProduct, saveProduct } from '../../products.service';

export default function AddNewProduct() {
       const [newProduct, setNewProduct] = useState(emptyProduct);

    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setNewProduct({ ...newProduct, imgs: files });
    };

    const handleAddNewProduct = () => {
        saveProduct(newProduct);//salvez in baza de date
        setNewProduct(emptyProduct); //resetez formularul
        //spoate de adaugat mesaj de succes sau eroare
    };

    return (
        <div>
            {/* <div>
                <span>Product ID</span>
                <input type="text" disabled value={products.length + 1} />
            </div> */}

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

            <div>
                <FloatingLabel controlId="floatingSizeS" label="SizeS">
                    <Form.Control type="text" placeholder="" value={newProduct.size.S}
                        onChange={(e) => setNewProduct({ ...newProduct, size: { ...newProduct.size, S: e.target.value } })} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingSizeM" label="SizeM">
                    <Form.Control type="text" placeholder="" value={newProduct.size.M}
                        onChange={(e) => setNewProduct({ ...newProduct, size: { ...newProduct.size, M: e.target.value } })}
                    />
                </FloatingLabel>
                <FloatingLabel controlId="floatingSizeL" label="SizeL">
                    <Form.Control type="text" placeholder="" value={newProduct.size.L}
                        onChange={(e) => setNewProduct({ ...newProduct, size: { ...newProduct.size, L: e.target.value } })}
                    />
                </FloatingLabel>
            </div>


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
        </div>
    );
};