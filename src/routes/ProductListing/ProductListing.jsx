import React, { useState, useEffect } from 'react'
import { getProducts } from '../../products.service';
import styles from "../ProductListing/ProductListing.module.css"
import { Link, useSearchParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams({ //TOATE FILTRELE MERG PRIN QUERYPARAMS, CI NU PRIN STATE
    category: [],
    subcategoryCode: [],
    size: [],
    availability: '',
    color: [],
    minPrice: '',
    maxPrice: '',
    promo: '',
    newArrival: '',
  }); //for links from NavBar to ProductDetails
  
  //for links from NavBar to ProductDetails
  const filters = { //valorile din acest filters se iau din queryParams
    category: queryParams.get('category'),
    subcategoryCode: queryParams.get('subcategoryCode'),
    size: queryParams.get('size'),
    availability: queryParams.get('availability'),
    color: queryParams.get('color'),
    minPrice: queryParams.get('minPrice'),
    maxPrice: queryParams.get('maxPrice'),
    promo: queryParams.get('promo'),
    newArrival: queryParams.get('newArrival'),
  };

  //usage of filters for links from NavBar to ProductListing
  useEffect(() => {
    const data = getProducts(); // Fetch products data

    setProducts(data.filter(product => {
      // Filter products based on query parameters
      return ( //aici doar are loc filtrarea
        (!filters.category || product.category === filters.category) &&
        (!filters.subcategoryCode || product.subcategoryCode === filters.subcategoryCode) &&
        (!filters.size || product.size === filters.size) &&
        (!filters.availability || product.availability === filters.availability) &&
        (!filters.color || product.color === filters.color) &&
        (!filters.minPrice || product.minPrice === filters.minPrice) &&
        (!filters.maxPrice || product.maxPrice === filters.maxPrice) &&
        (!filters.promo || product.promo === filters.promo) &&
        (!filters.newArrival || product.newArrival === filters.newArrival)
      );
    }));
  }, [queryParams]); //pun ca array de dependente queryParams, pentru ca pana acum era filers si el randa la infinit. queryParams nu se modifica, el doar se ia din URL

  const AccordionsData = [
    {
      id: 1,
      category: 'Activewear',
      list: [
        { id: 1, subcategory: 'Tops & Sport Bars', subcategoryCode: 'tops_and_sport_bras' },
        { id: 2, subcategory: 'T-shirts', subcategoryCode: 'T-shirts' },
        { id: 3, subcategory: 'Long-sleeve workout tops', subcategoryCode: 'long-sleeve_workout_tops' },
        { id: 4, subcategory: 'Tennis Shorts', subcategoryCode: 'tennis_shorts' },
        { id: 5, subcategory: 'Leggings & Yoga Pants', subcategoryCode: 'leggings_and_yoga_pants' },
        { id: 6, subcategory: 'Matching Sets', subcategoryCode: 'matching_sets' }]
    },
    {
      id: 2,
      category: 'Accessories',
      list: [
        { id: 1, subcategory: 'Sport Bags', subcategoryCode: 'sport_bags' },
        { id: 2, subcategory: 'Corsets', subcategoryCode: 'corsets' },
        { id: 3, subcategory: 'Resistance Bands', subcategoryCode: 'resistance_bands' }
      ]
    },
    {
      id: 3,
      category: 'Swimwear',
      list: [
        { id: 1, subcategory: 'Swimwear', subcategoryCode: 'swimwear' },]
    },
    {
      id: 4,
      category: 'Size',
      list: [
        { id: 1, subcategory: 'S', subcategoryCode: 'S' },
        { id: 2, subcategory: 'M', subcategoryCode: 'M' },
        { id: 3, subcategory: 'L', subcategoryCode: 'L' },
      ]
    },
    {
      id: 5,
      category: 'Availability',
      list: [
        { id: 1, subcategory: 'Available', subcategoryCode: 'available' },
        { id: 2, subcategory: 'Out of stock', subcategoryCode: 'out_of_stock' },
      ]
    },
    {
      id: 6,
      category: 'Colors',
      list: [
        { id: 1, subcategory: '#ffffff', subcategoryCode: '#ffffff', },
        { id: 2, subcategory: '#dea18e', subcategoryCode: '#dea18e', },
        { id: 3, subcategory: '#e7d682', subcategoryCode: '#e7d682', },
        { id: 4, subcategory: '#aabbb1', subcategoryCode: '#aabbb1', },
        { id: 5, subcategory: '#f34221', subcategoryCode: '#f34221', },
        { id: 6, subcategory: '#0e0f13', subcategoryCode: '#0e0f13', },
        { id: 7, subcategory: '#c8c6eb', subcategoryCode: '#c8c6eb', },
        { id: 8, subcategory: '#438ad0', subcategoryCode: '#438ad0', },
        { id: 9, subcategory: '#7d888a', subcategoryCode: '#7d888a', },
        { id: 10, subcategory: '#dc3e79', subcategoryCode: '#dc3e79' },
      ],
    },
  ];

  
  const handleCheckBoxChange = (itemCategory, itemSubcategoryCode, itemSize, itemAvailability, itemColor, itemMinPrice, itemMaxPrice, itemPromo, itemNewArrival) => {//cand vom da click pe checkbox vom seta noile query params din accordion
    console.log(itemCategory, itemSubcategoryCode);
    setQueryParams({ //AICI SETEZ FILTERELE
      ...filters, //adaugam tot ce a fost in const filters + key: value
      category: itemCategory,
      subcategoryCode: itemSubcategoryCode,
      size: itemSize,
      availability: itemAvailability,
      color: itemColor,
      minPrice: itemMinPrice,
      maxPrice: itemMaxPrice,
      promo: itemPromo,
      newArrival: itemNewArrival
    })
  };

  // const applyFilters = () => {
  //   return products.filter(product => {
  //     let isAvailable = true;

  //     if (currentFilters.category && product.category !== currentFilters.category) {
  //       isAvailable = false;
  //     }

  //     if (currentFilters.subcategory && product.subcategory !== currentFilters.subcategory) {
  //       isAvailable = false;
  //     }

  //     if (currentFilters.size && product.size !== currentFilters.size) {
  //       isAvailable = false;
  //     }

  //     if (currentFilters.availability && product.availability !== currentFilters.availability) {
  //       isAvailable = false;
  //     }

  //     if (currentFilters.color && product.color !== currentFilters.color) {
  //       isAvailable = false;
  //     }

  //     if (currentFilters.minPrice && currentFilters.maxPrice) {
  //       const productPrice = product.price || 0; // Assuming product.price is a number
  //       const minPrice = parseFloat(currentFilters.minPrice);
  //       const maxPrice = parseFloat(currentFilters.maxPrice);

  //       isAvailable = isAvailable && (productPrice >= minPrice && productPrice <= maxPrice);
  //     }

  //     return isAvailable;
  //   });
  // };

  const handleFilterChange = (filterType, value) => {
    console.log(filterType, value);
    // setCurrentFilters(prevFilters => ({prevFilters, [filterType]: value}));

    // const filteredProducts = applyFilters();
    // setProducts(filteredProducts);
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
            {/* https://react-bootstrap.netlify.app/docs/components/accordion */}
            <Accordion alwaysOpen>
              {AccordionsData.map(item => (
                <Accordion.Item eventKey={item.id}>
                  <Accordion.Header>{item.category}</Accordion.Header>
                  <Accordion.Body>
                    {item.list.map(listItem => (
                      <div key={listItem.id}>
                        <input type='checkbox'
                          checked={filters.category === item.category && filters.subcategoryCode === listItem.subcategoryCode} //acest functional face ca daca am ales ceva din NavBar, pai acea subcategorie va fi deja bifata automat in SideBar
                          onChange={() => handleCheckBoxChange(item.category, listItem.subcategoryCode)} />

                        <span>{listItem.subcategory}</span>
                      </div>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          {/**Price Filter */}
          <Accordion defaultActiveKey={['7']} alwaysOpen>
            <Accordion.Item eventKey="priceFilter">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <input type="range" id="priceRange" name="priceRange" min="0" max="5000" />
              </Accordion.Body>
            </Accordion.Item>

            {/* Add more Accordion items as needed */}
          </Accordion>

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

                <Link to={'/product-details/' + item.id} style={{ fontWeight: '600px' }}>{item.subcategory}</Link>
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