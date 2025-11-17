import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import useProductDetail from '../../hooks/useProductDetail';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductDetail(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(state => state.auth);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (loading) return <div className="loading">Loading product details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="error">Product not found</div>;



    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
    alert(`${quantity} ${product.title} added to cart!`);
  };


    handleAddToCart();
    navigate('/cart');
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-detail">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/categories">Categories</Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="current">{product.title}</span>
        </nav>
        
        <div className="product-detail-content">
          <div className="product-images">
            <div className="main-image">
              <img 
                src={product.images?.[selectedImage] || product.thumbnail} 
                alt={product.title}
                loading="lazy"
              />
            </div>
            
            <div className="image-thumbnails">
              {product.images && product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className={selectedImage === index ? 'active' : ''}
                  onClick={() => setSelectedImage(index)}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          
          <div className="product-info">
            <div className="product-header">
              <h1>{product.title}</h1>
              <div className="product-meta">
                <span className="brand">Brand: {product.brand}</span>
                <span className="category">Category: {product.category}</span>
              </div>
            </div>

            <div className="product-rating">
              <div className="stars">
                {'⭐'.repeat(Math.floor(product.rating))}
                <span className="rating-value">{product.rating}</span>
              </div>
              <span className="reviews">({product.reviews?.length || 0} reviews)</span>
            </div>

            <div className="product-pricing">
              <div className="price">${product.price}</div>
              <div className="discount">
                <span className="original-price">
                  ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                </span>
                <span className="discount-percent">
                  {product.discountPercentage}% OFF
                </span>
              </div>
            </div>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-features">
              <h3>Features</h3>
              <ul>
                <li>🛡️ 1 Year Warranty</li>
                <li>🚚 Free Shipping</li>
                <li>↩️ 30-Day Return Policy</li>
                <li>📞 24/7 Customer Support</li>
              </ul>
            </div>

            <div className="stock-info">
              <span className={`stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                {product.stock > 0 ? `✅ ${product.stock} items in stock` : '❌ Out of stock'}
              </span>
            </div>

            <div className="purchase-options">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button onClick={decreaseQuantity} disabled={quantity <= 1}>-</button>
                  <span className="quantity">{quantity}</span>
                  <button onClick={increaseQuantity} disabled={quantity >= product.stock}>+</button>
                </div>
              </div>

              <div className="action-buttons">
                <button 
                  className="add-to-cart-btn"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  🛒 Add to Cart ({quantity})
                </button>
                <button 
                  className="buy-now-btn"
                  onClick={handleBuyNow}
                  disabled={product.stock === 0}
                >
                  ⚡ Buy Now
                </button>
              </div>
            </div>

            <div className="product-tags">
              <span className="tag">🔥 Hot Deal</span>
              <span className="tag">⭐ Best Seller</span>
              <span className="tag">🆕 New Arrival</span>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="reviews-section">
          <h3>Customer Reviews</h3>
          {product.reviews && product.reviews.length > 0 ? (
            <div className="reviews-list">
              {product.reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-header">
                    <span className="reviewer">{review.reviewerName}</span>
                    <span className="review-rating">⭐ {review.rating}/5</span>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                  <span className="review-date">{review.date}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-reviews">No reviews yet. Be the first to review this product!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;