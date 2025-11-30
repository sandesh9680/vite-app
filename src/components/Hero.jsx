import React, { useState } from 'react';

const Hero = () => {
  const [activeCategory, setActiveCategory] = useState(2);

  const categories = ['Digital Market', 'Digital Market', 'Digital Market', 'Digital Market'];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-top-label-wrapper">
          <div className="hero-top-label">FROM IDEA TO INCORPORATION:</div>
          <div className="hero-top-label-line"></div>
        </div>
        <h1 className="hero-title">
          Effortless Legal Solutions for <span className="highlight">Every Stage</span> of Business
        </h1>
        <p className="hero-description">
          Whether launching, trademarking, or staying compliant, we handle the paperwork so you can focus on growth.
        </p>
        <div className="hero-search">
          <button className="search-icon-btn" aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <input type="text" placeholder="Browse 400+ Services" className="search-input" />
          <button className="mic-icon-btn" aria-label="Voice search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 10V12C19 16.42 15.42 20 11 20M11 20V23M11 20H8M11 20H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="hero-categories-section">
          <div className="categories-label">CATEGORIES</div>
          <div className="hero-categories">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`hero-category-tab ${activeCategory === index ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="hero-trust-indicators">
          <div className="trust-item">
            <div className="trust-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div className="trust-content">
              <div className="trust-rating">
                <span className="trust-number">20K+</span>
                <div className="trust-stars">★★★★★</div>
              </div>
              <div className="trust-text">5/5 Google Reviews</div>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">📚</div>
            <div className="trust-text">10 Years of Experience</div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">👥</div>
            <div className="trust-text">10,000+ Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

