import React from 'react';

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Services: ['Company Registration', 'GST Registration', 'Trademark', 'Income Tax'],
    Resources: ['Calculators', 'Guides', 'Templates', 'Webinars'],
    Support: ['Help Center', 'Contact Us', 'FAQs', 'Live Chat'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Disclaimer'],
  };

  const socialLinks = ['📘', '🐦', '💼', '📷', '▶️'];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-e">E</span><span className="logo-b">B</span><span className="logo-text">Filing</span>
          </div>
          <div className="footer-columns">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-column">
                <h4>{category}</h4>
                <ul>
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-social">
          {socialLinks.map((icon, index) => (
            <a key={index} href="#" aria-label={`Social ${index + 1}`}>
              {icon}
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 EbzFiling. All rights reserved.</p>
          <p className="disclaimer">This website provides general information only and does not constitute legal advice.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

