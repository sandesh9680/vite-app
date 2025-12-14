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
                  <span className="popular-icon"><svg width="14" height="14" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.34245 14.2479C6.61652 14.4414 6.94316 14.5443 7.27763 14.5432V14.5387C7.59344 14.5395 7.90252 14.4475 8.16644 14.2741C8.43037 14.1007 8.63749 13.8535 8.76206 13.5633L9.44778 11.4781C9.60607 11.0057 9.87213 10.5766 10.2249 10.2248C10.5777 9.87302 11.0075 9.60815 11.4803 9.45117L13.4693 8.80459C13.7902 8.69259 14.0676 8.48207 14.2618 8.20307C14.4559 7.92407 14.557 7.59085 14.5506 7.25099C14.5441 6.91113 14.4305 6.58199 14.2258 6.31056C14.0212 6.03913 13.7361 5.83928 13.4111 5.73954L11.4479 5.10192C10.9731 4.94366 10.5417 4.67698 10.188 4.323C9.83419 3.96903 9.56774 3.53751 9.40975 3.06265L8.76318 1.07483C8.65042 0.75823 8.44184 0.484613 8.16643 0.292001C7.89101 0.0993885 7.56244 -0.00265382 7.22637 5.24706e-05C6.8903 0.00275876 6.56341 0.110079 6.29114 0.307102C6.01886 0.504125 5.81472 0.781065 5.70707 1.09944L5.05491 3.10403C4.89742 3.56509 4.63742 3.98442 4.29447 4.33047C3.95152 4.67653 3.53454 4.94029 3.07492 5.10192L1.08711 5.73954C0.768068 5.84993 0.491631 6.05752 0.296648 6.33312C0.101664 6.60872 -0.00206718 6.93849 3.12199e-05 7.27609C0.00212962 7.61368 0.109952 7.94214 0.308346 8.21529C0.506741 8.48845 0.785737 8.69258 1.10613 8.799L3.06821 9.4355C3.54293 9.59487 3.97413 9.86233 4.32783 10.2168C4.68152 10.5713 4.94804 11.0031 5.10636 11.4781L5.75293 13.4637C5.86368 13.7803 6.06951 14.0543 6.34245 14.2479ZM5.92409 9.49255C5.79949 9.32942 5.66381 9.17506 5.51802 9.03056H5.52138C4.98103 8.4902 4.32229 8.08309 3.59733 7.84145L1.80751 7.27318L3.60963 6.68702C4.3228 6.44009 4.96963 6.03248 5.50012 5.49567C6.02825 4.95542 6.42647 4.30204 6.66462 3.58505L7.24072 1.81537L7.81793 3.59064C8.05926 4.31414 8.46616 4.97131 9.00624 5.50984C9.54632 6.04836 10.2047 6.45337 10.9289 6.69261L12.741 7.27654L10.9624 7.85264C10.2394 8.09315 9.5825 8.49896 9.04382 9.03783C8.50515 9.5767 8.09957 10.2338 7.85932 10.9568L7.28323 12.7265L6.70713 10.9535C6.53058 10.4257 6.26581 9.93177 5.92409 9.49255ZM14.919 19.8925C14.7056 19.7404 14.5451 19.5253 14.4604 19.2772L14.0935 18.1519C14.0223 17.9377 13.9023 17.743 13.7429 17.5832C13.5835 17.4234 13.3891 17.3029 13.1751 17.2313L12.0665 16.8699C11.8129 16.784 11.5925 16.6212 11.4358 16.404C11.2792 16.1868 11.1943 15.9262 11.1929 15.6585C11.1925 15.3923 11.2755 15.1326 11.4302 14.916C11.5849 14.6993 11.8035 14.5365 12.0553 14.4503L13.1807 14.0857C13.39 14.0113 13.5795 13.8899 13.7346 13.7309C13.8897 13.5719 14.0064 13.3795 14.0756 13.1684L14.438 12.0598C14.5233 11.809 14.6844 11.5908 14.899 11.4355C15.1136 11.2802 15.3712 11.1954 15.6361 11.1928C15.9011 11.1902 16.1602 11.27 16.3779 11.4211C16.5955 11.5722 16.7608 11.7872 16.8509 12.0363L17.2189 13.1706C17.291 13.3833 17.4113 13.5763 17.5704 13.7347C17.7296 13.893 17.9232 14.0124 18.1362 14.0834L19.2459 14.4447C19.5017 14.5248 19.7258 14.6832 19.8865 14.8978C20.0472 15.1123 20.1363 15.372 20.1411 15.6399C20.1459 15.9079 20.0662 16.1706 19.9134 16.3908C19.7606 16.611 19.5423 16.7774 19.2895 16.8666L18.1552 17.2346C17.9419 17.3066 17.7483 17.4271 17.5895 17.5867C17.4307 17.7463 17.3111 17.9405 17.2402 18.1541L16.88 19.2605C16.7927 19.5178 16.6272 19.7415 16.4046 19.8981C16.1874 20.0525 15.9273 20.1349 15.6609 20.1339C15.3945 20.1329 15.135 20.0485 14.919 19.8925ZM13.7668 15.6607C14.2059 15.818 14.6042 16.0714 14.9329 16.4023C15.2615 16.7333 15.512 17.1334 15.6663 17.5736C15.8221 17.1353 16.0737 16.7372 16.4026 16.4082C16.7316 16.0793 17.1296 15.8278 17.5679 15.6719C17.1254 15.5169 16.7231 15.2649 16.3906 14.9343C16.058 14.6037 15.8037 14.2029 15.6461 13.7613C15.4922 14.1973 15.2437 14.5939 14.9184 14.9225C14.5931 15.2511 14.1991 15.5036 13.7646 15.6618" fill="#FFFDFC"/>
</svg>
</span>
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

