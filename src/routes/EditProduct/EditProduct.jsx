import Form from 'react-bootstrap/Form';//for Modal
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useEffect, useState } from 'react';
import { emptyProduct, getProductById, saveProduct } from '../../products.service';
import { useParams } from 'react-router-dom';

export default function EditProduct() {
    const [editedProduct, setEditedProduct] = useState(emptyProduct);
    const { id } = useParams();

    useEffect(() => {
        const foundProduct = getProductById(+id);

        if (foundProduct) {
            setEditedProduct(foundProduct);
            console.log('Found Product:', foundProduct);
        } else {
            console.error('Product not found');
        }
    }, [id])

    const handleEditProductChange = (field, value) => {
        //if it is price, it must be saved as number
        const parsedValue = field === 'price' ? parseFloat(value) : value;

        setEditedProduct(prevProduct => ({
            ...prevProduct,
            [field]: parsedValue,
        }));
    };

    const saveEditedProduct = () => {
        // Save the edited product data to your service
        saveProduct(editedProduct);

        // Reset the editedProduct state
        setEditedProduct(emptyProduct);

        //de adaugat mesaj de eraore sau succes
    };

    return (
        <div>


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
                    onChange={(e) => handleEditProductChange('subcategoryCode', e.target.value)} />
            </FloatingLabel>

            <div>
                <h3>Size</h3>
                <FloatingLabel controlId="floatingSize" label="SizeS">
                    <Form.Control type="text" placeholder=""
                        value={editedProduct.size.S}
                        onChange={(e) => handleEditProductChange('S', e.target.value)} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingSize" label="SizeM">
                    <Form.Control type="text" placeholder=""
                        value={editedProduct.size.M}
                        onChange={(e) => handleEditProductChange('M', e.target.value)} />
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
        </div>);
};