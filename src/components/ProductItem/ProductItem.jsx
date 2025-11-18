import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img 
            src={product.thumbnail} 
            alt={product.title}
            loading="lazy"
          />
        </div>
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-category">{product.category}</p>
          <p className="product-price">${product.price}</p>
          <div className="product-rating">
            ⭐ {product.rating}
          </div>
        </div>
      </Link>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;