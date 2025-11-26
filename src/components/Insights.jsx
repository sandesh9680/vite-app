import React from 'react';

const Insights = () => {
  const blogs = [
    { icon: '💻', title: 'How to Register Your Company Online' },
    { icon: '📋', title: 'GST Filing Process' },
    { icon: '💰', title: 'Income Tax Filing Guide' },
  ];

  return (
    <section className="insights">
      <div className="container">
        <h2 className="section-title">Insights That Drive Your Business</h2>
        <div className="blog-cards">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image">{blog.icon}</div>
              <h3>{blog.title}</h3>
              <button className="btn-primary">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;

