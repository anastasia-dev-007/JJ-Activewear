import React, { useState, useEffect } from 'react'
import { getProducts } from '../../products.service';
import styles from "../ProductListing/ProductListing.module.css"
import { Link, useSearchParams } from 'react-router-dom';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [openAccordions, setOpenAccordions] = useState([]); //openAccordions is an array that keeps track of the accordion items that are currently open.
  const [queryParams] = useSearchParams(); //for links from NavBar to ProductDetails
  const [isChecked, setIsChecked] = useState({});
  const [currentFilters, setCurrentFilters] = useState({
    category: '',
    subcategory: '',
    size: '',
    availability: '',
    color: '',
    minPrice: '',
    maxPrice: '',
  });

  //for links from NavBar to ProductDetails
  const filters = {
    category: queryParams.get('category'),
    subcategory: queryParams.get('subcategory'),
    promo: queryParams.get('promo'),
    newArrival: queryParams.get('newArrival'),
  };

  //usage of filters for links from NavBar to ProductDetails
  useEffect(() => {
    const data = getProducts(); // Fetch products data

    setProducts(data.filter(product => {
      // Filter products based on query parameters
      return (
        (!filters.category || product.category === filters.category) &&
        (!filters.subcategory || product.subcategory === filters.subcategory) &&
        (!filters.promo || product.promo === filters.promo) &&
        (!filters.newArrival || product.newArrival === filters.newArrival) &&
        (!isChecked[1] || isChecked[1][product.subcategory]) &&
        (!isChecked[1] || isChecked[1][product.size]) &&
        (!isChecked[1] || isChecked[1][product.availability]) &&
        (!isChecked[1] || isChecked[1][product.color])
      );
    }));
  }, [queryParams, isChecked]); //pun ca array de dependente queryParams, pentru ca pana acum era filers si el randa la infinit. queryParams nu se modifica, el doar se ia din URL

  const AccordionsData = [
    {
      id: 1,
      accordionTitle: 'Activewear',
      list: [
        { id: 1, title: 'Tops & Sport Bars' },
        { id: 2, title: 'T-shirts' },
        { id: 3, title: 'Long-sleeve workout tops' },
        { id: 4, title: 'Tennis Shorts' },
        { id: 5, title: 'Leggings & Yoga Pants' },
        { id: 6, title: 'Matching Sets' },
        { id: 7, title: 'All Activewear' }]
    },
    {
      id: 2,
      accordionTitle: 'Accessories',
      list: [
        { id: 1, title: 'Sport Bags' },
        { id: 2, title: 'Corsets' },
        { id: 3, title: 'Resistance Bands' },
        { id: 4, title: 'All Accessories' }
      ]
    },
    {
      id: 3,
      accordionTitle: 'Swimwear',
      list: [
        { id: 1, title: 'Swimwear' },
      { id: 2, title: 'All Swimwear' }]
    },
    {
      id: 4,
      accordionTitle: 'Size',
      list: [
        { id: 1, title: 'S' },
        { id: 2, title: 'M' },
        { id: 3, title: 'L' },
      ]
    },
    {
      id: 5,
      accordionTitle: 'Availability',
      list: [
        { id: 1, title: 'Available' },
        { id: 2, title: 'Out of stock' },
      ]
    },
    {
      id: 6,
      accordionTitle: 'Colors',
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

  //toggleAccordion function is responsible for managing which accordions are open and which are closed.
  const toggleAccordion = (id) => {
    if (openAccordions.includes(id)) { //  // Check if the accordion with this id is already in the openAccordions array
      setOpenAccordions(openAccordions.filter(acc => acc !== id));  // If it is already open, close it by updating openAccordions to exclude the current id. If the accordion is already open ('includes' returns 'true'), it removes that id from the openAccordions array. It uses the 'filter' function to create a new array that includes all the items from openAccordions except the one with the id clicked on.
    } else {
      setOpenAccordions([...openAccordions, id]); //If the accordion is closed ('includes' returns 'false'), means it's opening. So, it sets the openAccordions array to a new array that contains all the existing items from openAccordions ([...openAccordions]) and adds the new id to it.
    }
  };
  //  but if I would want to close the rest of the open accordions when opening a new one I would use this function:
  // const toggleAccordion = (id) => {
  //   if (openAccordions.includes(id)) {
  //     // If the accordion with this id is already open, close all accordions.
  //     setOpenAccordions([]);
  //   } else {
  //     // If the accordion is closed, close all accordions and open the selected one.
  //     setOpenAccordions([id]);
  //   }
  // };

  const handleCheckBoxChange = (accordionId, itemId) => {
    setIsChecked((prevStates) => {
      const accordionState = { ...prevStates[accordionId] };
      accordionState[itemId] = !accordionState[itemId];
      const newStates = { ...prevStates, [accordionId]: accordionState };
      return newStates;
    });
  };

  const applyFilters = () => {
    return products.filter(product => {
      let isAvailable = true;

      if (currentFilters.category && product.category !== currentFilters.category) {
        isAvailable = false;
      }

      if (currentFilters.subcategory && product.subcategory !== currentFilters.subcategory) {
        isAvailable = false;
      }

      if (currentFilters.size && product.size !== currentFilters.size) {
        isAvailable = false;
      }

      if (currentFilters.availability && product.availability !== currentFilters.availability) {
        isAvailable = false;
      }

      if (currentFilters.color && product.color !== currentFilters.color) {
        isAvailable = false;
      }

      if (currentFilters.minPrice && currentFilters.maxPrice) {
        const productPrice = product.price || 0; // Assuming product.price is a number
        const minPrice = parseFloat(currentFilters.minPrice);
        const maxPrice = parseFloat(currentFilters.maxPrice);

        isAvailable = isAvailable && (productPrice >= minPrice && productPrice <= maxPrice);
      }

      return isAvailable;
    });
  };

  const handleFilterChange = (filterType, value) => {
    setCurrentFilters(prevFilters => ({prevFilters, [filterType]: value}));

    const filteredProducts = applyFilters();
    setProducts(filteredProducts);
  }

  return (
    <div className={styles.productListingContainer}>
      <header>
        <div className='path'>
          <p><Link to='/#'>Home</Link> | Page with title of category selected by user </p>
        </div>

        <div className='title'>
          <h2> Title of category selected by user </h2>
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
                  {/* //The purpose of passing item.id as an argument is to uniquely identify this accordion, toggleAccordion function keeps track of which accordions are open and which are closed. By passing an identifier, the function knows specifically which accordion should be toggled. */}
                  <div>{item.accordionTitle}</div>
                  <div>{openAccordions.includes(item.id) ? (<i class="fa-solid fa-chevron-up"></i>) : (<i class="fa-solid fa-chevron-down"></i>)}</div> {/*displays +/-  based on whether the current accordion is open (i.e., its id is in the openAccordions array). */}
                </div>
                {openAccordions.includes(item.id) && ( //checks if the current accordion is open. If open, accordion content is rendered.
                  <div className={styles.accordionList}>
                    {item.list.map(listItem => (
                      <div key={listItem.id}>
                        <input type='checkbox'
                          checked={isChecked[item.id] && isChecked[item.id][listItem.id]}
                          onChange={() => handleCheckBoxChange(item.id, listItem.id)} />

                        <span>{listItem.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/**Price Filter */}
          <div className={styles.accordionItem}>
            <div
              className={styles.accordionHeader}
              onClick={() => toggleAccordion('priceFilter')} //WHY HERE I PUT STRING?
            >
              <div>Price</div>
              <div>
                {openAccordions.includes('priceFilter') ? (//WHY HERE I PUT A STRING?
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-down"></i>
                )} {/** dynamic rendering of icon up|down based on whether the 'price-filter' accordion is open or closed, this line is checking if the 'price-filter' is present in the openAccordions array. */}
              </div>
            </div>
            {openAccordions.includes('priceFilter') && ( //this line checks if the 'price-filter' accordion is open and if true, it renders the content of accordion.
              <div className={styles.accordionList}>
                <h6>Price Filter</h6>
                <input type="range" id="priceRange" name="priceRange" min="0" max="5000" />
              </div>
            )}
          </div>

          <button onClick={handleFilterChange}>Apply Filters</button>
          <button>Reset Filters</button>

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
                  <img src={Array.isArray(item.imgs) && item.imgs.length > 0 ? `/assets${item.imgs[0]}` : ''} alt="" />
                </Link>

                <div className={styles.label}>{item.bestSellerStatus}</div>

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
                <div style={{ fontSize: '14px', marginBottom: '5px' }}>{item.currency} {item.price.toFixed(2)}</div>

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