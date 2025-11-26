import React from 'react';

const TrustedPartner = () => {
  const stats = [
    { number: '50+', label: 'Experts' },
    { number: '100+', label: 'Services' },
    { number: '150+', label: 'Countries' },
    { number: '5000+', label: 'Clients' },
  ];

  return (
    <section className="trusted-partner">
      <div className="container">
        <h2 className="section-title">Your Trusted Partner in Business Growth</h2>
        <div className="trusted-content">
          <div className="trusted-text">
            <h3>We Boost Your Success</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
          <div className="trusted-visual">
            <div className="hands-image">
              <div className="hand-stack">🤝</div>
            </div>
            <div className="trusted-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-box">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;

