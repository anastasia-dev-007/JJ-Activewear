import React, { useState, useEffect } from 'react'
import { getProducts } from '../../products.service';
import styles from "../ProductListing/ProductListing.module.css"
import { Link, useParams } from 'react-router-dom';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const { category, subcategory } = useParams();
  const [openAccordions, setOpenAccordions] = useState([]); //openAccordions is an array that keeps track of the accordion items that are currently open.

  useEffect(() => {
    // Used the `getProducts` function to fetch products data and update the state.
    const data = getProducts();
    const filteredProducts = data.filter(product => product.category === category && product.subcategory === subcategory);

    setProducts(filteredProducts);
  }, [category, subcategory]);

  const AccordionsData = [
    {
      id: 1,
      title: 'Activewear',
      list: [
        { id: 1, title: 'Tops & Sport Bars' },
        { id: 2, title: 'T-shirts' },
        { id: 3, title: 'Long-sleeve workout tops' },
        { id: 4, title: 'Tennis Shorts' },
        { id: 5, title: 'Leggings & Yoga Pants' },
        { id: 6, title: 'Matching Sets' }]
    },
    {
      id: 2,
      title: 'Accessories',
      list: [
        { id: 1, title: 'Sport Bags' },
        { id: 2, title: 'Corsets' },
        { id: 3, title: 'Resistance Bands' }
      ]
    },
    {
      id: 3,
      title: 'Swimwear',
      list: [{ id: 1, title: 'Swimwear' },]
    },
    {
      id: 4,
      title: 'Size',
      list: [
        { id: 1, title: 'S' },
        { id: 2, title: 'M' },
        { id: 3, title: 'L' },
      ]
    },
    {
      id: 5,
      title: 'Availability',
      list: [
        { id: 1, title: 'Available' },
        { id: 2, title: 'Out of stock' },
      ]
    },
    {
      id: 6,
      title: 'Colors',
      list: [
        { id: 1, title: '#ffffff' },
        { id: 2, title: '#dea18e' },
        { id: 3, title: '#e7d682' },
        { id: 4, title: '#aabbb1' },
        { id: 5, title: '#f34221' },
        { id: 6, title: '#0e0f13' },
        { id: 7, title: '#c8c6eb' },
        { id: 8, title: '#438ad0' },
        { id: 9, title: '#7d888a' },
        { id: 10, title: '#dc3e79' },
      ],
    },
    {
      id: 7,
      title: 'Price',
      list: [
        { id: 1, title: '#ffffff' },
        { id: 2, title: '#dea18e' },
      ]
    }
  ];

  //toggleAccordion function is responsible for managing which accordions are open and which ones are closed.
  const toggleAccordion = (id) => {
    if (openAccordions.includes(id)) { //  // Check if the accordion with this id is already in the openAccordions array
      setOpenAccordions(openAccordions.filter(acc => acc !== id));  // If it is already open, close it by updating openAccordions to exclude the current id. If the accordion is already open ('includes' returns 'true'), it removes that id from the openAccordions array. It uses the 'filter' function to create a new array that includes all the items from openAccordions except the one with the id clicked on.
    } else {
      setOpenAccordions([...openAccordions, id]); //If the accordion is closed ('includes' returns 'false'), means it's opening. So, it sets the openAccordions array to a new array that contains all the existing items from openAccordions ([...openAccordions]) and adds the new id to it.
    }
  };

  return (
    <div className={styles.productListingContainer}>
      <header>
        <div className='path'>
          <p>Home | Page with title of category selected by user</p>
        </div>

        <div className='title'>
          <h2>Title of category selected by user</h2>
        </div>
      </header>

      <div className={styles.sortByPrice}>
        <label for="sortByPrice">Sort by price: </label>
        <select id="sortByPrice" name="sortByPrice">
          <option value="blank"></option>
          <option value="Ascending order">Ascending order</option>
          <option value="Descending order">Descending order</option>
        </select>
      </div>

      <div className={styles.filterAndCardsContainer}>
        <div className={styles.filterContainer}>
          <div className={styles.Accordions}>
            {AccordionsData.map(item => (
              <div key={item.id} className={styles.accordionItem}>
                <div className={styles.accordionHeader} onClick={() => toggleAccordion(item.id)}>
                  <div>{item.title}</div>
                  <div>{openAccordions.includes(item.id) ? (<i class="fa-solid fa-chevron-up"></i>) : (<i class="fa-solid fa-chevron-down"></i>)}</div> {/*displays +/-  based on whether the current accordion is open (i.e., its id is in the openAccordions array). */}
                </div>
                {openAccordions.includes(item.id) && ( //checks if the current accordion is open. If open, accordion content is rendered.
                  <div className={styles.accordionList}>
                    {item.list.map(listItem => (
                      <div key={listItem.id}>{listItem.title}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* <div className='priceFilter'>
          </div> */}
        </div>

        <div className={styles.ProductCardsContainer}>
          {
            products.map(item => (
              //Link-ul lucreaza in felul urmator:
              //Daca ai slash in fata, la <Link to= - el face redirect pe pagina aia
              // Daca nu ai slash in fata, el adauga acel link la linkul existent
              ////In exemplul cu students lucra din motiv ca:
              //Noi ne aflam pe pagina /
              // De pe acea pagina noi am facut redirect pe edit. Practic el la / a adaugat edit si intr-un final a fost /edit
              // Daca ne aflam pe alta pagina, de ex. details, si am fi utilizat doar edit era sa fie details/edit
              <div key={item.id} className={styles.productCard}>
                <Link to={'/product-details/' + item.id}>
                  <img src={item.img} alt="" />
                </Link>

                <div className={styles.label}>{item.status}</div>

                <div className={styles.favorites}>
                  <div>
                    <i class="fa-regular fa-heart"></i>
                  </div>

                  <div>
                    <i style={{ display: 'none' }} class="fa-solid fa-heart"></i>
                  </div>
                </div>

                <Link to={'/product-details/' + item.id} style={{ fontWeight: '600px' }}>{item.title}</Link>
                <div style={{ fontSize: '12px', marginBottom: '5px' }}>{item.category} | {item.subcategory}</div>
                <div style={{ fontSize: '14px', marginBottom: '5px' }}>{item.currency} {item.price}</div>

                <div className={styles.addToCartAndFavorites}>
                  <button className={styles.addToCartBtn}>Add to cart <i class="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <button className={styles.BtnMore}>More</button>

      <div className='recentlyViewed'>
        <h3>Recently Viewed Products</h3>
        <div className='fiveCards'></div>
      </div>
    </div>
  )
}

export default ProductListing;