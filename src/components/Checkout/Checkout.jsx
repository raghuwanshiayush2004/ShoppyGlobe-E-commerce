import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartItems, getCartTotal } from '../../store/selectors/cartSelectors';
import { clearCart } from '../../store/actions/cartActions';
import './Checkout.css';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(getCartItems);
  const cartTotal = useSelector(getCartTotal);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate order processing
    setOrderPlaced(true);
    dispatch(clearCart());
    
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="checkout">
        <div className="container">
          <div className="order-success">
            <h2>🎉 Order Placed Successfully!</h2>
            <p>Thank you for your purchase. You will be redirected to the home page shortly.</p>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout">
        <div className="container">
          <div className="empty-cart-message">
            <h2>Your cart is empty</h2>
            <p>Please add some items to your cart before checkout.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="container">
        <h2>Checkout</h2>
        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handlePlaceOrder}>
            <div className="form-section">
              <h3>Shipping Information</h3>
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <div className="form-row">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP Code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Payment Information</h3>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
              <div className="form-row">
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-items">
              {cartItems.map(item => (
                <div key={item.id} className="summary-item">
                  <span>{item.title} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="summary-total">
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;