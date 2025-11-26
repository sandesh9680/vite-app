import React from 'react';
import '../components/AboutUsPage.css';
import objectsImage from '../assets/OBJECTS.jpg';

const AboutUs = () => {
  const stats = [
    { number: '10+', label: 'Experience' },
    { number: '10,000+', label: 'Clients Globally' },
    { number: '100+', label: 'Indian Cities' },
    { number: '300+', label: 'Services Offered' },
  ];

  return (
    <section className="about-us-page">
      <div className="container">
        <div className="about-us-content py-5">
          {/* Left Column */}
          <div className="about-us-text">
            <h1 className="about-us-title">We Secure Your Success</h1>
            <p className="about-us-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="about-us-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
            
            {/* Call to Action Section */}
            <div className="about-us-cta">
              <div className="cta-phone">
                <div className="phone-icon">📞</div>
                <div className="phone-info">
                  <div className="phone-label">Call Us Now</div>
                  <div className="phone-number">+00-000000000</div>
                </div>
              </div>
              <button className="cta-button">
                Request a Quote
                <span className="cta-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="about-us-visual">
            {/* Illustration/Image */}
            <div className="about-us-image">
              <img src={objectsImage} alt="Business team illustration" className="about-us-main-image" />
            </div>

            {/* Statistics Grid */}
            <div className="about-us-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card-about">
                  <div className="stat-icon-about">📄</div>
                  <div className="stat-content-about">
                    <div className="stat-number-about">{stat.number}</div>
                    <div className="stat-label-about">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-us-content mt-5 py-5">
          {/* Left Column */}
          <div className="about-us-text">
            <h1 className="about-us-title">We Secure Your Success</h1>
            <p className="about-us-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="about-us-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
            
            {/* Call to Action Section */}
            <div className="about-us-cta">
              <div className="cta-phone">
                <div className="phone-icon">📞</div>
                <div className="phone-info">
                  <div className="phone-label">Call Us Now</div>
                  <div className="phone-number">+00-000000000</div>
                </div>
              </div>
              <button className="cta-button">
                Request a Quote
                <span className="cta-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="about-us-visual">
            {/* Illustration/Image */}
            <div className="about-us-image">
              <img src={objectsImage} alt="Business team illustration" className="about-us-main-image" />
            </div>

            {/* Statistics Grid */}
            <div className="about-us-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card-about">
                  <div className="stat-icon-about">📄</div>
                  <div className="stat-content-about">
                    <div className="stat-number-about">{stat.number}</div>
                    <div className="stat-label-about">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-us-content mt-5 py-5">
          {/* Left Column */}
          <div className="about-us-text">
            <h1 className="about-us-title">We Secure Your Success</h1>
            <p className="about-us-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="about-us-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
            
            {/* Call to Action Section */}
            <div className="about-us-cta">
              <div className="cta-phone">
                <div className="phone-icon">📞</div>
                <div className="phone-info">
                  <div className="phone-label">Call Us Now</div>
                  <div className="phone-number">+00-000000000</div>
                </div>
              </div>
              <button className="cta-button">
                Request a Quote
                <span className="cta-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="about-us-visual">
            {/* Illustration/Image */}
            <div className="about-us-image">
              <img src={objectsImage} alt="Business team illustration" className="about-us-main-image" />
            </div>

            {/* Statistics Grid */}
            <div className="about-us-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card-about">
                  <div className="stat-icon-about">📄</div>
                  <div className="stat-content-about">
                    <div className="stat-number-about">{stat.number}</div>
                    <div className="stat-label-about">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

