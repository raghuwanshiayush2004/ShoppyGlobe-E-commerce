import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';

const ProductList = () => {
  const { products, loading, error } = useProducts();
  const searchTerm = useSelector(state => state.search.searchTerm);
  const dispatch = useDispatch();
  const [sortOption, setSortOption] = useState('default');
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get category from URL parameters
useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

 const setSearchTerm = (term) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  };



  // Filter products based on search term and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? 
      product.category.toLowerCase() === selectedCategory.toLowerCase() : true;
    
    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const clearCategoryFilter = () => {
    setSelectedCategory('');
    setSearchParams({});
  };

  const clearAllFilters = () => {
    setSelectedCategory('');
    setSearchTerm('');
    setSortOption('default');
    setSearchParams({});
  };

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="product-list">
      <div className="container">
        <div className="page-header">
          <h1>
            {selectedCategory ? `🛍️ ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}` : '🛍️ All Products'}
          </h1>
          <p>
            {selectedCategory 
              ? `Discover amazing ${selectedCategory} products` 
              : 'Discover amazing products at great prices'
            }
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="products-controls">
          <div className="search-container">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search products by name, description, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchTerm('')}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="filter-controls">
            <div className="sort-container">
              <label htmlFor="sort">Sort by:</label>
              <select 
                id="sort"
                value={sortOption} 
                onChange={(e) => setSortOption(e.target.value)}
                className="sort-select"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            {selectedCategory && (
              <button 
                className="clear-category-btn"
                onClick={clearCategoryFilter}
              >
                ✕ Clear Category
              </button>
            )}
          </div>
        </div>

        {/* Results Info */}
        <div className="results-info">
          <div className="results-count">
            <span className="count">{sortedProducts.length}</span>
            <span>products found</span>
            {searchTerm && (
              <span className="search-term">for "{searchTerm}"</span>
            )}
            {selectedCategory && (
              <span className="category-tag">
                in <strong>{selectedCategory}</strong>
              </span>
            )}
          </div>
          
          {(searchTerm || selectedCategory) && (
            <button 
              className="clear-all-filters"
              onClick={clearAllFilters}
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {sortedProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>

        {/* No Results Message */}
        {sortedProducts.length === 0 && (
          <div className="no-products">
            <div className="no-products-icon">🔍</div>
            <h3>No products found</h3>
            <p>
              {selectedCategory 
                ? `No products found in ${selectedCategory} category. Try adjusting your search terms.`
                : 'Try adjusting your search terms or browse our categories'
              }
            </p>
            <div className="no-products-actions">
              <button 
                className="clear-filters-btn"
                onClick={clearAllFilters}
              >
                Clear All Filters
              </button>
              <Link to="/categories" className="browse-categories-btn">
                Browse Categories
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;