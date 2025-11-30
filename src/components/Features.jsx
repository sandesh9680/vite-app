import React from 'react';

const Features = () => {
  const features = [
    { 
      number: '01', 
      pinColor: 'green',
      numberColor: 'green',
      icon: '🎨', 
      title: 'Figma', 
      description: 'Design projects and assets for a standout UX/UI portfolio' 
    },
    { 
      number: '02', 
      pinColor: 'pink',
      numberColor: 'orange',
      icon: '📦', 
      title: 'Unblast', 
      description: 'Supports with Free PSD Mockups, top Graphics and Fonts to boost creativity.' 
    },
    { 
      number: '04', 
      pinColor: 'blue',
      numberColor: 'blue',
      icon: '🤖', 
      title: 'Gemini & ChatGPT', 
      description: 'Assists designers in research, creativity, and accelerating workflows.' 
    },
    { 
      number: '05', 
      pinColor: 'green',
      numberColor: 'orange',
      icon: '💼', 
      title: 'Behance', 
      description: 'Showcase portfolio and let the audience explore your creative brilliance.' 
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-content">
          <div className="features-text">
            <div className="features-label-wrapper">
              <div className="features-label">WHY CHOOSE EBIZ</div>
              <div className="features-label-line"></div>
            </div>
            <h2 className="features-title">Faucibus Adipiscing Viverra Placerat Ex</h2>
            <p className="features-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <a href="#" className="features-read-more">Read More &gt;</a>
            <button className="btn-primary features-btn">Lorem Ipsum</button>
          </div>
          <div className="features-board">
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className={`feature-pin feature-pin-${feature.pinColor}`}></div>
                  <div className={`feature-number feature-number-${feature.numberColor}`}>{feature.number}</div>
                  <div className="feature-card-content">
                    <div className="feature-header">
                      <h4 className="feature-title">{feature.title}</h4>
                      <div className="feature-icon">{feature.icon}</div>
                    </div>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

