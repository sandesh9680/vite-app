import React from 'react';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div className="top-bar-left">
          <span className="call-text">Call Us: <a href="tel:+919999999999">+91 9999999999</a></span>
        </div>
        <div className="top-bar-right">
          <button className="btn-link">Login</button>
          <button className="btn-link btn-signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

