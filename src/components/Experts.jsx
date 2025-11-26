import React from 'react';

const Experts = () => {
  const experts = [
    { icon: '👔', title: 'CA Expert', desc: 'Chartered Accountants for financial guidance' },
    { icon: '📜', title: 'CS Expert', desc: 'Company Secretaries for compliance' },
    { icon: '⚖️', title: 'Lawyer Expert', desc: 'Legal experts for business law' },
    { icon: '📊', title: 'Accountant Expert', desc: 'Accounting professionals for bookkeeping' },
  ];

  return (
    <section className="experts">
      <div className="container">
        <h2 className="section-title">Connect With The Right Expert For Your Business Needs</h2>
        <p className="section-subtitle">Get expert advice from certified professionals</p>
        <div className="expert-cards">
          {experts.map((expert, index) => (
            <div key={index} className="expert-card">
              <div className="expert-icon">{expert.icon}</div>
              <h3>{expert.title}</h3>
              <p>{expert.desc}</p>
              <button className="btn-primary">Connect Now</button>
            </div>
          ))}
        </div>
        <button className="btn-primary">View All Experts</button>
      </div>
    </section>
  );
};

export default Experts;

