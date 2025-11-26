import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'What services does EbzFiling offer?',
      answer: 'EbzFiling offers comprehensive legal and compliance solutions including company registration, GST registration, trademark registration, income tax filing, and more.',
    },
    {
      question: 'How long does company registration take?',
      answer: 'Company registration typically takes 7-10 business days, depending on the type of company and documentation provided.',
    },
    {
      question: 'What documents are required for GST registration?',
      answer: 'Common documents include PAN card, Aadhaar card, business address proof, bank account details, and photographs.',
    },
    {
      question: 'Do you provide support after registration?',
      answer: 'Yes, we provide ongoing support and assistance for all compliance requirements after registration.',
    },
    {
      question: 'What are your pricing plans?',
      answer: 'Our pricing varies based on the service. Please visit our pricing page or contact us for detailed information.',
    },
    {
      question: 'Is my data secure with EbzFiling?',
      answer: 'Absolutely. We use industry-standard encryption and security measures to protect all client data.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">Your Most Common Questions, Answered Clearly</h2>
        <div className="faq-content">
          <div className="faq-column">
            {faqs.slice(0, 3).map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-column">
            {faqs.slice(3).map((faq, index) => {
              const actualIndex = index + 3;
              return (
                <div
                  key={actualIndex}
                  className={`faq-item ${activeIndex === actualIndex ? 'active' : ''}`}
                  onClick={() => toggleFAQ(actualIndex)}
                >
                  <div className="faq-question">
                    <h4>{faq.question}</h4>
                    <span className="faq-toggle">{activeIndex === actualIndex ? '−' : '+'}</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button className="btn-primary">View All FAQs</button>
      </div>
    </section>
  );
};

export default FAQ;

