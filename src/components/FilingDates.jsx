import React from 'react';
import work1 from "../assets/work.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
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
          <div className="timeline-card work1">
           <img src={work1} alt='' />
          </div>
        );
      case 'consultation':
        return (
          <div className="timeline-card work2">
            <img src={work2} alt='' />
          </div>
        );
      case 'consultation-blue':
        return (
          <div className="timeline-card work1">
            <img src={work3} alt='' />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="filing-dates">
      <div className="container">
        <div className="heading_short_long">
          
            <div className="short_title">HOW EBIZ WORKS</div>
           
          <h2 className="long_title">All Your Filing Dates, Simplified</h2>
        </div>
        <div className="timeline-container">
          <div className="timeline-line">
            <div className="timeline-start-node"></div>
            {timelineSteps.map((_, index) => (
              <div 
                key={`node-${index}`} 
                className="timeline-node" 
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

