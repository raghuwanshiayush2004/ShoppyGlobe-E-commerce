import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categorySlug) => {
    // Navigate to home page with category filter
    navigate(`/?category=${categorySlug}`);
  };

  const categoryIcons = {
    smartphones: '📱',
    laptops: '💻',
    fragrances: '🌸',
    skincare: '🧴',
    groceries: '🛒',
    'home-decoration': '🏠',
    furniture: '🛋️',
    tops: '👕',
    'womens-dresses': '👗',
    'womens-shoes': '👠',
    'mens-shirts': '👔',
    'mens-shoes': '👞',
    'mens-watches': '⌚',
    'womens-watches': '⌚',
    'womens-bags': '👜',
    'womens-jewellery': '💍',
    sunglasses: '🕶️',
    automotive: '🚗',
    motorcycle: '🏍️',
    lighting: '💡'
  };

  if (loading) return <div className="loading">Loading categories...</div>;

  return (
    <div className="categories-page">
      <div className="container">
        <div className="categories-header">
          <h1>📂 Product Categories</h1>
          <p>Explore our wide range of products</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <div 
              key={category.slug} 
              className="category-card"
              onClick={() => handleCategoryClick(category.slug)}
            >
              <div className="category-icon">
                {categoryIcons[category.slug] || '📦'}
              </div>
              <h3 className="category-name">
                {category.name}
              </h3>
              <p className="category-description">
                Discover amazing {category.name.toLowerCase()} products
              </p>
              <div className="category-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;