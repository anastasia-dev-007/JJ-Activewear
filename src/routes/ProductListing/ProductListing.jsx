import React, { useState, useEffect } from 'react'
import { getProducts } from '../../products.service';
import styles from "../ProductListing/ProductListing.module.css"
import { Link, useSearchParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

const ProductListing = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams({ //TOATE FILTRELE MERG PRIN QUERYPARAMS, CI NU PRIN STATE
    category: '',
    subcategoryCode: '',
    size: '',
    availability: '',
    color: '',
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
    minPrice: parseFloat(queryParams.get('minPrice')),
    maxPrice: parseFloat(queryParams.get('maxPrice')),

    //This filter didn't worked previously before setting this new conditions. This modification checks if the value is the string 'undefined' and sets the property to undefined in such cases. Also, it correctly parses the minPrice and maxPrice as numbers. It looks like the size, availability, color, and other properties are still being set to the string value 'undefined'. This might be due to how the values are initially set in the queryParams object. Let's make sure that undefined values are handled correctly.
    //This approach ensures that if a parameter is not found in the URL, it defaults to undefined, avoiding potential errors when trying to access properties or methods on null or undefined.
  };
  console.log('const filters:', filters);


  //usage of filters for links from NavBar to ProductListing
  useEffect(() => { //useEffect runs function getProducts, each time when queryParams changes . fetch the product data and then filter it based on the specified query parameters (filters) before updating the products state with the filtered result. The effect is triggered whenever the queryParams dependency changes, indicating a change in the applied filters.
    const data = getProducts(); // Fetch products data

    let filteredProducts = data.map(product => ({
      ...product,
      availability: product.quantity > 0 ? 'Available' : 'Out of Stock'
    }))
      .filter(product => (
        (!filters.category || filters.category.split(',').includes(product.category)) && //if there is no filter specified for the category, all products are included in the result because !filters.category would be true. If a filter is specified for the category, then it checks whether the product's category matches the filtered category
        (!filters.subcategoryCode || filters.subcategoryCode.split(',').includes(product.subcategoryCode)) &&
        (!filters.size || filters.size.split(',').includes(product.size)) &&
        (!filters.availability || product.availability === filters.availability) &&
        (!filters.color || filters.color.split(',').includes(product.color)) &&
        (!filters.minPrice || parseFloat(product.price) >= parseFloat(filters.minPrice)) &&
        (!filters.maxPrice || parseFloat(product.price) <= parseFloat(filters.maxPrice)) &&
        (!filters.promo || product.promo === filters.promo) &&
        (!filters.newArrival || product.newArrival === filters.newArrival) &&
        //searching via navbar logic
        (!searchQuery || 
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.subcategoryCode.toLowerCase().includes(searchQuery.toLowerCase())
         )
      ));      

    // Sorting logic based on price
    if (queryParams.get('sortByPrice') === 'Ascending order') {
      filteredProducts = filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (queryParams.get('sortByPrice') === 'Descending order') {
      filteredProducts = filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    console.log('Filtered products:', filteredProducts);
    setProducts(filteredProducts);
  }, [queryParams, searchQuery]); //pun ca array de dependente queryParams, pentru ca pana acum era filers si el randa la infinit. queryParams nu se modifica, el doar se ia din URL


  const CategoriesAccordionsData = [
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
  ];

  const SizesAccordionData = [
    { id: 1, size: 'S' },
    { id: 2, size: 'M' },
    { id: 3, size: 'L' },
  ];

  const ColorsAccordionData = [
    { id: 1, color: 'white', colorCode: '#ffffff', },
    { id: 2, color: 'cream', colorCode: '#dea18e', },
    { id: 3, color: 'yellow', colorCode: '#e7d682', },
    { id: 4, color: 'green', colorCode: '#aabbb1', },
    { id: 5, color: 'orange', colorCode: '#f34221', },
    { id: 6, color: 'black', colorCode: '#0e0f13', },
    { id: 7, color: 'purple', colorCode: '#c8c6eb', },
    { id: 8, color: 'blue', colorCode: '#438ad0', },
    { id: 9, color: 'grey', colorCode: '#7a7e7e', },
    { id: 10, color: 'pink', colorCode: '#dc3e79' },
  ];

  const handleCheckBoxChange = (itemCategory, itemSubcategoryCode) => {
    // Check if the current subcategory is already in the array of selected subcategories
    const categories = filters.category ? filters.category.split(',') : [];
    const subcategories = filters.subcategoryCode ? filters.subcategoryCode.split(',') : [];
  
    // Toggle the selection
    const updatedCategories = categories.includes(itemCategory)
      ? categories.filter(category => category !== itemCategory)
      : [...categories, itemCategory];
    const updatedSubcategories = subcategories.includes(itemSubcategoryCode)
      ? subcategories.filter(subcategory => subcategory !== itemSubcategoryCode)
      : [...subcategories, itemSubcategoryCode];
  
    setQueryParams({
      ...filters,
      category: updatedCategories.join(','),
      subcategoryCode: updatedSubcategories.join(','), // Convert array to a comma-separated string
    });
  };
  

  const handleSizeSelection = (selectedSize) => {
    const sizes = filters.size ? filters.size.split(',') : [];

    const updatedSizes = sizes.includes(selectedSize)
      ? sizes.filter(size => size !== selectedSize)
      : [...sizes, selectedSize];

    setQueryParams({
      ...filters,
      size: updatedSizes.join(','),
    });
  };

  const handleColorSelection = (selectedColor) => {
    const colors = filters.color ? filters.color.split(',') : [];

    // Toggle the selection
    const updatedColors = colors.includes(selectedColor.color)
      ? colors.filter(color => color !== selectedColor.color)
      : [...colors, selectedColor.color];

    setQueryParams({
      ...filters,
      color: updatedColors.join(','),
    });
  };

  const handlePriceInput = (inputId, value) => {
    // Check if the value is a valid number
    const numericValue = parseFloat(value);
  
    // Check if the numericValue is a valid number
    const isValidNumber = !isNaN(numericValue) && isFinite(numericValue);
  
    console.log('Value:', value);
    console.log('Numeric Value:', numericValue);
    console.log('Is Valid Number:', isValidNumber);
  
    setQueryParams({
      ...filters,
      [inputId === 'minPrice' ? 'minPrice' : 'maxPrice']: isValidNumber ? numericValue : undefined,
    });
  };

  const resetFilters = () => {
    setQueryParams({
      category: '',
      subcategoryCode: '',
      size: '',
      availability: '',
      color: '',
      minPrice: '',
      maxPrice: '',
    });
  };

  return (
    <div className={styles.productListingContainer}>
      <header>
        <div className='path'>
          <p><Link to='/#'>Home</Link> |
            <Link to={'/products-list/'}>All products</Link> |
            <Link to={`/products-list?category=${filters.category || ''}`}>{filters.category || ''}</Link> |
            {filters.subcategoryCode || ''} </p>
        </div>

        <div className='title'>
          <p> {filters.category || 'All products'} ({products.length}) </p>
        </div>
      </header>

      <div className={styles.sortByPrice}>
        <label htmlFor="sortByPrice">Sort by price: </label>
        <select
          id="sortByPrice"
          name="sortByPrice"
          onChange={(event) => setQueryParams({ ...filters, sortByPrice: event.target.value })}
        >
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
              {CategoriesAccordionsData.map(item => (
                <Accordion.Item eventKey={item.id}>
                  <Accordion.Header>{item.category}</Accordion.Header>
                  <Accordion.Body>
                    {item.list.map(listItem => (
                      <div key={listItem.id}>
                        <input
                          type='checkbox'
                          checked={
                            filters.category &&
                            filters.category.split(',').includes(item.category) &&
                            filters.subcategoryCode &&
                            filters.subcategoryCode.split(',').includes(listItem.subcategoryCode)
                          }
                          onChange={() => handleCheckBoxChange(item.category, listItem.subcategoryCode)}
                        />

                        <span>{listItem.subcategory}</span>
                      </div>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              ))}

              {/**Size Filter */}
              <Accordion.Item eventKey="sizeFilter">
                <Accordion.Header>Size</Accordion.Header>
                <Accordion.Body >
                  {SizesAccordionData.map((item) => (
                    <div key={item.id}>
                      <input
                        type='checkbox'
                        // checked={filters.size === item.size}
                        checked={filters.size && filters.size.split(',').includes(item.size)}
                        onChange={() => handleSizeSelection(item.size)}
                      />
                      <span>{item.size}</span>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>

              {/**Color Filter */}
              <Accordion.Item eventKey="colorFilter">
                <Accordion.Header>Color</Accordion.Header>
                <Accordion.Body className={styles.colorsAccordionContainer} >
                  {
                    ColorsAccordionData.map((color) => (
                      <div key={color.id}
                        className={styles.colorsAccordion}
                        style={{
                          backgroundColor: color.colorCode,
                          color: color.colorCode,
                          boxShadow: filters.color === color.color ? `0 0 15px ${color.colorCode}` : 'none',
                        }}
                        onClick={() => handleColorSelection(color)}
                        checked={filters.color && filters.color.split(',').includes(color.color)}
                      >.</div>
                    ))
                  }
                </Accordion.Body>
              </Accordion.Item>

              {/**Price Filter */}
              <Accordion.Item eventKey="priceFilter">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                  from <input type="text" id='minPrice' onInput={(event) => handlePriceInput(event.target.id, event.target.value)} />
                  to
                  <input type="text" id='maxPrice' onInput={(event) => handlePriceInput(event.target.id, event.target.value)} />
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </div>

          <button onClick={resetFilters}>Reset Filters</button>

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
                    <i className="fa-regular fa-heart"></i>
                  </div>

                  <div>
                    <i style={{ display: 'none' }} className="fa-solid fa-heart"></i>
                  </div>
                </div>

                <Link to={'/product-details/' + item.id} style={{ fontWeight: '600px' }}>{item.title}</Link>
                <div style={{ fontSize: '12px', marginBottom: '5px' }}>{item.category} | {item.subcategory}</div>
                <div style={{ fontSize: '14px', marginBottom: '5px' }}>{item.currency} {item.price.toFixed(2)}</div>

                <div className={styles.addToCartAndFavorites}>
                  <button className={styles.addToCartBtn}>Add to cart <i className="fa-solid fa-cart-shopping"></i>
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