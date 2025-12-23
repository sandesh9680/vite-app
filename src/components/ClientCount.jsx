import React from 'react';

const ClientCount = () => {
  const clients = [
    { name: 'SPRAYTECH', subtitle: 'FOOD PRODUCTS LLP', icon: '🌿' },
    { name: 'DUNCAN & ROSS', subtitle: 'ADVISORY LLP', icon: '🦁' },
    { name: 'Infosec', subtitle: 'K2K', icon: '🛡️' },
    { name: 'acabes', subtitle: 'TECHNOLOGY SOLUTIONS', icon: '💠' },
    { name: 'SHADOWCAST', subtitle: '', icon: '💎' },
    { name: 'PROAXI', subtitle: 'FINANCE AND PROPERTY TECHNOLOGY', icon: '🚩' },
  ];

  return (
    <section className="client-count">
      <div className="container">
        <div className="client-count-header heading_short_long">
         
            <div className="services-label">TRUSTED BY</div>
       
          <h2 className="client-count-title">
            <span className="client-count-number">28000+</span> Entrepreneurs And Business
          </h2>
        </div>
        <div className="client-logos">
          {clients.map((client, index) => (
            <div key={index} className="client-logo-card">
              <div className="client-logo-icon">{client.icon}</div>
              <div className="client-logo-content">
                <div className="client-logo-name">{client.name}</div>
                {client.subtitle && (
                  <div className="client-logo-subtitle">{client.subtitle}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCount;

