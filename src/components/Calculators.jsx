import React from 'react';

const Calculators = () => {
  const calculators = [
    { icon: '🧮', title: 'GST Calculator', desc: 'Calculate GST quickly and accurately' },
    { icon: '💰', title: 'Income Tax Calculator', desc: 'Estimate your income tax liability' },
    { icon: '📊', title: 'TDS Calculator', desc: 'Calculate TDS with ease' },
    { icon: '🏠', title: 'HRA Calculator', desc: 'Calculate House Rent Allowance' },
    { icon: '💼', title: 'PF Calculator', desc: 'Calculate Provident Fund' },
    { icon: '📈', title: 'EMI Calculator', desc: 'Calculate Equated Monthly Installment' },
  ];

  const stats = [
    { number: '50K+', label: 'Calculations' },
    { number: '99.0%', label: 'Accuracy' },
    { number: '24/7', label: 'Support' },
  ];

  return (
    <section className="calculators">
      <div className="container">
        <h2 className="section-title">EbzFiling's Trusted Calculators Give You Clarity in Seconds</h2>
        <div className="calculator-grid">
          {calculators.map((calc, index) => (
            <div key={index} className="calculator-card">
              <div className="calc-icon">{calc.icon}</div>
              <h3>{calc.title}</h3>
              <p>{calc.desc}</p>
              <button className="btn-primary">Calculate Now</button>
            </div>
          ))}
        </div>
        <div className="calculator-stats">
          {stats.map((stat, index) => (
            <div key={index} className="calc-stat">
              <div className="calc-stat-number">{stat.number}</div>
              <div className="calc-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <button className="btn-primary">View All Calculators</button>
      </div>
    </section>
  );
};

export default Calculators;

