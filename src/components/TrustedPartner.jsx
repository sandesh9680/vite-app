import React from 'react';
import handsImage from '../assets/about.png';

const TrustedPartner = () => {
  // const stats = [
  //   { number: '10+', label: 'Experience' },
  //   { number: '10,000+', label: 'Clients Globally' },
  //   { number: '100+', label: 'Indian Cities' },
  //   { number: '300+', label: 'Services Offered' },
  // ];

  return (
    <section className="trusted-partner">
      <div className="container">
        <div className="trusted-partner-header">
          <div className="trusted-partner-label-wrapper">
            <div className="trusted-partner-label">ABOUT US</div>
            <div className="trusted-partner-label-line"></div>
          </div>
          <h2 className="trusted-partner-title">
            Your <span className="highlight">Trusted Partner</span> In Business Growth
          </h2>
        </div>
        <div className="trusted-content">
          <div className="trusted-text">
            <h3>We Secure Your Success</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <a href="#" className="trusted-read-more">Read More &gt;</a>
            <div className="trusted-buttons">
              <button className="btn-primary trusted-btn-primary">
                Request a Quote
                <span className="btn-arrow">→</span>
              </button>
              <button className="trusted-btn-secondary">
                <span className="phone-icon">📞</span>
                Call Us Now
                <span className="phone-number">+00-000000000</span>
              </button>
            </div>
          </div>
          <div className="trusted-visual">
            <div className="hands-image">
              <img src={handsImage} alt="Team collaboration" className="hands-img" />
            </div>
            {/* <div className="trusted-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-box">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;

