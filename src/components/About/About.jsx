import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>ℹ️ About ShoppyGlobe</h1>
          <p className="about-subtitle">Your Trusted E-Commerce Destination</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <div className="about-text">
              <h2>🌟 Our Story</h2>
              <p>
                Welcome to ShoppyGlobe, your premier online shopping destination. 
                We're committed to providing you with the very best products, 
                with a focus on quality, customer service, and uniqueness.
              </p>
              <p>
                Founded in 2024, ShoppyGlobe has come a long way from its beginnings. 
                When we first started out, our passion for providing the best shopping 
                experience drove us to do intense research and gave us the impetus to 
                turn hard work and inspiration into a booming online store.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">🛍️</div>
            </div>
          </section>

          <section className="features-section">
            <h2>🚀 Why Choose ShoppyGlobe?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🚚</div>
                <h3>Fast Delivery</h3>
                <p>Quick and reliable shipping to your doorstep</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Quality Products</h3>
                <p>Carefully curated items from trusted brands</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Secure Shopping</h3>
                <p>Your data and payments are always protected</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <h3>24/7 Support</h3>
                <p>Round-the-clock customer service</p>
              </div>
            </div>
          </section>

          <section className="mission-section">
            <h2>🎯 Our Mission</h2>
            <p>
              We aim to revolutionize the online shopping experience by providing 
              exceptional service, quality products, and competitive prices. Our 
              mission is to make shopping convenient, enjoyable, and accessible to everyone.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;