import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCartItemCount } from '../../store/selectors/cartSelectors';
import { logout } from '../../store/actions/authActions';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = useSelector(getCartItemCount);
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <div className="logo-icon">🛍️</div>
          <h1>ShoppyGlobe</h1>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <span className="nav-icon">🏠</span>
            Home
          </Link>
          
          <Link to="/categories" onClick={() => setIsMenuOpen(false)}>
            <span className="nav-icon">📂</span>
            Categories
          </Link>
          
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            <span className="nav-icon">ℹ️</span>
            About
          </Link>

          <Link to="/cart" className="cart-link" onClick={() => setIsMenuOpen(false)}>
            <span className="nav-icon">🛒</span>
            Cart
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </Link>

          {isAuthenticated ? (
            <div className="user-menu">
              <span className="user-greeting">👋 Hello, {user?.firstName}</span>
              <button onClick={handleLogout} className="logout-btn">
                <span className="nav-icon">🚪</span>
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="login-btn">
                <span className="nav-icon">🔑</span>
                Login
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="signup-btn">
                <span className="nav-icon">📝</span>
                Sign Up
              </Link>
            </div>
          )}
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Header;