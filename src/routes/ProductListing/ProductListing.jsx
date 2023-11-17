import React, { useState, useEffect } from 'react'
import { getProducts } from '../../products.service';
import styles from "../ProductListing/ProductListing.module.css"

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [openAccordions, setOpenAccordions] = useState([]); //openAccordions is an array that keeps track of the accordion items that are currently open.

  useEffect(() => {
    // Used the `getProducts` function to fetch products data and update the state.
    const data = getProducts();

    setProducts(data);
  }, []);

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

      <div className='sortByPrice'></div>

      <div className={styles.filterAndCardsContainer}>
        {/* to copy style from Aimo */}
        <div className={styles.filterContainer}>
          <div className={styles.Accordions}>
            {AccordionsData.map(item => (
              <div key={item.id} className={styles.accordionItem}>
                <div className={styles.accordionHeader} onClick={() => toggleAccordion(item.id)}>
                  <div>{item.title}</div>
                  <div>{openAccordions.includes(item.id) ? (<i class="fa-solid fa-chevron-down"></i>) : (<i class="fa-solid fa-chevron-up"></i>)}</div> {/*displays +/-  based on whether the current accordion is open (i.e., its id is in the openAccordions array). */}
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
          <div className='priceRangeSlider'></div>
        </div>

        <div className={styles.ProductCardsContainer}>
          {
            products.map(item => (
              <div key={item.id} className={styles.productCard}>
                <header>
                  <img src={item.img} alt="" />
                </header>

                <div className='label'>{item.status}</div>

                <p>{item.title}</p>
                <p>{item.currency} {item.price}</p>

                <div>
                  <button>Add to cart</button>

                  <button>
                    <i class="fa-regular fa-heart"></i>
                  </button>

                  <button>
                    <i class="fa-solid fa-heart"></i>
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