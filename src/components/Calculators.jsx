import React from 'react';

const CalculatorIcon = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="calculator-svg-icon">
      <defs>
        <linearGradient id="calculatorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#6B46C1" />
        </linearGradient>
      </defs>
      {/* Calculator body */}
      <rect x="8" y="6" width="32" height="36" rx="3" stroke="url(#calculatorGradient)" strokeWidth="2" fill="none"/>
      {/* Screen */}
      <rect x="12" y="10" width="24" height="12" rx="2" fill="url(#calculatorGradient)" opacity="0.2"/>
      <rect x="12" y="10" width="24" height="12" rx="2" stroke="url(#calculatorGradient)" strokeWidth="1.5" fill="none"/>
      {/* Buttons grid - 3x3 */}
      <circle cx="16" cy="28" r="3" fill="url(#calculatorGradient)"/>
      <circle cx="24" cy="28" r="3" fill="url(#calculatorGradient)"/>
      <circle cx="32" cy="28" r="3" fill="url(#calculatorGradient)"/>
      <circle cx="16" cy="34" r="3" fill="url(#calculatorGradient)"/>
      <circle cx="24" cy="34" r="3" fill="url(#calculatorGradient)"/>
      <circle cx="32" cy="34" r="3" fill="url(#calculatorGradient)"/>
      <circle cx="16" cy="40" r="3" fill="url(#calculatorGradient)"/>
      <circle cx="24" cy="40" r="3" fill="url(#calculatorGradient)"/>
      <circle cx="32" cy="40" r="3" fill="url(#calculatorGradient)"/>
    </svg>
  );
};

const Calculators = () => {
  const calculators = [
    { 
      title: 'GST Calculator', 
      desc: 'Quickly calculate your GST payable on transactions.',
      features: ['Multiple GST Rates', 'Inclusive/Exclusive', 'Instant Results'],
      isPopular: true,
      variant: 'white'
    },
    { 
      title: 'GST Calculator', 
      desc: 'Quickly calculate your GST payable on transactions.',
      features: ['Multiple GST Rates', 'Inclusive/Exclusive', 'Instant Results'],
      isPopular: true,
      variant: 'blue'
    },
    { 
      title: 'GST Calculator', 
      desc: 'Quickly calculate your GST payable on transactions.',
      features: ['Multiple GST Rates', 'Inclusive/Exclusive', 'Instant Results'],
      isPopular: false,
      variant: 'white'
    },
    { 
      title: 'GST Calculator', 
      desc: 'Quickly calculate your GST payable on transactions.',
      features: ['Multiple GST Rates', 'Inclusive/Exclusive', 'Instant Results'],
      isPopular: false,
      variant: 'white'
    },
    { 
      title: 'GST Calculator', 
      desc: 'Quickly calculate your GST payable on transactions.',
      features: ['Multiple GST Rates', 'Inclusive/Exclusive', 'Instant Results'],
      isPopular: true,
      variant: 'white'
    },
    { 
      title: 'GST Calculator', 
      desc: 'Quickly calculate your GST payable on transactions.',
      features: ['Multiple GST Rates', 'Inclusive/Exclusive', 'Instant Results'],
      isPopular: false,
      variant: 'blue'
    },        
  ];

  return (
    <section className="calculators">
      <div className="container">
        <h2 className="section-title">EbzFiling's Trusted Calculators Give You Clarity in Seconds</h2>
        <div className="calculator-grid">
          {calculators.map((calc, index) => (
            <div key={index} className={`calculator-card calculator-card-${calc.variant}`}>
              {calc.isPopular && (
                <div className="calculator-popular-tag">
                  <span className="popular-icon">⚡</span>
                  Popular
                </div>
              )}
              <div className="calc-icon">
                <CalculatorIcon />
              </div>
              <h3 className="calculator-title">{calc.title}</h3>
              <p className="calculator-desc">{calc.desc}</p>
              <ul className="calculator-features">
                {calc.features.map((feature, idx) => (
                  <li key={idx} className={`calculator-feature calculator-feature-${calc.variant}`}>
                    {feature}
                  </li>
                ))}
              </ul>
              {calc.variant === 'blue' ? (
                <button className="calculator-btn calculator-btn-solid">
                  Use Calculator <span className="btn-arrow">→</span>
                </button>
              ) : (
                <a href="#" className="calculator-btn calculator-btn-link">
                  Use Calculator <span className="btn-arrow">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculators;

