import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/events', label: 'Events' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__content">
          {/* Logo with PNG Image */}
          <Link to="/" className="header__logo">
            <div className="header__logo-image">
              <img src="public/images/samatat.png" alt="Samatat Scout Group Logo" />
            </div>
            <div className="header__logo-text">
              <span className="header__logo-name">Samatat Scout Group</span>
              <span className="header__logo-tagline">সমতট মুক্ত স্কাউট গ্রুপ</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`header__nav-link ${location.pathname === item.path ? 'header__nav-link--active' : ''}`}
              >
                {item.label}
                <span className="header__nav-link-line"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="header__cta">
            <Link to="/contact" className="header__btn">
              Join Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`header__mobile-link ${location.pathname === item.path ? 'header__mobile-link--active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="header__mobile-btn">
            Join Us Today
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="header__overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;