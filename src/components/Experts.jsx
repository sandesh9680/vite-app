import React from 'react';

const GavelIcon = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="gavel-icon">
      {/* Sound block (orange rectangle) */}
      <rect x="8" y="32" width="32" height="8" rx="2" fill="#FF6B35"/>
      {/* Gavel handle (blue outline) */}
      <rect x="20" y="6" width="8" height="28" rx="2" stroke="#3B82F6" strokeWidth="2" fill="none"/>
      {/* Gavel head (blue outline) */}
      <rect x="12" y="12" width="24" height="8" rx="2" stroke="#3B82F6" strokeWidth="2" fill="none"/>
    </svg>
  );
};

const Experts = () => {
  const experts = [
    { 
      title: 'Talk to Lawyer', 
      desc: 'Get legal guidance for your business',
      rating: 4.9,
      available: true
    },
    { 
      title: 'Talk to CA Expert', 
      desc: 'Get financial guidance for your business',
      rating: 4.9,
      available: true
    },
    { 
      title: 'Talk to CS Expert', 
      desc: 'Get compliance guidance for your business',
      rating: 4.9,
      available: true
    },
    { 
      title: 'Talk to Accountant', 
      desc: 'Get accounting guidance for your business',
      rating: 4.9,
      available: true
    },
  ];

  return (
    <section className="experts">
      <div className="container">
        <h2 className="section-title">Connect With The Right Expert For Your Business Needs</h2>
        <p className="section-subtitle">Get expert advice from certified professionals</p>
        <div className="expert-cards">
          {experts.map((expert, index) => (
            <div key={index} className="expert-card">
              <div className="expert-card-header">
                <div className="expert-icon">
                  <GavelIcon />
                </div>
                <div className="expert-rating">
                  <span className="rating-number">{expert.rating}</span>
                  <span className="rating-star">★</span>
                </div>
              </div>
              <h3 className="expert-title">{expert.title}</h3>
              <p className="expert-desc">{expert.desc}</p>
              <div className="expert-card-footer">
                <span className="expert-available">Available now</span>
                <button className="expert-connect-btn">
                  Connect
                  <span className="connect-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-primary">View All Experts</button>
      </div>
    </section>
  );
};

export default Experts;

