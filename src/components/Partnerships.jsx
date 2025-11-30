import React from 'react';

const Partnerships = () => {
  const partners = [
    { 
      name: 'Paytm', 
      logo: (
        <div className="partner-logo-img paytm-logo">
          <span className="paytm-pay">Pay</span>
          <span className="paytm-tm">tm</span>
        </div>
      )
    },
    { 
      name: 'GLOBALLINKER', 
      logo: (
        <div className="partner-logo-img globallinker-logo">
          GLOBALLINKER
        </div>
      )
    },
    { 
      name: 'VeriSign', 
      logo: (
        <div className="partner-logo-img verisign-logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 5L30 15L20 25L10 15L20 5Z" fill="#000"/>
            <path d="M15 20L20 25L25 20L20 15L15 20Z" fill="#E60012"/>
          </svg>
          <span className="verisign-text">VeriSign<span className="reg">®</span></span>
        </div>
      )
    },
    { 
      name: 'Intuit QuickBooks', 
      logo: (
        <div className="partner-logo-img quickbooks-logo">
          <div className="qb-circle">qb</div>
          <div className="qb-text">
            <span className="qb-intuit">Intuit</span>
            <span className="qb-quickbooks">QuickBooks.</span>
          </div>
        </div>
      )
    },
    { 
      name: 'ZOHO One', 
      logo: (
        <div className="partner-logo-img zoho-logo">
          <div className="zoho-blocks">
            <span className="zoho-z">Z</span>
            <span className="zoho-o1">O</span>
            <span className="zoho-h">H</span>
            <span className="zoho-o2">O</span>
          </div>
          <span className="zoho-one">One</span>
        </div>
      )
    },
    { 
      name: 'Payoneer', 
      logo: (
        <div className="partner-logo-img payoneer-logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="url(#gradient)" strokeWidth="2" fill="none"/>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B35"/>
                <stop offset="25%" stopColor="#FFD700"/>
                <stop offset="50%" stopColor="#10B981"/>
                <stop offset="100%" stopColor="#3B82F6"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="payoneer-text">Payoneer</span>
        </div>
      )
    },
  ];

  return (
    <section className="partnerships">
      <div className="container">
        <div className="partnerships-header">
          <div className="partnerships-label-wrapper">
            <div className="partnerships-label">PARTNER SECTION</div>
            <div className="partnerships-label-line"></div>
          </div>
          <h2 className="partnerships-title">Collaborating With Industry Leaders To Deliver Better Services</h2>
        </div>
        <div className="partner-logos">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              {partner.logo}
            </div>
          ))}
        </div>
        <div className="partnerships-cta">
          <p className="partnerships-question">Looking for the Perfect Partner to Power Your Growth?</p>
          <button className="btn-primary partnerships-btn">
            Explore Partnerships
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;

