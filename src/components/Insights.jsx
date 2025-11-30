import React from 'react';

const Insights = () => {
  const blogs = [
    { 
      icon: 'laptop',
      date: 'Aug 7',
      readTime: '3 min read',
      title: 'How to Register Your Company Online',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...'
    },
    { 
      icon: 'clipboard',
      date: 'Aug 5',
      readTime: '5 min read',
      title: 'GST Filing Process',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...'
    },
    { 
      icon: 'money',
      date: 'Aug 3',
      readTime: '4 min read',
      title: 'Income Tax Filing Guide',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...'
    },
  ];

  const renderIcon = (iconType) => {
    switch(iconType) {
      case 'laptop':
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="20" width="60" height="40" rx="4" fill="#E5E5E5"/>
            <rect x="15" y="25" width="50" height="30" rx="2" fill="#3B82F6"/>
            <rect x="20" y="65" width="40" height="4" rx="2" fill="#E5E5E5"/>
          </svg>
        );
      case 'clipboard':
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="15" width="40" height="50" rx="2" fill="#FFA500"/>
            <rect x="25" y="20" width="30" height="40" rx="1" fill="#FFFFFF"/>
            <line x1="30" y1="28" x2="50" y2="28" stroke="#E5E5E5" strokeWidth="2"/>
            <line x1="30" y1="35" x2="50" y2="35" stroke="#E5E5E5" strokeWidth="2"/>
            <line x1="30" y1="42" x2="50" y2="42" stroke="#E5E5E5" strokeWidth="2"/>
            <rect x="28" y="10" width="24" height="8" rx="1" fill="#E5E5E5"/>
          </svg>
        );
      case 'money':
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 15C40 15 25 20 25 35C25 50 40 55 40 55C40 55 55 50 55 35C55 20 40 15 40 15Z" fill="#FFA500"/>
            <text x="40" y="42" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="700">$</text>
            <path d="M30 50L30 65L50 65L50 50" stroke="#FFA500" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="insights">
      <div className="container">
        <div className="insights-header">
          <div className="insights-label-wrapper">
            <div className="insights-label">BUSINESS BLOG</div>
            <div className="insights-label-line"></div>
          </div>
          <h2 className="insights-title">Insights That Drive Your Business</h2>
        </div>
        <div className="blog-cards">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <div className="blog-icon">{renderIcon(blog.icon)}</div>
              <div className="blog-meta">
                <span className="blog-date">{blog.date}</span>
                <span className="blog-separator">·</span>
                <span className="blog-read-time">{blog.readTime}</span>
              </div>
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <button className="blog-read-more">
                Read More <span className="btn-arrow">→</span>
              </button>
            </div>
          ))}
        </div>
        <div className="blog-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Insights;

