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
                <div className="phone-icon"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.3508 35.1981C29.2879 35.1981 27.7949 34.8137 25.5592 33.5646C22.8404 32.04 20.7375 30.6324 18.0335 27.9355C15.4264 25.33 14.1577 23.6431 12.3821 20.412C10.3761 16.7638 10.7181 14.8515 11.1003 14.0342C11.5555 13.0574 12.2274 12.4731 13.0959 11.8932C13.5892 11.57 14.1113 11.2929 14.6554 11.0655C14.7098 11.0421 14.7605 11.0198 14.8057 10.9997C15.0752 10.8782 15.4836 10.6947 16.0009 10.8908C16.3461 11.0204 16.6543 11.2855 17.1367 11.762C18.1261 12.7377 19.4781 14.9109 19.9769 15.9781C20.3117 16.6974 20.5334 17.1722 20.5339 17.7047C20.5339 18.3282 20.2203 18.809 19.8397 19.3279C19.7683 19.4254 19.6975 19.5185 19.6289 19.6089C19.2146 20.1534 19.1236 20.3107 19.1835 20.5917C19.3049 21.1564 20.2105 22.8373 21.6986 24.3221C23.1867 25.807 24.8192 26.6553 25.386 26.7762C25.6789 26.8388 25.8396 26.7441 26.4015 26.315C26.4821 26.2535 26.5649 26.1898 26.6514 26.1261C27.2319 25.6943 27.6904 25.3888 28.2991 25.3888H28.3024C28.8322 25.3888 29.2858 25.6186 30.0372 25.9976C31.0173 26.492 33.2558 27.8266 34.2375 28.817C34.7151 29.2984 34.9813 29.6055 35.1115 29.9502C35.3075 30.4691 35.1229 30.8758 35.0026 31.1481C34.9824 31.1933 34.9601 31.2428 34.9367 31.2978C34.7075 31.841 34.4288 32.3619 34.1041 32.854C33.5253 33.7198 32.9389 34.3901 31.9598 34.8458C31.4571 35.0837 30.9069 35.2041 30.3508 35.1981Z" fill="#0D0F1D"/>
</svg>
</div>
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
                <div className="phone-icon"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.3508 35.1981C29.2879 35.1981 27.7949 34.8137 25.5592 33.5646C22.8404 32.04 20.7375 30.6324 18.0335 27.9355C15.4264 25.33 14.1577 23.6431 12.3821 20.412C10.3761 16.7638 10.7181 14.8515 11.1003 14.0342C11.5555 13.0574 12.2274 12.4731 13.0959 11.8932C13.5892 11.57 14.1113 11.2929 14.6554 11.0655C14.7098 11.0421 14.7605 11.0198 14.8057 10.9997C15.0752 10.8782 15.4836 10.6947 16.0009 10.8908C16.3461 11.0204 16.6543 11.2855 17.1367 11.762C18.1261 12.7377 19.4781 14.9109 19.9769 15.9781C20.3117 16.6974 20.5334 17.1722 20.5339 17.7047C20.5339 18.3282 20.2203 18.809 19.8397 19.3279C19.7683 19.4254 19.6975 19.5185 19.6289 19.6089C19.2146 20.1534 19.1236 20.3107 19.1835 20.5917C19.3049 21.1564 20.2105 22.8373 21.6986 24.3221C23.1867 25.807 24.8192 26.6553 25.386 26.7762C25.6789 26.8388 25.8396 26.7441 26.4015 26.315C26.4821 26.2535 26.5649 26.1898 26.6514 26.1261C27.2319 25.6943 27.6904 25.3888 28.2991 25.3888H28.3024C28.8322 25.3888 29.2858 25.6186 30.0372 25.9976C31.0173 26.492 33.2558 27.8266 34.2375 28.817C34.7151 29.2984 34.9813 29.6055 35.1115 29.9502C35.3075 30.4691 35.1229 30.8758 35.0026 31.1481C34.9824 31.1933 34.9601 31.2428 34.9367 31.2978C34.7075 31.841 34.4288 32.3619 34.1041 32.854C33.5253 33.7198 32.9389 34.3901 31.9598 34.8458C31.4571 35.0837 30.9069 35.2041 30.3508 35.1981Z" fill="#0D0F1D"/>
</svg>
</div>
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
                <div className="phone-icon"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.3508 35.1981C29.2879 35.1981 27.7949 34.8137 25.5592 33.5646C22.8404 32.04 20.7375 30.6324 18.0335 27.9355C15.4264 25.33 14.1577 23.6431 12.3821 20.412C10.3761 16.7638 10.7181 14.8515 11.1003 14.0342C11.5555 13.0574 12.2274 12.4731 13.0959 11.8932C13.5892 11.57 14.1113 11.2929 14.6554 11.0655C14.7098 11.0421 14.7605 11.0198 14.8057 10.9997C15.0752 10.8782 15.4836 10.6947 16.0009 10.8908C16.3461 11.0204 16.6543 11.2855 17.1367 11.762C18.1261 12.7377 19.4781 14.9109 19.9769 15.9781C20.3117 16.6974 20.5334 17.1722 20.5339 17.7047C20.5339 18.3282 20.2203 18.809 19.8397 19.3279C19.7683 19.4254 19.6975 19.5185 19.6289 19.6089C19.2146 20.1534 19.1236 20.3107 19.1835 20.5917C19.3049 21.1564 20.2105 22.8373 21.6986 24.3221C23.1867 25.807 24.8192 26.6553 25.386 26.7762C25.6789 26.8388 25.8396 26.7441 26.4015 26.315C26.4821 26.2535 26.5649 26.1898 26.6514 26.1261C27.2319 25.6943 27.6904 25.3888 28.2991 25.3888H28.3024C28.8322 25.3888 29.2858 25.6186 30.0372 25.9976C31.0173 26.492 33.2558 27.8266 34.2375 28.817C34.7151 29.2984 34.9813 29.6055 35.1115 29.9502C35.3075 30.4691 35.1229 30.8758 35.0026 31.1481C34.9824 31.1933 34.9601 31.2428 34.9367 31.2978C34.7075 31.841 34.4288 32.3619 34.1041 32.854C33.5253 33.7198 32.9389 34.3901 31.9598 34.8458C31.4571 35.0837 30.9069 35.2041 30.3508 35.1981Z" fill="#0D0F1D"/>
</svg>
</div>
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

