import React, { useRef } from 'react';

const SmartCompliance = () => {
  const carouselRef = useRef(null);

  const services = [
    { icon: '🏢', title: 'Company Registration', desc: 'Register your company quickly and easily with our expert guidance.' },
    { icon: '📋', title: 'GST Registration', desc: 'Get your GST registration done hassle-free with our support.' },
    { icon: '™️', title: 'Trademark Registration', desc: 'Protect your brand with trademark registration services.' },
  ];

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: direction * 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="smart-compliance">
      <div className="container">
        <h2 className="section-title">Smart Compliance & Legal Solutions For Businesses</h2>
        <div className="service-carousel">
          <button className="carousel-btn carousel-prev" onClick={() => scrollCarousel(-1)} aria-label="Previous">‹</button>
          <div className="service-cards" ref={carouselRef}>
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-icon">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <button className="btn-primary">Get Started</button>
              </div>
            ))}
          </div>
          <button className="carousel-btn carousel-next" onClick={() => scrollCarousel(1)} aria-label="Next">›</button>
        </div>
        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default SmartCompliance;

