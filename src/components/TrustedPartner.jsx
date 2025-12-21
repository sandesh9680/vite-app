import React from 'react';
import handsImage from '../assets/about.png';

const TrustedPartner = () => {
  // const stats = [
  //   { number: '10+', label: 'Experience' },
  //   { number: '10,000+', label: 'Clients Globally' },
  //   { number: '100+', label: 'Indian Cities' },
  //   { number: '300+', label: 'Services Offered' },
  // ];

  return (
    <section className="trusted-partner">
      <div className="container">
        <div className="trusted-partner-header">
          <div className="trusted-partner-label-wrapper">
            <div className="trusted-partner-label">ABOUT US</div>
            <div className="trusted-partner-label-line"></div>
          </div>
          <h2 className="trusted-partner-title">
            Your <span className="highlight">Trusted Partner</span> In Business Growth
          </h2>
        </div>
        <div className="trusted-content">
          <div className="trusted-text">
            <h3>We Secure Your Success</h3>
            <p>
              faucibus Donec quis nulla, amet, varius turpis tincidunt ex efficitur. non, tincidunt tincidunt nec non, elit orci consectetur non vel adipiscing commodo quis nibh consectetur volutpat ac ex sed Lorem quis quam sapien Vestibulum Cras Ut est. scelerisque dui Cras consectetur non non, commodo est. Nullam scelerisque id cursus tortor. sit Lorem placerat placerat sit urna. hendrerit vitae ex malesuada eget non sollicitudin. venenatis nisl. sit leo. ullamcorper elementum non Nullam scelerisque id cursus tortor. sit Lorem placerat placerat sit urna. hendrerit vitae ex malesuada eget non sollicitudin. venenatis nisl. sit leo. ullamcorper elementum non.
              sit Lorem placerat placerat sit urna. hendrerit vitae ex malesuada eget non sollicitudin. venenatis nisl. sit leo. ullamcorper elementum non.
            </p>
            <a href="#" className="trusted-read-more trusted_grid">Read More <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.68059 5L7.15833 6.41L12.103 11L7.15833 15.59L8.68059 17L15.1583 11L8.68059 5Z" fill="#FF6F3B"/>
</svg>
</a>
            <div className="trusted-buttons">
              <button className="btn-primary trusted-btn-primary">
                Request a Quote
                <span className="btn-arrow border_left"><svg width="20" height="18" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.6824 11.7593L1.19209e-06 11.7593" stroke="#FFFDFC" stroke-width="2"/>
<path d="M12.8412 0.759277L25.6824 11.7593L12.8412 22.7593" stroke="#FFFDFC" stroke-width="2"/>
</svg>
</span>
              </button>
              <button className="trusted-btn-secondary">
                <span className="phone-icon"><svg width="36" height="36" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.3508 35.1981C29.2879 35.1981 27.7949 34.8137 25.5592 33.5646C22.8404 32.04 20.7375 30.6324 18.0335 27.9355C15.4264 25.33 14.1577 23.6431 12.3821 20.412C10.3761 16.7638 10.7181 14.8515 11.1003 14.0342C11.5555 13.0574 12.2274 12.4731 13.0959 11.8932C13.5892 11.57 14.1113 11.2929 14.6554 11.0655C14.7098 11.0421 14.7605 11.0198 14.8057 10.9997C15.0752 10.8782 15.4836 10.6947 16.0009 10.8908C16.3461 11.0204 16.6543 11.2855 17.1367 11.762C18.1261 12.7377 19.4781 14.9109 19.9769 15.9781C20.3117 16.6974 20.5334 17.1722 20.5339 17.7047C20.5339 18.3282 20.2203 18.809 19.8397 19.3279C19.7683 19.4254 19.6975 19.5185 19.6289 19.6089C19.2146 20.1534 19.1236 20.3107 19.1835 20.5917C19.3049 21.1564 20.2105 22.8373 21.6986 24.3221C23.1867 25.807 24.8192 26.6553 25.386 26.7762C25.6789 26.8388 25.8396 26.7441 26.4015 26.315C26.4821 26.2535 26.5649 26.1898 26.6514 26.1261C27.2319 25.6943 27.6904 25.3888 28.2991 25.3888H28.3024C28.8322 25.3888 29.2858 25.6186 30.0372 25.9976C31.0173 26.492 33.2558 27.8266 34.2375 28.817C34.7151 29.2984 34.9813 29.6055 35.1115 29.9502C35.3075 30.4691 35.1229 30.8758 35.0026 31.1481C34.9824 31.1933 34.9601 31.2428 34.9367 31.2978C34.7075 31.841 34.4288 32.3619 34.1041 32.854C33.5253 33.7198 32.9389 34.3901 31.9598 34.8458C31.4571 35.0837 30.9069 35.2041 30.3508 35.1981Z" fill="#0D0F1D"/>
</svg>
</span>
               <div className='trusted_clients'>
                 Call Us Now
                <span className="phone-number">+00-000000000</span>
                </div>
              </button>
            </div>
          </div>
          <div className="trusted-visual">
            <div className="hands-image">
              <img src={handsImage} alt="Team collaboration" className="hands-img" />
            </div>
            {/* <div className="trusted-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-box">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div> */}
            <section class="stats count_sec p-0">
  <div class="card">
    <h4 class="counter" data-target="10">10 <span>+</span></h4>
    <p>Experience</p>
  </div>

  <div class="card">
    <h4 class="counter" data-target="10000">1000 <span>+</span></h4>
    <p>Clients Globally</p>
  </div>

  <div class="card">
    <h4 class="counter" data-target="100">100 <span>+</span></h4>
    <p>Indian Cities</p>
  </div>

  <div class="card">
    <h4 class="counter" data-target="300">300 <span>+</span></h4>
    <p>Services Offered</p>
  </div>
</section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;

