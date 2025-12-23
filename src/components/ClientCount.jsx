import React from 'react';
import Trusted1 from '../assets/trusted1.png';
import Trusted2 from '../assets/trusted2.png';
import Trusted3 from '../assets/trusted3.png';
import Trusted4 from '../assets/trusted4.png';
import Trusted5 from '../assets/trusted5.png';
import Trusted6 from '../assets/trusted6.png';
const ClientCount = () => {
const clients = [
  {
    image: Trusted1,
  },
  {
    image: Trusted2,
  },
  {
    image: Trusted3,
  },
  {
    image: Trusted4,
  },
  {
    image: Trusted5,
  },
  {
    image: Trusted6,
  },
];



  return (
    <section className="client-count">
      <div className="container">
        <div className="client-count-header heading_short_long">
         
            <div className="short_title">TRUSTED BY</div>
       
          <h2 className="long_title ">
            <span className="client-count-number">28000+</span> Entrepreneurs And Business
          </h2>
        </div>
        <div className="client-logos">
  {clients.map((client, index) => (
    <div key={index} className="client-logo-card">
      <img
        src={client.image}
        alt="client logo"
        className="h-24 w-auto object-contain mx-auto"
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default ClientCount;

