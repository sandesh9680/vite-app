import React from 'react';
import Features_img from '../assets/features-img.png';
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
          <div className="features-text heading_short_long">
              <div className="short_title text-start">WHY CHOOSE EBIZ</div>
             
            <h2 className="features-title long_title ">Faucibus Adipiscing Viverra Placerat Ex</h2>
            <p className="features-description">
              faucibus Donec quis nulla, amet, varius turpis tincidunt ex efficitur. non, tincidunt tincidunt nec non, elit orci consectetur non vel adipiscing commodo quis nibh consectetur volutpat ac ex sed Lorem quis quam sapien Vestibulum Cras Ut est. scelerisque dui Cras consectetur non non, commodo est. Nullam scelerisque id cursus tortor. sit Lorem placerat placerat sit urna. hendrerit vitae ex malesuada eget non sollicitudin. venenatis nisl. sit leo. ullamcorper elementum non Nullam scelerisque id cursus tortor. 
            </p>
            <a href="#" className="features-read-more">Read More <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.68059 5L7.15833 6.41L12.103 11L7.15833 15.59L8.68059 17L15.1583 11L8.68059 5Z" fill="#FF6F3B"/>
</svg>
</a>
            <button className="btn-primary features-btn">Lorem Ipsum</button>
          </div>
          <div className="features-boards">
<img src={Features_img} alt='features' />
            {/* <div className="features-grid">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

