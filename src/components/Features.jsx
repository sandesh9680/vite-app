import React from 'react';

const Features = () => {
  const features = [
    { number: '01', icon: '🏢', title: 'Company Registration' },
    { number: '02', icon: '📋', title: 'GST Registration' },
    { number: '03', icon: '™️', title: 'Trademark Registration' },
    { number: '04', icon: '💰', title: 'Income Tax Filing' },
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-content">
          <div className="features-text">
            <h2 className="section-title">Faucibus Adipiscing Viverrs Placerat Ex</h2>
            <p className="features-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-number">{feature.number}</div>
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

