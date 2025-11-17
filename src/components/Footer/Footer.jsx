import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">🛍️</div>
              <h3>ShoppyGlobe</h3>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">

            </ul>
          </div>

          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul className="footer-links">
              <li><a href="#">📞 Contact Us</a></li>
              <li><a href="#">🚚 Shipping Info</a></li>
              <li><a href="#">↩️ Returns</a></li>
              <li><a href="#">❓ FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 support@shoppyglobe.com</p>
              <p>📞 +1 (91) 123-4567</p>
              <p>📍 123 Shopping Street, Retail ABC</p>
            </div>
            <div className="payment-methods">
              <span>💳</span>
              <span>🏦</span>
              <span>📱</span>
              <span>🔒</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 ShoppyGlobe. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;