import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/actions/cartActions';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();


  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };



  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.thumbnail} alt={item.title} />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-category">{item.category}</p>
        <p className="cart-item-price">${item.price}</p>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button 
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button onClick={() => handleQuantityChange(item.quantity + 1)}>
            +
          </button>
        </div>
        <div className="cart-item-total">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <button className="remove-btn" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;