import React from 'react';

const FilingDates = () => {
  const timelineSteps = [
    { 
      number: '01',
      title: 'Submit Your Details', 
      desc: 'Choose your service—company registration, GST, compliance, or trademark—and fill a quick form.',
      side: 'right',
      cardType: 'form'
    },
    { 
      number: '02',
      title: 'Expert Consultation', 
      desc: 'Our compliance expert connects with you to understand your business, explain the process',
      side: 'left',
      cardType: 'consultation'
    },
    { 
      number: '03',
      title: 'Expert Consultation', 
      desc: 'Our compliance expert connects with you to understand your business, explain the process',
      side: 'right',
      cardType: 'consultation-blue'
    },
    { 
      number: '04',
      title: 'Expert Consultation', 
      desc: 'Our compliance expert connects with you to understand your business, explain the process',
      side: 'left',
      cardType: 'consultation'
    },
    { 
      number: '05',
      title: 'Expert Consultation', 
      desc: 'Our compliance expert connects with you to understand your business, explain the process',
      side: 'right',
      cardType: 'consultation'
    },
  ];

  const renderCard = (cardType) => {
    switch(cardType) {
      case 'form':
        return (
          <div className="timeline-card">
            <div className="card-field"></div>
            <div className="card-field"></div>
            <button className="card-btn card-btn-orange">
              Submit <span className="btn-plus">+</span>
            </button>
          </div>
        );
      case 'consultation':
        return (
          <div className="timeline-card">
            <div className="consultation-icon consultation-icon-gray">
              <div className="person-icon person-icon-gray">
                <div className="person-body"></div>
                <div className="person-head"></div>
                <div className="speech-bubble speech-bubble-q">?</div>
              </div>
            </div>
            <button className="card-btn card-btn-gray">
              Call Expert <span className="btn-phone">📞</span>
            </button>
          </div>
        );
      case 'consultation-blue':
        return (
          <div className="timeline-card">
            <div className="consultation-icon consultation-icon-blue">
              <div className="person-icon person-icon-blue">
                <div className="person-body person-body-blue"></div>
                <div className="person-head person-head-blue"></div>
                <div className="speech-bubble speech-bubble-q speech-bubble-blue">?</div>
              </div>
            </div>
            <button className="card-btn card-btn-orange">
              Call Expert <span className="btn-phone-white">📞</span>
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="filing-dates">
      <div className="container">
        <div className="filing-dates-header">
          <div className="filing-dates-label-wrapper">
            <div className="filing-dates-label">HOW EBIZ WORKS</div>
            <div className="filing-dates-label-line"></div>
          </div>
          <h2 className="filing-dates-title">All Your Filing Dates, Simplified</h2>
        </div>
        <div className="timeline-container">
          <div className="timeline-line">
            <div className="timeline-start-node"></div>
            {timelineSteps.map((_, index) => (
              <div 
                key={`node-${index}`} 
                className="timeline-node" 
                style={{ top: `${6 + (index * 10)}%` }}
              ></div>
            ))}
          </div>
          <div className="timeline-steps">
            {timelineSteps.map((step, index) => (
              <div key={index} className={`timeline-step timeline-step-${step.side}`}>
                <div className="timeline-step-content">
                  <div className="timeline-step-header">
                    <span className="timeline-step-number">{step.number}</span>
                    <h4 className="timeline-step-title">{step.title}</h4>
                  </div>
                  <p className="timeline-step-desc">{step.desc}</p>
                  {renderCard(step.cardType)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="filing-dates-cta">
          <button className="btn-primary filing-dates-btn">Start the Process</button>
        </div>
      </div>
    </section>
  );
};

export default FilingDates;

