import React, { useState } from 'react';

const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const testimonials = [
    { name: 'John Doe', rating: 5, text: "Excellent service! They helped me register my company quickly and efficiently." },
    { name: 'Jane Smith', rating: 5, text: "Professional team with great expertise. Highly recommended!" },
    { name: 'Mike Johnson', rating: 5, text: "Outstanding support throughout the entire process. Thank you!" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Says About Us</h2>
        <div className="testimonials-content">
          <div className="testimonial-cards">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <img src={`https://via.placeholder.com/60`} alt="Client" className="testimonial-avatar" />
                  <div>
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <div className="testimonial-stars">{'★'.repeat(testimonial.rating)}</div>
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
          <div className="review-form">
            <h3>Write a Review</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn-primary">Submit Review</button>
            </form>
          </div>
        </div>
        <div className="testimonial-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

