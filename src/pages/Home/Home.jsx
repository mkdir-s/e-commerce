import React, {useContext, useState, useEffect, useMemo} from 'react';
import {ProductContext} from '../../contexts/ProductContext';
import styles from './Home.module.scss';
import ProductCard from '../../components/ProductCard/ProductCard';

const ITEMS_PER_PAGE = 6; 
const LOCAL_STORAGE_KEY = 'product_filters'; 

const Home = () => {
  const {products} = useContext(ProductContext);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const savedFilters = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return savedFilters?.category || 'all';
  });

  useEffect(() => {
    const filters = {
      category: selectedCategory,
      searchQuery,
      currentPage,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filters));
  }, [selectedCategory, searchQuery, currentPage]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        console.log(data)
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);



  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <section className={styles.home}>
        <div className="container">
          <div className={styles.categories}>
            <h3 className={styles.categoriesTitle}>Filter by category: </h3>
            <div className={styles.categoriesList}>
              {categories.map((category) => {
                return (
                  <div className={styles.categoriesButton} onClick={() => setSelectedCategory(category)}>{category}</div>
                )
              })}
              <div className={styles.categoriesButton} onClick={() => setSelectedCategory('all')}>all</div>
            </div>
          </div>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.cards}>
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className={styles.notFound}>No products found</p>
            )}
          </div>
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                &larr; Previous
              </button>
              
              <span>page {currentPage} of {totalPages}</span>
              
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next &rarr;
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Home