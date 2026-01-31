import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* About Section */}
            <div className="footer__section">
              <h3 className="footer__title">Samatat Open Scout Group</h3>
              <p className="footer__text">
                Building character, leadership, and community through scouting. 
                We are committed to developing young people to reach their full potential.
              </p>
              <div className="footer__badges">
                <div className="footer__badge" title="Bangladesh Scouts">
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__section">
              <h4 className="footer__subtitle">Quick Links</h4>
              <nav className="footer__links">
                <Link to="/about" className="footer__link">About Us</Link>
                <Link to="/programs" className="footer__link">Programs</Link>
                <Link to="/events" className="footer__link">Events</Link>
                <Link to="/gallery" className="footer__link">Gallery</Link>
              </nav>
            </div>

            {/* Programs */}
            <div className="footer__section">
              <h4 className="footer__subtitle">Our Programs</h4>
              <nav className="footer__links">
                <a href="#cubs" className="footer__link">Cub Scouts</a>
                <a href="#scouts" className="footer__link">Scouts</a>
                <a href="#rovers" className="footer__link">Rover Scouts</a>
                <a href="#training" className="footer__link">Leader Training</a>
              </nav>
            </div>

            {/* Contact */}
            <div className="footer__section">
              <h4 className="footer__subtitle">Get In Touch</h4>
              <div className="footer__contact">
                <p className="footer__contact-item">
                  <strong>Location:</strong><br />
                  Samatat, Comilla<br />
                  Bangladesh
                </p>
                <p className="footer__contact-item">
                  <strong>Email:</strong><br />
                  <a href="mailto:info@samatatscouts.org">info@samatatscouts.org</a>
                </p>
                <p className="footer__contact-item">
                  <strong>Phone:</strong><br />
                  <a href="tel:+8801234567890">+880 1234-567890</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} Samatat Open Scout Group. All rights reserved.
            </p>
            <p className="footer__affiliation">
              Since 1976
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;