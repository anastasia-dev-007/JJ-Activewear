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

  const categoryAccordionData = [
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
        { id: 3, title: 'Running Sock' }
      ]
    },
    {
      id: 3,
      title: 'Swimwear',
      list: [{ id: 1, title: 'Swimwear' },]
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
    <div>
      <header>
        <div className='path'>
          <p>Home | Page with title of category selected by user</p>
        </div>

        <div className='title'>
          <h2>Title of category selected by user</h2>
        </div>
      </header>

      <div className='sortByPrice'></div>

      {/* to copy style from Aimo */}
      <div className='filterContainer'>
        <div className='categoryAccordion'>
          {categoryAccordionData.map(item => (
            <div key={item.id} className="accordionItem">
              <div className="accordionTitle" onClick={() => toggleAccordion(item.id)}>
                <div>{item.title}</div>
                <div>{openAccordions.includes(item.id) ? '-' : '+'}</div> {/*displays +/-  based on whether the current accordion is open (i.e., its id is in the openAccordions array). */}
              </div>
              {openAccordions.includes(item.id) && ( //checks if the current accordion is open. If open, accordion content is rendered.
                <div className="accordionList">
                  {item.list.map(listItem => (
                    <div key={listItem.id}>{listItem.title}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='colorsAccordions'></div>
        <div className='sizeAcordeon'></div>
        <div className='priceRuler'></div>
      </div>

      <div className={styles.ProductCardContainer}>
        {
          products.map(item => (
            <div key={item.id}>
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

      <button>More</button>

      <div className='recentlyViewed'>
        <h3>Recently Viewed Products</h3>
        <div className='fiveCards'></div>
      </div>
    </div>
  )
}

export default ProductListing;