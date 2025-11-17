import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartItems, getCartTotal } from '../../store/selectors/cartSelectors';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const cartTotal = useSelector(getCartTotal);

if (cartItems.length === 0) {
    return (
      <div className="cart empty-cart">
        <div className="container">
          <h2>Your Cart</h2>
          <div className="empty-cart-message">
            <p>Your cart is empty</p>
            <Link to="/" className="continue-shopping">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }


  
          </div>
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-item total">
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
            <Link to="/" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;