import React, { useState, useRef } from 'react';
import '../components/ServicesPage.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const carouselRef = useRef(null);

  const tabs = ['Registration', 'Registration', 'Registration', 'Registration'];

  const serviceCards = [
    {
      icon: '👥',
      title: 'Private Limited',
      description: 'Donec fringilla in elementum placerat orci viverra at, in amet, urna. scelerisque faucibus adipiscing viverra placerat ex.',
      features: [
        { icon: '✓', text: 'Digital KYC' },
        { icon: '✓', text: 'Document Preparation' },
        { icon: '✓', text: 'Government Filing' },
      ],
      trustText: '600+ Businesses Trust This Service',
      trustIcon: '👥',
    },
    {
      icon: '👥',
      title: 'Private Limited',
      description: 'Donec fringilla in elementum placerat orci viverra at, in amet, urna. scelerisque faucibus adipiscing viverra placerat ex.',
      features: [
        { icon: '✓', text: 'Digital KYC' },
        { icon: '✓', text: 'Document Preparation' },
        { icon: '✓', text: 'Government Filing' },
      ],
      trustText: '600+ Businesses Trust This Service',
      trustIcon: '👥',
    },
    {
      icon: '👥',
      title: 'Private Limited',
      description: 'Donec fringilla in elementum placerat orci viverra at, in amet, urna. scelerisque faucibus adipiscing viverra placerat ex.',
      features: [
        { icon: '✓', text: 'Digital KYC' },
        { icon: '✓', text: 'Document Preparation' },
        { icon: '✓', text: 'Government Filing' },
      ],
      trustText: '600+ Businesses Trust This Service',
      trustIcon: '👥',
    },
  ];

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const cardWidth = 380; // Approximate card width + gap
      carouselRef.current.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="services-page">
      <div className="container">
        {/* Trusted By Header */}
        <div className="services-header">
          <div className="services-label">TRUSTED BY</div>
          <h1 className="services-main-title">28000+ Entrepreneurs And Business</h1>
        </div>

        {/* Navigation Tabs */}
        <div className="services-tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`service-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Service Cards Carousel */}
        <div className="services-carousel-wrapper">
          <button
            className="carousel-nav-btn carousel-prev"
            onClick={() => scrollCarousel(-1)}
            aria-label="Previous"
          >
            ‹
          </button>
          
          <div className="services-cards-container" ref={carouselRef}>
            {serviceCards.map((card, index) => (
              <div key={index} className="service-card-detailed">
                <div className="service-card-icon-wrapper">
                  <div className="service-card-icon">{card.icon}</div>
                </div>
                <div className="service-card-content">
                  <h3 className="service-card-title">{card.title}</h3>
                  <p className="service-card-description">{card.description}</p>
                  
                  <div className="service-features-list">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="service-feature-item">
                        <span className="feature-check">{feature.icon}</span>
                        <span className="feature-text">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-trust-badge">
                    <span className="trust-icon">{card.trustIcon}</span>
                    <span className="trust-text">{card.trustText}</span>
                  </div>

                  <button className="service-get-started-btn">
                    Get Started
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-nav-btn carousel-next"
            onClick={() => scrollCarousel(1)}
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="services-pagination">
          <span className="pagination-dot active"></span>
          <span className="pagination-dot"></span>
          <span className="pagination-dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Services;

