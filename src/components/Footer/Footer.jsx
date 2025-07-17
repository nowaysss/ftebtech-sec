import React, { useState, useEffect } from 'react';
import "../../styles/components/Footer/Footer.scss"
import footerLogo from '../../assets/images/FTebtech-logo/FTEB-logo-white.png';
import { Icon } from '../Icons/IconSystem'
import DinoGame from '../DinoGame/DinoGame';
import FlappyBird from '../FlappyBird/FlappyBird';
import SpaceInvaders from '../SpaceInvaders/SpaceInvaders';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showDinoGame, setShowDinoGame] = useState(false);
  const [showFlappyBird, setShowFlappyBird] = useState(false);
  const [showSpaceInvaders, setShowSpaceInvaders] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  const quickLinks = [
    { name: 'Services', path: '/servicess' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Cloud Solutions', path: '/services/cloud-services' },
    { name: 'IT Infrastructure', path: '/services/infrastructure' },
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

  const toggleFlappyBird = () => {
    setShowFlappyBird(!showFlappyBird);
  };

  const toggleSpaceInvaders = () => {
    setShowSpaceInvaders(!showSpaceInvaders);
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

      {/* Flappy Bird Game Modal */}
      {showFlappyBird && (
        <div className="dino-game-overlay">
          <div className="dino-game-container">
            <div className="dino-game-header">
              <h3>Flappy Bird Game</h3>
              <button 
                className="close-game-btn"
                onClick={toggleFlappyBird}
                aria-label="Close game"
              >
                <Icon name="Close" size={24} />
              </button>
            </div>
            <FlappyBird />
          </div>
        </div>
      )}

      {/* Space Invaders Game Modal */}
      {showSpaceInvaders && (
        <div className="dino-game-overlay">
          <div className="dino-game-container">
            <div className="dino-game-header">
              <h3>Space Invaders Game</h3>
              <button 
                className="close-game-btn"
                onClick={toggleSpaceInvaders}
                aria-label="Close game"
              >
                <Icon name="Close" size={24} />
              </button>
            </div>
            <SpaceInvaders />
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
                <Link to="/">
                        <img src={footerLogo} alt="FTEBTECH" />
                      </Link>
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
                    <span>AG house, sala al din deira, UAE</span>
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
                <div className="easter-egg">
                <button 
                  className="dino-game-trigger btn"
                  onClick={toggleDinoGame}
                  title="Play Chrome Dino Game"
                  aria-label="Play Chrome Dino Game"
                >
                  🦕 Play Game
                </button>
                <button 
                  className="dino-game-trigger btn" 
                  onClick={toggleFlappyBird}
                  title="Play Flappy Bird Game"
                  aria-label="Play Flappy Bird Game"
                >
                  🐦 Flappy Bird
                </button>
                <button 
                  className="dino-game-trigger btn"
                  onClick={toggleSpaceInvaders}
                  title="Play Space Invaders Game"
                  aria-label="Play Space Invaders Game"
                >
                  👾 Space Invaders
                </button>
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