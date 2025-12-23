import React from "react";
// import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="section-wrapper">
      <div className="section-header heading_short_long">
      <div className="short_title">TESTIMONIALS</div>
      <h2 className="long_title">
          What Our
          <span className="highlight"> Clients Says </span>
          About Us
        </h2>
      </div>

      <div className="content-wrapper content_afterbefore">
        {/* Left: Testimonials */}
        
        <div className="testimonials">
          <div className="testimonial-cards">
            {/* Card 1 */}
            <div className="testimonial-card">
              <div className="quote-icon">
                <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_341_10909)">
<path d="M4.99617 11.4754C4.40912 11.4754 3.85382 11.5933 3.33078 11.7777V11.4754C3.33078 9.66702 4.82443 8.19671 6.66156 8.19671C7.58117 8.19671 8.32695 7.46258 8.32695 6.55734C8.32695 5.6521 7.58273 4.91797 6.66156 4.91797C2.98834 4.91797 0 7.85859 0 11.4754V16.3935C0 19.1098 2.23683 21.3117 4.99617 21.3117C7.75552 21.3117 9.99234 19.1098 9.99234 16.3935C9.99234 13.6773 7.75448 11.4754 4.99617 11.4754ZM18.3193 11.4754C17.7322 11.4754 17.1769 11.5935 16.6539 11.7766V11.4754C16.6539 9.66702 18.1476 8.19671 19.9847 8.19671C20.9043 8.19671 21.6501 7.46258 21.6501 6.55734C21.6501 5.6521 20.9043 4.91797 19.9847 4.91797C16.3115 4.91797 13.3231 7.85961 13.3231 11.4754V16.3935C13.3231 19.1098 15.56 21.3117 18.3193 21.3117C21.0786 21.3117 23.3155 19.1098 23.3155 16.3935C23.3155 13.6773 21.0776 11.4754 18.3193 11.4754Z" fill="#0D0F1D"/>
</g>
<defs>
<clipPath id="clip0_341_10909">
<rect width="23.3155" height="26.2299" fill="white"/>
</clipPath>
</defs>
</svg>

              </div>
              <h4 className="testimonial-name">Client Name</h4>
              <p className="testimonial-role">loremipsumtext</p>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                Praesent non enim sed velit malesuada consectetur id a justo.
                Fusce quis eros sit amet enim laoreet dignissim.
              </p>
            </div>

            {/* Card 2 */}
            <div className="testimonial-card">
              <div className="quote-icon">
                <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_341_10909)">
<path d="M4.99617 11.4754C4.40912 11.4754 3.85382 11.5933 3.33078 11.7777V11.4754C3.33078 9.66702 4.82443 8.19671 6.66156 8.19671C7.58117 8.19671 8.32695 7.46258 8.32695 6.55734C8.32695 5.6521 7.58273 4.91797 6.66156 4.91797C2.98834 4.91797 0 7.85859 0 11.4754V16.3935C0 19.1098 2.23683 21.3117 4.99617 21.3117C7.75552 21.3117 9.99234 19.1098 9.99234 16.3935C9.99234 13.6773 7.75448 11.4754 4.99617 11.4754ZM18.3193 11.4754C17.7322 11.4754 17.1769 11.5935 16.6539 11.7766V11.4754C16.6539 9.66702 18.1476 8.19671 19.9847 8.19671C20.9043 8.19671 21.6501 7.46258 21.6501 6.55734C21.6501 5.6521 20.9043 4.91797 19.9847 4.91797C16.3115 4.91797 13.3231 7.85961 13.3231 11.4754V16.3935C13.3231 19.1098 15.56 21.3117 18.3193 21.3117C21.0786 21.3117 23.3155 19.1098 23.3155 16.3935C23.3155 13.6773 21.0776 11.4754 18.3193 11.4754Z" fill="#0D0F1D"/>
</g>
<defs>
<clipPath id="clip0_341_10909">
<rect width="23.3155" height="26.2299" fill="white"/>
</clipPath>
</defs>
</svg>

              </div>
              <h4 className="testimonial-name">Client Name</h4>
              <p className="testimonial-role">loremipsumtext</p>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                Praesent non enim sed velit malesuada consectetur id a justo.
                Fusce quis eros sit amet enim laoreet dignissim.
              </p>
            </div>

            {/* Card 3 */}
            <div className="testimonial-card">
              <div className="quote-icon">
                <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_341_10909)">
<path d="M4.99617 11.4754C4.40912 11.4754 3.85382 11.5933 3.33078 11.7777V11.4754C3.33078 9.66702 4.82443 8.19671 6.66156 8.19671C7.58117 8.19671 8.32695 7.46258 8.32695 6.55734C8.32695 5.6521 7.58273 4.91797 6.66156 4.91797C2.98834 4.91797 0 7.85859 0 11.4754V16.3935C0 19.1098 2.23683 21.3117 4.99617 21.3117C7.75552 21.3117 9.99234 19.1098 9.99234 16.3935C9.99234 13.6773 7.75448 11.4754 4.99617 11.4754ZM18.3193 11.4754C17.7322 11.4754 17.1769 11.5935 16.6539 11.7766V11.4754C16.6539 9.66702 18.1476 8.19671 19.9847 8.19671C20.9043 8.19671 21.6501 7.46258 21.6501 6.55734C21.6501 5.6521 20.9043 4.91797 19.9847 4.91797C16.3115 4.91797 13.3231 7.85961 13.3231 11.4754V16.3935C13.3231 19.1098 15.56 21.3117 18.3193 21.3117C21.0786 21.3117 23.3155 19.1098 23.3155 16.3935C23.3155 13.6773 21.0776 11.4754 18.3193 11.4754Z" fill="#0D0F1D"/>
</g>
<defs>
<clipPath id="clip0_341_10909">
<rect width="23.3155" height="26.2299" fill="white"/>
</clipPath>
</defs>
</svg>

              </div>
              <h4 className="testimonial-name">Client Name</h4>
              <p className="testimonial-role">loremipsumtext</p>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                Praesent non enim sed velit malesuada consectetur id a justo.
                Fusce quis eros sit amet enim laoreet dignissim.
              </p>
            </div>
          </div>

          <div className="slider-dots">
            <span className="active" />
            <span />
            <span />
          </div>
        </div>

        {/* Right: Appointment form */}
        <div className="appointment">
          <div className="appointment-header">
            Need assistance? Our team's got you covered.
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                id="name"
                type="text"
                placeholder="Amit Kumar"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                className="form-control"
                id="email"
                type="email"
                placeholder="abcd@gmail.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="form-inline">
                <input
                  className="form-control country-code"
                  type="text"
                  defaultValue="+91"
                />
                <input
                  className="form-control"
                  id="phone"
                  type="text"
                  placeholder="8023456789"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Select Service</label>
              <select className="form-select" id="service">
                <option>Get Service</option>
                <option>Consultation</option>
                <option>Support</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="3"
                placeholder="Donec fringilla in elementum placerat..."
              />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I hereby accept the T&amp;C of Ethelling
              </label>
            </div>

            <button type="submit" className="btn-appointment">
              Book an Appointment
              <span className="arrow">➜</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
