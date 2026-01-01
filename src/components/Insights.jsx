import React from 'react';
import work3 from "../assets/blogs.png";
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
          <img src={work3} alt='' />
        );
      case 'clipboard':
        return (
         <img src={work3} alt='' />
        );
      case 'money':
        return (
         <img src={work3} alt='' />
        );
      default:
        return null;
    }
  };

  return (
    <section className="insights">
      <div className="container">
        <div className="insights-label-wrapper">
        <div className="heading_short_long">
         
            <div className="short_title">BUSINESS BLOG</div>
           
          <h2 className="long_title text-center">Insights That Drive Your Business</h2>
        </div>
        </div>
        <div className="blog-cards">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <div className="blog-icon">{renderIcon(blog.icon)}</div>
              <div className="blog_content">
              <div className="blog-meta">
                <span className="blog-date">{blog.date}</span>
                <span className="blog-separator">·</span>
                <span className="blog-read-time">{blog.readTime}</span>
              </div>
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <button className="blog-read-more">
                Read More <span><svg width="10" height="14" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.59304 0L0.0687474 1.60477L6.89496 7.8L0 14.1573L1.59304 15.6L10.0141 7.8L1.59304 0Z" fill="#FFFDFC"/>
</svg>
</span>
              </button>
              </div>
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

