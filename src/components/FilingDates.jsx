import React from 'react';

const FilingDates = () => {
  const timelineSteps = [
    { icon: '📝', title: 'Submit Your Details', desc: 'Provide necessary information' },
    { icon: '💬', title: 'Expert Consultation', desc: 'Get guidance from professionals' },
    { icon: '✅', title: 'Document Review', desc: 'Experts review your documents' },
    { icon: '📤', title: 'Filing Complete', desc: 'Your filing is processed' },
  ];

  return (
    <section className="filing-dates">
      <div className="container">
        <h2 className="section-title">All Your Filing Dates, Simplified</h2>
        <div className="timeline">
          {timelineSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="timeline-item">
                <div className="timeline-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
              {index < timelineSteps.length - 1 && <div className="timeline-connector"></div>}
            </React.Fragment>
          ))}
        </div>
        <button className="btn-primary">Start the Process</button>
      </div>
    </section>
  );
};

export default FilingDates;

