import React from 'react';

const AlertsDeadlines = () => {
  const deadlines = [
    { date: 'Dec 15, 2023', title: 'GST Return Filing' },
    { date: 'Dec 20, 2023', title: 'Income Tax Filing' },
    { date: 'Dec 25, 2023', title: 'TDS Return Filing' },
    { date: 'Dec 30, 2023', title: 'PF Return Filing' },
  ];

  const calendarDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const highlightedDates = [15, 20, 25, 30];

  return (
    <section className="alerts-deadlines">
      <div className="container">
        <h2 className="section-title">Get Alerts And Important Deadlines All In One Place</h2>
        <div className="alerts-content">
          <div className="deadline-cards">
            {deadlines.map((deadline, index) => (
              <div key={index} className="deadline-card">
                <div className="deadline-date">{deadline.date}</div>
                <h4>{deadline.title}</h4>
                <button className="btn-primary">View Details</button>
              </div>
            ))}
          </div>
          <div className="calendar-widget">
            <div className="calendar-header">
              <button className="calendar-nav">‹</button>
              <h3>December 2023</h3>
              <button className="calendar-nav">›</button>
            </div>
            <div className="calendar-grid">
              {calendarDays.map((day, index) => (
                <div key={index} className="calendar-day">{day}</div>
              ))}
              {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                <div
                  key={date}
                  className={`calendar-date ${highlightedDates.includes(date) ? 'highlighted' : ''}`}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="btn-primary">Get Started</button>
      </div>
    </section>
  );
};

export default AlertsDeadlines;

