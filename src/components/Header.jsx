import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Resources', path: '/resources' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-e">E</span><span className="logo-b">B</span><span className="logo-text">Filing</span>
        </Link>
        <nav className="nav-menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button className="btn-primary">Get Started</button>
      </div>
    </header>
  );
};

export default Header;

