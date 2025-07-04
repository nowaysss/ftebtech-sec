import "../../styles/components/Footer/Footer.scss"
import { Icon } from '../Icons/IconSystem'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-widgets">
            <div className="footer-widget about-widget">
              <div className="footer-logo">
                <h1>FTEB </h1>
              </div>
              <p>We are leading technology solutions providing company all over the world doing over 40 years.</p>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Icon name="LinkedIn" size={20} />
                </a>
              </div>
            </div>

            <div className="footer-widget">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="/about">
                    <Icon name="ArrowRight" size={14} />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services">
                    <Icon name="ArrowRight" size={14} />
                    Services
                  </a>
                </li>
                <li>
                  <a href="/case-studies">
                    <Icon name="ArrowRight" size={14} />
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/testimonials">
                    <Icon name="ArrowRight" size={14} />
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <Icon name="ArrowRight" size={14} />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-widget">
              <h4>Our Services</h4>
              <ul className="footer-links">
                <li>
                  <a href="/services/it-management">
                    <Icon name="ArrowRight" size={14} />
                    IT Management
                  </a>
                </li>
                <li>
                  <a href="/services/cyber-security">
                    <Icon name="ArrowRight" size={14} />
                    Cyber Security
                  </a>
                </li>
                <li>
                  <a href="/services/cloud">
                    <Icon name="ArrowRight" size={14} />
                    Cloud Services
                  </a>
                </li>
                <li>
                  <a href="/services/web-development">
                    <Icon name="ArrowRight" size={14} />
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="/services/business-analysis">
                    <Icon name="ArrowRight" size={14} />
                    Business Analysis
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-widget">
              <h4>Newsletter</h4>
              <p>Subscribe to our newsletter to receive updates on the latest news and offers.</p>
              <form className="newsletter-form">
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                  <button type="submit">
                    <Icon name="ArrowRight" size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>&copy; {new Date().getFullYear()} FTEB. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer