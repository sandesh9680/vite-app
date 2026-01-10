import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services',
      path: '/services',
      submenu: [
        { name: 'Web Development', path: '/services/web' },
        { name: 'App Development', path: '/services/app' },
        { name: 'UI/UX Design', path: '/services/uiux' },
      ]
    },
    { name: 'Pricing', path: '/pricing' },
    { 
      name: 'Resources',
      path: '/resources',
      submenu: [
        { name: 'Blog', path: '/resources/blog' },
        { name: 'Case Studies', path: '/resources/cases' },
        { name: 'Guides', path: '/resources/guides' },
      ]
    },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isMobile = isMobileMenuOpen; 
  // mobile menu only exists when open — simple check

  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo">
          <img src={Logo} width={100} alt="Logo" />
        </Link>

        <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className={isMobileMenuOpen ? 'hamburger open' : 'hamburger'}>
            <span></span><span></span><span></span>
          </span>
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>

          {navLinks.map((link) => (
            <div
              key={link.name}
              className="nav-item"
              onMouseEnter={() => !isMobile && setActiveDropdown(link.name)}
              onMouseLeave={() => !isMobile && setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>

              {/* === DESKTOP DROPDOWN === */}
              {!isMobile && link.submenu && activeDropdown === link.name && (
                <div className="dropdown-menu">
                  {link.submenu.map((sub) => (
                    <Link key={sub.name} to={sub.path} className="dropdown-item">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* === MOBILE INLINE SUBMENU === */}
              {isMobile && link.submenu && (
                <div className="mobile-submenu">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="mobile-submenu-item"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}

            </div>
          ))}

          <button className="btn-primary mobile-cta">Get Started</button>
        </nav>

        <button className="btn-primary header-cta">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
