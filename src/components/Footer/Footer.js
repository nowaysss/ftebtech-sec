import "../../styles/components/Footer/Footer.css"
import { 
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import logo from "../../assets/images/image.jpeg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-widgets">
            <div className="footer-widget about-widget">
              <div className="footer-logo">
                     {/* <img src={logo} alt="Mitech Logo" className="logo-icon" />
                      */}
                      <h1>FTEB </h1>
              </div>
              <p>We are leading technology solutions providing company all over the world doing over 40 years.</p>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>

            <div className="footer-widget">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="/about">
                    <i className="fi fi-rr-angle-right"></i> About Us
                  </a>
                </li>
                <li>
                  <a href="/services">
                    <i className="fi fi-rr-angle-right"></i> Services
                  </a>
                </li>
                <li>
                  <a href="/case-studies">
                    <i className="fi fi-rr-angle-right"></i> Case Studies
                  </a>
                </li>
                <li>
                  <a href="/testimonials">
                    <i className="fi fi-rr-angle-right"></i> Testimonials
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <i className="fi fi-rr-angle-right"></i> Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-widget">
              <h4>Our Services</h4>
              <ul className="footer-links">
                <li>
                  <a href="/services/it-management">
                    <i className="fi fi-rr-angle-right"></i> IT Management
                  </a>
                </li>
                <li>
                  <a href="/services/cyber-security">
                    <i className="fi fi-rr-angle-right"></i> Cyber Security
                  </a>
                </li>
                <li>
                  <a href="/services/cloud">
                    <i className="fi fi-rr-angle-right"></i> Cloud Services
                  </a>
                </li>
                <li>
                  <a href="/services/web-development">
                    <i className="fi fi-rr-angle-right"></i> Web Development
                  </a>
                </li>
                <li>
                  <a href="/services/business-analysis">
                    <i className="fi fi-rr-angle-right"></i> Business Analysis
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
                    <FontAwesomeIcon icon={faMagnifyingGlass} />             
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