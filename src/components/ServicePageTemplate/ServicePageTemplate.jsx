import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../Icons/IconSystem';
import '../../styles/components/ServicePageTemplate/ServicePageTemplate.css';

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
  
  const certificationsData = [
    {
      competency: "Cloud Platform and Infrastructure",
      certifications: [
        { name: "Microsoft Certified: Azure Administrator Associate", code: "AZ-104", count: 4 },
        { name: "Microsoft Certified: Azure Virtual Desktop Specialty", code: "AZ-140", count: 4 },
        { name: "Microsoft Certified: Azure Solutions Architect Expert", code: "AZ-305", count: 3 },
        { name: "Microsoft Certified: DevOps Engineer Expert", code: "AZ-400", count: 1 },
        { name: "Microsoft Certified: Azure Security Engineer Associate", code: "AZ-500", count: 2 },
        { name: "Microsoft Certified: Azure Network Engineer Associate", code: "AZ-700", count: 4 },
      ]
    },
    {
      competency: "Cloud Productivity and Modern Workplace",
      certifications: [
        { name: "Microsoft 365 Certified: Endpoint Administrator Associate", code: "MD-102", count: 2 },
        { name: "Microsoft 365 Certified: Administrator Expert", code: "MS-102", count: 1 },
        { name: "Microsoft 365 Certified: Teams Administrator Associate", code: "MS-700", count: 1 },
        { name: "Microsoft 365 Certified: Fundamentals", code: "MS-900", count: 2 },
      ]
    },
    {
      competency: "Cloud M365 Security and Compliance",
      certifications: [
        { name: "Microsoft Certified: Security Operations Analyst Associate", code: "SC-200", count: 2 },
        { name: "Microsoft Certified: Identity and Access Administrator Associate", code: "SC-300", count: 3 },
        { name: "Microsoft Certified: Information Protection and Compliance Administrator Associate", code: "SC-400", count: 2 },
      ]
    },
    {
      competency: "AWS",
      certifications: [
        { name: "Cloud solution Architect", code: "SAP-C02", count: 3 },
      ]
    },
    {
      competency: "Redhat",
      certifications: [
        { name: "RHCSA Certified system administrator", code: "EX-200", count: 2 },
        { name: "RHCE Certified Enginer", code: "EX-294", count: 2 },
      ]
    }
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ background: data.heroGradient }}>
        <div className="service-hero-content">
          <button className="back-button" onClick={handleBackClick}>
            <Icon name="ArrowLeft" size={16} />
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
                  <Icon name="Phone" size={16} />
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

            
            </div>

            
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container services-grid-container">
          <div className="section-header">
            <h2>Our {data.title} Offerings</h2>
            <p>Comprehensive solutions tailored to your business needs</p>
          </div>
          
          <div className="services-grid">
            {data.services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-header">
                  <div className="icon-container icon-container-md icon-container-primary">
                    <Icon name="Settings" size={24} />
                  </div>
                  <h3>{service.title}</h3>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <Icon name="Check" size={14} className="icon-success" />
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
                <div className="icon-container icon-container-xl icon-container-primary">
                  <Icon name={
                    index === 0 ? "Analytics" :
                    index === 1 ? "Shield" :
                    index === 2 ? "Settings" :
                    "Network"
                  } size={32} />
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
        <div className="section-header">
          <h2>Our Implementation Process</h2>
          <p>A proven methodology for successful project delivery</p>
        </div>
        
        <div className="container d-flex flex-row align-items-center">
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
          <div className="sidebar-section">
            <div className="contact-card">
              <h4>Free Assessment</h4>
              <p>Get a comprehensive analysis of your current infrastructure and migration roadmap.</p>
              <button className="btn-contact" onClick={handleContactClick}>
                <Icon name="Phone" size={16} />
                Schedule Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container">
          <div className="section-header">
            <h2>Certified Team</h2>
            <p>Our team holds multiple certifications including Solutions Architect, DevOps Engineer, and Security Engineer.</p>
          </div>
          
          <div className="certifications-table-wrapper">
            <table className="certifications-table">
              <thead>
                <tr>
                  <th>Competency</th>
                  <th>Certification (Exam Code)</th>
                  <th># of Certified Professionals</th>
                </tr>
              </thead>
              <tbody>
                {certificationsData.map((group, idx) =>
                  group.certifications.map((cert, cidx) => (
                    <tr key={group.competency + cert.code}>
                      {cidx === 0 && (
                        <td rowSpan={group.certifications.length} className="competency-cell">
                          {group.competency}
                        </td>
                      )}
                      <td>{cert.name} <span className="exam-code">({cert.code})</span></td>
                      <td>{cert.count}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
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
                <Icon name="Email" size={16} />
                Contact Us Today
              </button>
              <button className="cta-button secondary large" onClick={handleCallClick}>
                <Icon name="Phone" size={16} />
                Schedule a Call
              </button>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <Icon name="Phone" size={16} />
                <span>+971588481295</span>
              </div>
              <div className="contact-item">
                <Icon name="Email" size={16} />
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