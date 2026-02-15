import React from 'react';
import paytmLogo from '../assets/partner1.png';
import globallinkerLogo from '../assets/partner2.png';
import verisignLogo from '../assets/partner3.png';
import quickbooksLogo from '../assets/partner4.png';
import zohoLogo from '../assets/partner5.png';
import payoneerLogo from '../assets/partner6.png';

const Partnerships = ({ pageData }) => {
  const partners = [
    { logo: paytmLogo },
    { logo: globallinkerLogo },
    { logo: verisignLogo },
    { logo: quickbooksLogo },
    { logo: zohoLogo },
    { logo: payoneerLogo },
  ];


  return (
    <section className="partnerships">
      <div>
        <div className="partnerships-header heading_short_long">

          <div className="short_title">{pageData?.section_title || "PARTNER SECTION"}</div>

          <h2 className="long_title">{pageData?.section_heading || "Collaborating With Industry Leaders To Deliver Better Services"}</h2>
        </div>
        <div className="partner-marquee">
          <div className="partner-marquee-track">
            {pageData?.trusted_partners?.length > 0 && [...pageData?.trusted_partners, ...pageData?.trusted_partners, ...pageData?.trusted_partners].map((partner, index) => (
              <div key={index} className="partner-logo">
                <img
                  src={partner.trusted_partner_logo_media}
                  alt="no image"
                  className="h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="partnerships-cta">
          <p className="partnerships-question !font-bold !text-gray-900">Looking for the Perfect Partner to Power Your Growth?</p>
          <button className="btn-primary trusted-btn-primary text-center">
            Explore Partnerships
            <span className="btn-arrow border_left"><svg width="20" height="18" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.6824 11.7593L1.19209e-06 11.7593" stroke="#FFFDFC" stroke-width="2"></path><path d="M12.8412 0.759277L25.6824 11.7593L12.8412 22.7593" stroke="#FFFDFC" stroke-width="2"></path></svg></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;

