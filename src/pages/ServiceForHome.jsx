import React, { useState, useRef } from 'react';
import '../components/ServicesPage.css';

const ServiceForHome = () => {
  const [activeTab, setActiveTab] = useState(0);
  const carouselRef = useRef(null);

  const tabs = ['Registration', 'Registration', 'Registration', 'Registration', 'Registration'];

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
      const firstCard = carouselRef.current.querySelector('.service-card-detailed');
      const cardWidth =
        (firstCard && firstCard.offsetWidth + 30) || // card width + typical gap
        380; // sensible fallback

      carouselRef.current.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="services-page">
      <div className="container">
        {/* Services Header */}
        <div className="services-header heading_short_long">
          <div className="short_title">OUR SERVICES</div>
          <h1 className="long_title">
            <span className="highlight">Smart</span> Compliance & <span className="highlight">Legal</span> Solutions For Businesses
          </h1>
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
                  {/* <div className="service-card-icon">{card.icon}</div> */}
                  <div className="service-card-icon"><svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.6011 18.4087C38.063 18.4119 39.5061 18.7421 40.8238 19.3755C42.1478 20.0119 43.3114 20.9384 44.2291 22.0854C45.1467 23.2325 45.7953 24.5711 46.1255 26.0024C46.4558 27.4339 46.4597 28.9217 46.1373 30.355C45.8149 31.7883 45.1737 33.1305 44.2623 34.2827C43.3508 35.4349 42.1922 36.3676 40.8716 37.0112C39.5511 37.6549 38.1024 37.9934 36.6334 38.0015C35.1728 38.0095 33.7291 37.6907 32.4078 37.0688C30.4381 36.0858 28.8545 34.4713 27.9097 32.4829C26.9644 30.4931 26.7134 28.2435 27.1968 26.0942C27.6803 23.945 28.8703 22.0197 30.5767 20.6265C32.2809 19.2351 34.4018 18.4545 36.6011 18.4087Z" stroke="#0018A6" stroke-width="3"/>
<path d="M17.25 50.6934C17.248 48.9846 17.7846 47.3182 18.7832 45.9316C19.7196 44.6315 21.0179 43.6387 22.5127 43.0752L22.8135 42.9688L29.1719 40.8545C31.4163 42.1711 33.9739 42.8711 36.585 42.8711C37.2872 42.8711 37.9063 42.8709 38.4824 42.8281C38.4569 42.932 38.4348 43.0367 38.417 43.1426C37.4971 47.8633 38.0288 52.7313 39.9102 57.1162H19.1748C18.6647 57.1152 18.1752 56.9115 17.8145 56.5508C17.4989 56.2351 17.3042 55.8211 17.2598 55.3809L17.25 55.1914V50.6934Z" stroke="#0018A6" stroke-width="3"/>
<path d="M66.4091 44.2474C67.1968 48.6217 66.4499 53.1376 64.287 57.0277C62.1667 60.8413 58.8171 63.8159 54.7939 65.476C50.7868 63.8212 47.4479 60.8625 45.3251 57.0697C43.1436 53.1717 42.3844 48.639 43.1718 44.2465C46.4385 42.9353 51.5104 40.9115 54.7929 39.6L66.4091 44.2474Z" stroke="#FF6F3B" stroke-width="3"/>
</svg>
</div>
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
                  
                  <button className="service-add-to-cart-btn">
                    <span className="cart-icon">🛒</span>
                    Add to Cart
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
          <span className="pagination-dot"></span>
        </div>
      </div>
    </section>
  );
};

export default ServiceForHome;

