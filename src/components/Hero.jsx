import React from 'react';

const Hero = () => {
  const services = [
    { icon: '🏢', name: 'Company Registration' },
    { icon: '📋', name: 'GST Registration' },
    { icon: '™️', name: 'Trademark' },
    { icon: '💰', name: 'Income Tax' },
    { icon: '✅', name: 'Compliance' },
  ];

  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Effortless Legal Solutions for <span className="highlight">Every Stage</span> of Business
        </h1>
        <p className="hero-description">
          We provide comprehensive legal and compliance solutions tailored to meet the unique needs of businesses at every stage of their journey.
        </p>
        <div className="hero-search">
          <input type="text" placeholder="Search for your legal solution..." className="search-input" />
          <button className="search-icon-btn" aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="mic-icon-btn" aria-label="Voice search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 10V12C19 16.42 15.42 20 11 20M11 20V23M11 20H8M11 20H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="hero-services">
          {services.map((service, index) => (
            <div key={index} className="service-icon-item">
              <div className="service-icon">{service.icon}</div>
              <span>{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

