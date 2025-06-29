import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faCheck, 
  faPhone, 
  faEnvelope,
  faCog,
  faShieldAlt,
  faChartLine,
  faUsers,
  faZap,
  faLock,
  faChartBar,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import './ServicePageTemplate.css';

const ServicePageTemplate = ({ data }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/servicess');
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:Connect@ftebtech.com';
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+971588481295';
  };

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ background: data.heroGradient }}>
        <div className="service-hero-content">
          <button className="back-button" onClick={handleBackClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Services
          </button>
          
          <div className="hero-main">
            <div className="hero-text">
              <h1 className="service-hero-title">{data.title}</h1>
              <h2 className="service-hero-subtitle">{data.subtitle}</h2>
              <p className="service-hero-description">{data.description}</p>
              
              <div className="hero-actions">
                <button className="cta-button primary" onClick={handleContactClick}>
                  Get Started
                </button>
                <button className="cta-button secondary" onClick={handleCallClick}>
                  <FontAwesomeIcon icon={faPhone} />
                  Call Us
                </button>
              </div>
            </div>
            
            <div className="hero-logo">
              <img src={data.logo} alt={`${data.title} Logo`} />
            </div>
          </div>
          
          {/* Stats */}
          <div className="hero-stats">
            {data.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-left">
              <div className="descriptions">
                <h2>Why Choose {data.title.split(' ')[1] || data.title} for Your Business?</h2>
                <p>
                  {data.title} provides a comprehensive platform that enables businesses to build,
                  deploy, and manage applications through cutting-edge technology. With extensive
                  services and solutions, we offer unmatched flexibility and scalability.
                </p>
                <p>
                  Our expertise spans across infrastructure migration, application modernization, data analytics,
                  AI/ML implementation, and security optimization. We've successfully delivered 500+ projects with
                  an average cost reduction of 40% for our clients.
                </p>
                <p>
                  From startups to Fortune 500 companies, we provide end-to-end solutions that drive digital
                  transformation and business growth.
                </p>
              </div>

              <div className="service-benefits">
                <h3>Key Advantages</h3>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <FontAwesomeIcon icon={faZap} className="benefit-icon" />
                    <div>
                      <h4>High Performance</h4>
                      <p>Lightning-fast processing with global CDN and edge computing</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <FontAwesomeIcon icon={faLock} className="benefit-icon" />
                    <div>
                      <h4>Enterprise Security</h4>
                      <p>Multi-layered security with compliance certifications</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <FontAwesomeIcon icon={faChartBar} className="benefit-icon" />
                    <div>
                      <h4>Cost Optimization</h4>
                      <p>Pay-as-you-use model with intelligent cost management</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <FontAwesomeIcon icon={faCog} className="benefit-icon" />
                    <div>
                      <h4>Global Reach</h4>
                      <p>60+ regions worldwide for optimal performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-right">
              <div className="sidebar">
                <div className="sidebar-section">
                  <h3>Service Categories</h3>
                  <ul className="service-list">
                    <li>
                      <a href="#compute">Compute Services</a>
                    </li>
                    <li>
                      <a href="#storage">Storage Solutions</a>
                    </li>
                    <li>
                      <a href="#networking">Networking</a>
                    </li>
                    <li>
                      <a href="#databases">Databases</a>
                    </li>
                    <li>
                      <a href="#ai-ml">AI & Machine Learning</a>
                    </li>
                    <li>
                      <a href="#security">Security & Identity</a>
                    </li>
                    <li>
                      <a href="#devops">DevOps Tools</a>
                    </li>
                    <li>
                      <a href="#analytics">Analytics & BI</a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-section">
                  <div className="certification-card">
                    <h4>Certified Team</h4>
                    <p>
                      Our team holds multiple certifications including Solutions Architect, DevOps Engineer, and
                      Security Engineer.
                    </p>
                    <div className="certification-badges">
                      <div className="badge">Expert</div>
                      <div className="badge">Solutions Architect</div>
                      <div className="badge">DevOps Engineer</div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-section">
                  <div className="contact-card">
                    <h4>Free Assessment</h4>
                    <p>Get a comprehensive analysis of your current infrastructure and migration roadmap.</p>
                    <button className="btn-contact" onClick={handleContactClick}>
                      <FontAwesomeIcon icon={faComment} />
                      Schedule Assessment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Our {data.title} Offerings</h2>
            <p>Comprehensive solutions tailored to your business needs</p>
          </div>
          
          <div className="services-grid">
            {data.services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-header">
                  <div className="service-icon">
                    <FontAwesomeIcon icon={faCog} />
                  </div>
                  <h3>{service.title}</h3>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FontAwesomeIcon icon={faCheck} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our {data.title}?</h2>
            <p>Key benefits that set us apart from the competition</p>
          </div>
          
          <div className="benefits-grid">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <FontAwesomeIcon icon={
                    index === 0 ? faChartLine :
                    index === 1 ? faShieldAlt :
                    index === 2 ? faCog :
                    faUsers
                  } />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Implementation Process</h2>
            <p>A proven methodology for successful project delivery</p>
          </div>
          
          <div className="process-timeline">
            {data.process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container">
          <div className="section-header">
            <h2>Technologies We Use</h2>
            <p>Cutting-edge tools and platforms for optimal results</p>
          </div>
          
          <div className="technologies-grid">
            {data.technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how our {data.title.toLowerCase()} can transform your business</p>
            
            <div className="cta-actions">
              <button className="cta-button primary large" onClick={handleContactClick}>
                <FontAwesomeIcon icon={faEnvelope} />
                Contact Us Today
              </button>
              <button className="cta-button secondary large" onClick={handleCallClick}>
                <FontAwesomeIcon icon={faPhone} />
                Schedule a Call
              </button>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>+971588481295</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Connect@ftebtech.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;