import React from 'react';

const ClientCount = () => {
  const clients = ['Google', 'Amazon', 'Microsoft', 'Flipkart', 'PROAX'];

  return (
    <section className="client-count">
      <div className="container">
        <h2 className="section-title">20000+ Entrepreneurs And Business</h2>
        <div className="client-logos">
          {clients.map((client, index) => (
            <div key={index} className="client-logo">{client}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCount;

