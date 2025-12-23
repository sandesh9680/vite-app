import React, { useState } from 'react';

const AlertsDeadlines = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 1)); // September 2025

  const reminders = [
    { 
      day: 6, 
      month: 8, 
      year: 2025,
      text: 'Donec fringilla in elementum placerat orci viverra at, in amet, urna'
    },
    { 
      day: 15, 
      month: 8, 
      year: 2025,
      text: 'Donec fringilla in elementum placerat orci viverra at, in amet, urna'
    },
    { 
      day: 6, 
      month: 8, 
      year: 2025,
      text: 'Donec fringilla in elementum placerat orci viverra at, in amet, urna'
    },
    { 
      day: 6, 
      month: 8, 
      year: 2025,
      text: 'Donec fringilla in elementum placerat orci viverra at, in amet, urna'
    },
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const calendarDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getRemindersForDate = (day, month, year) => {
    return reminders.filter(r => r.day === day && r.month === month && r.year === year);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Previous month days
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPrevMonth = getDaysInMonth(new Date(prevYear, prevMonth, 1));
    
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: daysInPrevMonth - i,
        isCurrentMonth: false,
        month: prevMonth,
        year: prevYear
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const dateReminders = getRemindersForDate(i, currentMonth, currentYear);
      days.push({
        date: i,
        isCurrentMonth: true,
        month: currentMonth,
        year: currentYear,
        hasReminder: dateReminders.length > 0
      });
    }

    // Next month days to fill the grid
    const remainingDays = 42 - days.length; // 6 rows × 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: i,
        isCurrentMonth: false,
        month: currentMonth === 11 ? 0 : currentMonth + 1,
        year: currentMonth === 11 ? currentYear + 1 : currentYear
      });
    }

    return days;
  };

  const filteredReminders = reminders.filter(r => 
    r.month === currentDate.getMonth() && r.year === currentDate.getFullYear()
  );

  return (
    <section>
        <div className="heading_short_long">
          
            <div className="short_title">REMINDERS</div>
            
          <h2 className="long_title text-center">Get Alerts And Important Deadlines All In One Place</h2>
        </div>
        <div className="alerts-deadlines">
      <div className="container">
        <div className="alerts-content">
          <div className="reminders-list">
            {filteredReminders.map((reminder, index) => (
              <div key={index} className="reminder-card">
                <div className="reminder-date-section">
                  <div className="published-on-label">Published On</div>
                  <div className="reminder-date">
                    <span className="reminder-day">{reminder.day}</span>
                    <div className="reminder-month-year">
                      {monthNames[reminder.month]} {reminder.year}
                    </div>
                  </div>
                </div>
                <div className="reminder-text">{reminder.text}</div>
                <button className="reminder-label-btn">Label</button>
              </div>
            ))}
          </div>
          <div className="calendar-widget">
            <div className="calendar-header">
              <span className="calendar-month">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
              <div className="calendar-nav-buttons">
                <button className="calendar-nav" onClick={() => navigateMonth('prev')}>‹</button>
                <button className="calendar-nav" onClick={() => navigateMonth('next')}>›</button>
              </div>
            </div>
            <div className="calendar-grid">
              {calendarDays.map((day, index) => (
                <div key={index} className="calendar-day-header">{day}</div>
              ))}
              {renderCalendar().map((dayObj, index) => (
                <div
                  key={index}
                  className={`calendar-date ${!dayObj.isCurrentMonth ? 'other-month' : ''} ${dayObj.hasReminder ? 'highlighted' : ''}`}
                >
                  {dayObj.date}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="alerts-cta">
          <button className="btn-primary alerts-subscribe-btn">Subscribe</button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AlertsDeadlines;

