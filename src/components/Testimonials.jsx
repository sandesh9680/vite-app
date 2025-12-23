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
              <div className="quote-icon">“</div>
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
              <div className="quote-icon">“</div>
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
              <div className="quote-icon">“</div>
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
