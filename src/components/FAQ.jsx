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
        <div className="heading_short_long">
          <div className="short_title">frequently asked questions</div>
        <h2 className="long_title text-center">Your Most Common Questions, Answered Clearly</h2>
        </div>
        <div className="faq-content gap-10 lg:gap-20">
          <div className="faq-column">
            {faqs.slice(0, 3).map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <span className="faq-toggle">{activeIndex === index ? '×' : '+'}</span>
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
        <div className='flex justify-center text-center'>
        <button class="btn-primary trusted-btn-primary text-center">Explore More FAQ<span class="btn-arrow border_left"><svg width="20" height="18" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.6824 11.7593L1.19209e-06 11.7593" stroke="#FFFDFC" stroke-width="2"></path><path d="M12.8412 0.759277L25.6824 11.7593L12.8412 22.7593" stroke="#FFFDFC" stroke-width="2"></path></svg></span></button>
      </div>
      </div>
    </section>
  );
};

export default FAQ;

