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
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2017_1799)">
<path d="M41.1487 35.3058L40.7113 35.7432C39.9867 36.4678 39.9867 37.6428 40.7113 38.3674L43.3356 40.9917C45.5061 43.1622 49.0378 43.1622 51.2083 40.9917L61.7053 30.4947C63.8759 28.3241 63.8759 24.7924 61.7053 22.6219L59.0811 19.9977C58.3564 19.273 57.1814 19.273 56.4568 19.9977L56.0194 20.4351L42.8982 7.31379L43.3356 6.8764C44.0602 6.15178 44.0602 4.97677 43.3356 4.25215L40.7113 1.6279C38.5408 -0.542632 35.0091 -0.542632 32.8386 1.6279L22.3415 12.1249C20.171 14.2954 20.171 17.8271 22.3415 19.9977L24.9658 22.6219C25.6904 23.3465 26.8654 23.3465 27.5901 22.6219L28.0274 22.1845L30.6517 24.8088L1.62771 53.8328C-0.542815 56.0033 -0.542815 59.535 1.62771 61.7055C3.79824 63.876 7.32994 63.876 9.50047 61.7055L38.5245 32.6815L41.1487 35.3058ZM57.7689 23.934L59.0809 25.2462C59.8045 25.9697 59.8045 27.1469 59.0809 27.8704L48.5839 38.3674C47.8604 39.0909 46.6832 39.0909 45.9597 38.3674L44.6475 37.0554L57.7689 23.934ZM53.3952 23.0593L43.773 32.6815L30.6517 19.5603L40.2739 9.93805L53.3952 23.0593ZM26.278 18.6855L24.9658 17.3734C24.2423 16.6499 24.2423 15.4727 24.9658 14.7492L35.4628 4.25215C36.1863 3.52864 37.3635 3.52864 38.0871 4.25215L39.3992 5.56421L26.278 18.6855ZM6.87622 59.0813C6.15271 59.8048 4.97547 59.8048 4.25196 59.0813C3.52846 58.3577 3.52846 57.1805 4.25196 56.457L7.66083 53.0481L10.2851 55.6724L6.87622 59.0813ZM12.9093 53.0481L10.2851 50.4239L28.0274 32.6815L30.6517 35.3058L12.9093 53.0481ZM33.2759 32.6815L30.6517 30.0573L33.2759 27.433L35.9002 30.0573L33.2759 32.6815Z" fill="#0018A6"/>
<path d="M57.767 52.2012H40.4493C37.38 52.2012 34.8829 54.6983 34.8829 57.7676V61.4785C34.8829 62.5032 35.7136 63.334 36.7384 63.334H61.4779C62.5027 63.334 63.3334 62.5032 63.3334 61.4785V57.7676C63.3334 54.6983 60.8363 52.2012 57.767 52.2012ZM59.6225 59.623H38.5938V57.7676C38.5938 56.7445 39.4262 55.9121 40.4493 55.9121H57.767C58.7901 55.9121 59.6225 56.7445 59.6225 57.7676V59.623Z" fill="#ED652F"/>
</g>
<defs>
<clipPath id="clip0_2017_1799">
<rect width="63.3333" height="63.3333" fill="white"/>
</clipPath>
</defs>
</svg>

                </div>
                <div className="expert-rating">
                  <span className="rating-number">{expert.rating}</span>
                  <span className="rating-star">★</span>
                </div>
              </div>
              <h3 className="expert-title">{expert.title}</h3>
              <p className="expert-desc">{expert.desc}</p>
              <div className='specialties_se'>
                <h6>Specialties</h6>
                <ul className='nav'>
                  <li>Corporate Law</li>
                  <li>Contract Review</li>
                  <li>Legal Compliance</li>
                </ul>
              </div>
              
              <div className="expert-card-footer">
                <span className="expert-available">Available now</span>
                <button className="expert-connect-btn">
                  Connect
                  <span className="connect-arrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66797 8.61538H11.3191L7.61147 4.57692L8.07757 4L12.668 9L8.07757 14L7.61147 13.4231L11.3191 9.38462H2.66797V8.61538Z" fill="#D73B00"/>
</svg>
</span>
                </button>
              </div>
<div className='book_btn'>
              <button className='btn-primary'>
                Book Call <svg width="22" height="22" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66797 8.61538H11.3191L7.61147 4.57692L8.07757 4L12.668 9L8.07757 14L7.61147 13.4231L11.3191 9.38462H2.66797V8.61538Z" fill="#fff"/>
</svg>
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

