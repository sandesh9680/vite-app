import React from 'react';

const Partnerships = () => {
  const partners = ['Paytm', 'Razorpay', 'Jio', 'Google Pay', 'PhonePe', 'BHIM'];

  return (
    <section className="partnerships">
      <div className="container">
        <h2 className="section-title">Collaborating With Industry Leaders To Deliver Better Services</h2>
        <div className="partner-logos">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">{partner}</div>
          ))}
        </div>
        <button className="btn-primary">View All Partners</button>
      </div>
    </section>
  );
};

export default Partnerships;

