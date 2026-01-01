import React, { useState, useRef } from 'react';
import '../components/ServicesPage.css';

const ServiceForHome = () => {
  const [activeTab, setActiveTab] = useState(0);
  const carouselRef = useRef(null);

  const tabs = ['Registration', 'Registration', 'Registration', 'Registration', 'Registration'];

  const serviceCards = [
    {
      icon: '👥',
      title: 'Private Limited',
      description: 'Donec fringilla in elementum placerat orci viverra at, in amet, urna. scelerisque faucibus adipiscing viverra placerat ex.',
      features: [
        { icon: '✓', text: 'Digital KYC' },
        { icon: '✓', text: 'Document Preparation' },
        { icon: '✓', text: 'Government Filing' },
      ],
      trustText: '600+ Businesses Trust This Service',
      trustIcon: '👥',
    },
    {
      icon: '👥',
      title: 'Private Limited',
      description: 'Donec fringilla in elementum placerat orci viverra at, in amet, urna. scelerisque faucibus adipiscing viverra placerat ex.',
      features: [
        { icon: '✓', text: 'Digital KYC' },
        { icon: '✓', text: 'Document Preparation' },
        { icon: '✓', text: 'Government Filing' },
      ],
      trustText: '600+ Businesses Trust This Service',
      trustIcon: '👥',
    },
    {
      icon: '👥',
      title: 'Private Limited',
      description: 'Donec fringilla in elementum placerat orci viverra at, in amet, urna. scelerisque faucibus adipiscing viverra placerat ex.',
      features: [
        { icon: '✓', text: 'Digital KYC' },
        { icon: '✓', text: 'Document Preparation' },
        { icon: '✓', text: 'Government Filing' },
      ],
      trustText: '600+ Businesses Trust This Service',
      trustIcon: '👥',
    },
  ];

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const firstCard = carouselRef.current.querySelector('.service-card-detailed');
      const cardWidth =
        (firstCard && firstCard.offsetWidth + 30) || // card width + typical gap
        380; // sensible fallback

      carouselRef.current.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="services-page">
      <div className="container">
        {/* Services Header */}
        <div className="services-header heading_short_long">
          <div className="short_title">OUR SERVICES</div>
          <h1 className="long_title">
            <span className="highlight">Smart</span> Compliance & <span className="highlight">Legal</span> Solutions For Businesses
          </h1>
        </div>

        {/* Navigation Tabs */}
        <div className="services-tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`service-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Service Cards Carousel */}
        <div className="services-carousel-wrapper">
          <button
            className="carousel-nav-btn carousel-prev"
            onClick={() => scrollCarousel(-1)}
            aria-label="Previous"
          >
            <svg width="19" height="34" viewBox="0 0 19 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6667 2L2 16.6667L16.6667 31.3333" stroke="#0D0F1D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
          
          <div className="services-cards-container" ref={carouselRef}>
            {serviceCards.map((card, index) => (
              <div key={index} className="service-card-detailed">
                <div className="service-card-icon-wrapper">
                  {/* <div className="service-card-icon">{card.icon}</div> */}
                  <div className="service-card-icon"><svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.6011 18.4087C38.063 18.4119 39.5061 18.7421 40.8238 19.3755C42.1478 20.0119 43.3114 20.9384 44.2291 22.0854C45.1467 23.2325 45.7953 24.5711 46.1255 26.0024C46.4558 27.4339 46.4597 28.9217 46.1373 30.355C45.8149 31.7883 45.1737 33.1305 44.2623 34.2827C43.3508 35.4349 42.1922 36.3676 40.8716 37.0112C39.5511 37.6549 38.1024 37.9934 36.6334 38.0015C35.1728 38.0095 33.7291 37.6907 32.4078 37.0688C30.4381 36.0858 28.8545 34.4713 27.9097 32.4829C26.9644 30.4931 26.7134 28.2435 27.1968 26.0942C27.6803 23.945 28.8703 22.0197 30.5767 20.6265C32.2809 19.2351 34.4018 18.4545 36.6011 18.4087Z" stroke="#0018A6" stroke-width="3"/>
<path d="M17.25 50.6934C17.248 48.9846 17.7846 47.3182 18.7832 45.9316C19.7196 44.6315 21.0179 43.6387 22.5127 43.0752L22.8135 42.9688L29.1719 40.8545C31.4163 42.1711 33.9739 42.8711 36.585 42.8711C37.2872 42.8711 37.9063 42.8709 38.4824 42.8281C38.4569 42.932 38.4348 43.0367 38.417 43.1426C37.4971 47.8633 38.0288 52.7313 39.9102 57.1162H19.1748C18.6647 57.1152 18.1752 56.9115 17.8145 56.5508C17.4989 56.2351 17.3042 55.8211 17.2598 55.3809L17.25 55.1914V50.6934Z" stroke="#0018A6" stroke-width="3"/>
<path d="M66.4091 44.2474C67.1968 48.6217 66.4499 53.1376 64.287 57.0277C62.1667 60.8413 58.8171 63.8159 54.7939 65.476C50.7868 63.8212 47.4479 60.8625 45.3251 57.0697C43.1436 53.1717 42.3844 48.639 43.1718 44.2465C46.4385 42.9353 51.5104 40.9115 54.7929 39.6L66.4091 44.2474Z" stroke="#FF6F3B" stroke-width="3"/>
</svg>
</div>
                </div>
                <div className="service-card-content">
                  <h3 className="service-card-title">{card.title}</h3>
                  <p className="service-card-description">{card.description}</p>
                  
                  <div className="service-features-list">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="service-feature-item">
                        <span className="feature-check">{feature.icon}</span>
                        <span className="feature-text">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-trust-badge">
                    <span className="trust-icon"><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.54301 3.77922C3.54301 3.09013 3.81675 2.42926 4.30401 1.942C4.79127 1.45474 5.45214 1.181 6.14122 1.18101C6.83031 1.181 7.49118 1.45474 7.97844 1.942C8.4657 2.42926 8.73944 3.09013 8.73944 3.77922C8.73944 4.4683 8.4657 5.12917 7.97844 5.61643C7.49118 6.10369 6.83031 6.37743 6.14122 6.37743C5.45214 6.37743 4.79127 6.10369 4.30401 5.61643C3.81675 5.12917 3.54301 4.4683 3.54301 3.77922ZM6.14122 0C5.13891 0 4.17766 0.398166 3.46892 1.10691C2.76018 1.81565 2.36201 2.77691 2.36201 3.77922C2.36201 4.78153 2.76018 5.74278 3.46892 6.45153C4.17766 7.16027 5.13891 7.55843 6.14122 7.55843C7.14354 7.55843 8.10479 7.16027 8.81353 6.45153C9.52227 5.74278 9.92044 4.78153 9.92044 3.77922C9.92044 2.77691 9.52227 1.81565 8.81353 1.10691C8.10479 0.398166 7.14354 0 6.14122 0ZM12.9911 4.72402C12.9911 4.28551 13.1652 3.86496 13.4753 3.55488C13.7854 3.24481 14.2059 3.07061 14.6445 3.07061C15.083 3.07061 15.5035 3.24481 15.8136 3.55488C16.1237 3.86496 16.2979 4.28551 16.2979 4.72402C16.2979 5.16253 16.1237 5.58308 15.8136 5.89316C15.5035 6.20323 15.083 6.37743 14.6445 6.37743C14.2059 6.37743 13.7854 6.20323 13.4753 5.89316C13.1652 5.58308 12.9911 5.16253 12.9911 4.72402ZM14.6445 1.88961C13.8927 1.88961 13.1718 2.18823 12.6402 2.71979C12.1087 3.25134 11.81 3.97229 11.81 4.72402C11.81 5.47575 12.1087 6.1967 12.6402 6.72825C13.1718 7.25981 13.8927 7.55843 14.6445 7.55843C15.3962 7.55843 16.1171 7.25981 16.6487 6.72825C17.1802 6.1967 17.4789 5.47575 17.4789 4.72402C17.4789 3.97229 17.1802 3.25134 16.6487 2.71979C16.1171 2.18823 15.3962 1.88961 14.6445 1.88961ZM14.6445 14.6445C13.6165 14.6445 12.7917 14.4782 12.1332 14.2089L12.221 14.0955C12.4544 13.788 12.6334 13.48 12.7704 13.188C13.2523 13.3557 13.8645 13.4635 14.644 13.4635C16.664 13.4635 17.5601 12.7393 17.9806 12.1261C18.22 11.7738 18.37 11.3684 18.4175 10.9451C18.4202 10.9174 18.4221 10.8897 18.4232 10.8619V10.7471C18.4232 10.4212 18.1587 10.1566 17.8327 10.1566H13.1625C13.0661 9.71984 12.8623 9.31395 12.5697 8.97564H17.8332C18.303 8.97564 18.7536 9.16228 19.0858 9.4945C19.418 9.82672 19.6047 10.2773 19.6047 10.7471V10.8874L19.6033 10.9281C19.6017 10.9615 19.5985 11.0054 19.5938 11.0599C19.5268 11.6815 19.3076 12.2769 18.9556 12.7936C18.2824 13.7743 16.9937 14.6445 14.6435 14.6445M1.77151 8.97564C1.30167 8.97564 0.851084 9.16228 0.518862 9.4945C0.18664 9.82672 0 10.2773 0 10.7471V11.3627L0.00188958 11.4085C0.00377919 11.4463 0.00787335 11.4964 0.014172 11.5587C0.0278717 11.6825 0.0538538 11.8526 0.104873 12.0548C0.240428 12.5872 0.481378 13.0871 0.813476 13.5249C1.64349 14.619 3.22462 15.5893 6.14122 15.5893C9.05783 15.5893 10.6394 14.619 11.4685 13.5249C11.8008 13.087 12.0419 12.587 12.1776 12.0543C12.2286 11.8526 12.2546 11.6825 12.2683 11.5583C12.2753 11.4932 12.28 11.428 12.2824 11.3627V10.7471C12.2824 10.5145 12.2366 10.2841 12.1476 10.0692C12.0586 9.85429 11.9281 9.659 11.7636 9.4945C11.5991 9.33 11.4038 9.19951 11.1889 9.11049C10.9739 9.02146 10.7436 8.97564 10.5109 8.97564H1.77151ZM1.18148 11.349L1.181 11.3339V10.7471C1.181 10.4212 1.44555 10.1566 1.77151 10.1566H10.5109C10.8369 10.1566 11.1014 10.4212 11.1014 10.7471V11.3339L11.101 11.349C11.0907 11.4893 11.068 11.6284 11.0329 11.7647C10.9361 12.1439 10.7642 12.4999 10.5275 12.8115C9.9691 13.5485 8.77487 14.4083 6.14122 14.4083C3.50758 14.4083 2.31335 13.5485 1.75497 12.8115C1.51829 12.5 1.34641 12.1442 1.2495 11.7652C1.21446 11.6287 1.1917 11.4895 1.18148 11.349Z" fill="#34B879"/>
</svg>
</span>
                    <span className="trust-text">{card.trustText}</span>
                  </div>

                  <button className="service-get-started-btn">
                    Get Started
                    <span className="btn-arrow">→</span>
                  </button>
                  
                  <button className="service-add-to-cart-btn">
                    <span className="cart-icon"><svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.839 31.6981C15.2478 31.6981 16.3899 30.6335 16.3899 29.3201C16.3899 28.0068 15.2478 26.9421 13.839 26.9421C12.4301 26.9421 11.288 28.0068 11.288 29.3201C11.288 30.6335 12.4301 31.6981 13.839 31.6981Z" stroke="#FE7F10" stroke-width="2.0786" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.1463 31.6981C30.5552 31.6981 31.6973 30.6335 31.6973 29.3201C31.6973 28.0068 30.5552 26.9421 29.1463 26.9421C27.7375 26.9421 26.5953 28.0068 26.5953 29.3201C26.5953 30.6335 27.7375 31.6981 29.1463 31.6981Z" stroke="#FE7F10" stroke-width="2.0786" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.74048 22.4216V24.5618C8.74048 25.8751 9.88262 26.9398 11.2915 26.9398H29.1484" stroke="#0018A6" stroke-width="2.0786" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.73931 10.5334H29.1472C30.5561 10.5334 31.6982 11.5981 31.6982 12.9114C31.6982 13.1744 31.6524 13.4274 31.5679 13.6639L29.0169 20.7978C28.6791 21.7424 27.723 22.4233 26.5962 22.4233H8.73931V6.01519C8.73931 4.70189 7.59717 3.63721 6.18832 3.63721H3.63733" stroke="#0018A6" stroke-width="2.0786" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.8416 15.2908V17.6688" stroke="#FE7F10" stroke-width="2.0786" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9447 15.2908V17.6688" stroke="#FE7F10" stroke-width="2.0786" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0499 15.2908V17.6688" stroke="#FE7F10" stroke-width="2.0786" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-nav-btn carousel-next"
            onClick={() => scrollCarousel(1)}
            aria-label="Next"
          >
            <svg width="19" height="34" viewBox="0 0 19 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L16.6667 16.6667L2 31.3333" stroke="#0D0F1D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
        </div>

        {/* Pagination Dots */}
        <div className="services-pagination">
          <span className="pagination-dot active"></span>
          <span className="pagination-dot"></span>
          <span className="pagination-dot"></span>
          <span className="pagination-dot"></span>
        </div>
      </div>
    </section>
  );
};

export default ServiceForHome;

