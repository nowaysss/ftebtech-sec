import React, { useState, useEffect } from 'react';
import "../../styles/components/Footer/Footer.scss"
import { Icon } from '../Icons/IconSystem'
import DinoGame from '../DinoGame/DinoGame';

const Footer = () => {
  const [showDinoGame, setShowDinoGame] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/servicess' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  const services = [
    { name: 'Cloud Solutions', path: '/services/cloud-services' },
    { name: 'Microsoft 365', path: '/services/microsoft365' },
    { name: 'Custom Development', path: '/services/development' },
    { name: 'IT Infrastructure', path: '/services/infrastructure' },
    { name: 'Cybersecurity', path: '/services/security' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: 'LinkedIn', 
      url: 'https://linkedin.com/company/ftebtech',
      color: '#0077b5'
    },
    { 
      name: 'Twitter', 
      icon: 'Twitter', 
      url: 'https://twitter.com/ftebtech',
      color: '#1da1f2'
    },
    { 
      name: 'Facebook', 
      icon: 'Facebook', 
      url: 'https://facebook.com/ftebtech',
      color: '#4267b2'
    },
    { 
      name: 'Instagram', 
      icon: 'Instagram', 
      url: 'https://instagram.com/ftebtech',
      color: '#e4405f'
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', email);
      e.target.reset();
    }
  };

  const toggleDinoGame = () => {
    setShowDinoGame(!showDinoGame);
  };

  return (
    <>
      {/* Dino Game Modal */}
      {showDinoGame && (
        <div className="dino-game-overlay">
          <div className="dino-game-container">
            <div className="dino-game-header">
              <h3>Chrome Dino Game</h3>
              <button 
                className="close-game-btn"
                onClick={toggleDinoGame}
                aria-label="Close game"
              >
                <Icon name="Close" size={24} />
              </button>
            </div>
            <DinoGame />
          </div>
        </div>
      )}

      <footer className="modern-footer">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="container">
            <div className="footer-grid">
              
              {/* Company Info */}
              <div className="footer-section company-section">
                <div className="footer-logo">
                  <h2>FTEB</h2>
                  <span className="logo-tagline">Technology Solutions</span>
                </div>
                <p className="company-description">
                  Leading technology solutions provider specializing in cloud infrastructure, 
                  custom development, and digital transformation services for modern businesses.
                </p>
                
                {/* Contact Info */}
                <div className="contact-info">
                  <div className="contact-item">
                    <Icon name="Location" size={16} />
                    <span>AG House, Sala Al Din, Dubai, UAE</span>
                  </div>
                  <div className="contact-item">
                    <Icon name="Phone" size={16} />
                    <a href="tel:+971588481295">+971 58 848 1295</a>
                  </div>
                  <div className="contact-item">
                    <Icon name="Email" size={16} />
                    <a href="mailto:Connect@ftebtech.com">Connect@ftebtech.com</a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.path}>
                        <Icon name="ArrowRight" size={12} />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="footer-section">
                <h4>Our Services</h4>
                <ul className="footer-links">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a href={service.path}>
                        <Icon name="ArrowRight" size={12} />
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter & Social */}
              <div className="footer-section newsletter-section">
                <h4>Stay Connected</h4>
                <p>Subscribe to our newsletter for the latest updates and insights.</p>
                
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <div className="input-group">
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Enter your email" 
                      required 
                    />
                    <button type="submit" aria-label="Subscribe">
                      <Icon name="ArrowRight" size={18} />
                    </button>
                  </div>
                </form>

                {/* Social Links */}
                <div className="social-section">
                  <h5>Follow Us</h5>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        style={{ '--social-color': social.color }}
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <Icon name={social.icon} size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>&copy; {currentYear} FTEB Technology Solutions. All rights reserved.</p>
              </div>
              
              <div className="footer-bottom-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
                <a href="/cookies-policy">Cookies Policy</a>
              </div>

              {/* Fun Easter Egg - Dino Game Button */}
              <div className="easter-egg">
                <button 
                  className="dino-game-trigger"
                  onClick={toggleDinoGame}
                  title="Play Chrome Dino Game"
                  aria-label="Play Chrome Dino Game"
                >
                  🦕 Play Game
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="footer-decoration">
          <div className="decoration-dots"></div>
          <div className="decoration-lines"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;