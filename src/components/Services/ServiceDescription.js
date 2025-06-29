import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/Services/Services.css';

// Import existing logos from your project
import azureLogo from '../../assets/images/ProductLogos/azure.jpg';
import m365Logo from '../../assets/images/ProductLogos/m365.png';
import dynamicsLogo from '../../assets/images/ProductLogos/Dynamics-365.png';
import developmentLogo from '../../assets/images/ProductLogos/Development.png';
import microsoftLogo from '../../assets/images/ProductLogos/Microsoft-Logo.png';

const ServiceDescription = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'azure',
      title: 'Microsoft Azure Services',
      description: 'Complete cloud infrastructure solutions with Azure. From migration to optimization, we handle your entire cloud journey with enterprise-grade security and scalability.',
      logo: azureLogo,
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Integration', 'Cost Optimization'],
      path: '/services/azure'
    },
    {
      id: 'microsoft365',
      title: 'Microsoft 365 Solutions',
      description: 'Empower your workforce with comprehensive M365 implementation, security configuration, and ongoing support for maximum productivity.',
      logo: m365Logo,
      features: ['Email Migration', 'Teams Setup', 'Security Configuration', 'User Training'],
      path: '/services/microsoft365'
    },
    {
      id: 'dynamics365',
      title: 'Dynamics 365 Implementation',
      description: 'Transform your business operations with intelligent ERP and CRM solutions tailored to your specific industry needs and requirements.',
      logo: dynamicsLogo,
      features: ['Business Central', 'Sales & Marketing', 'Field Service', 'Custom Development'],
      path: '/services/dynamics365'
    },
    {
      id: 'development',
      title: 'Custom Development',
      description: 'Build powerful web applications and business tools with modern technologies, ensuring scalability, performance, and user experience.',
      logo: developmentLogo,
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      path: '/services/development'
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure Services',
      description: 'End-to-end infrastructure planning, implementation, and management for optimal performance, reliability, and business continuity.',
      logo: microsoftLogo,
      features: ['Network Setup', 'Server Management', 'Hardware Procurement', 'Monitoring'],
      path: '/services/infrastructure'
    },
    {
      id: 'security',
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive security strategies, advanced threat protection, and compliance management solutions.',
      logo: microsoftLogo,
      features: ['Security Assessment', 'Threat Protection', 'Compliance', '24/7 Monitoring'],
      path: '/services/security'
    }
  ];

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <div className="service-description-wrapper">
      <div className="services-hero-section">
        <div className="services-hero-content">
          <span className="services-subtitle">OUR EXPERTISE</span>
          <h1 className="services-main-title">
            Comprehensive IT Services for 
            <span className="highlight-text"> Modern Businesses</span>
          </h1>
          <p className="services-hero-description">
            From cloud infrastructure to custom development, we provide end-to-end technology solutions 
            that drive innovation, enhance security, and accelerate your digital transformation journey.
          </p>
          <div className="services-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container services-grid-section">
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-md-4 col-sm-6 col-lg-4 mb-4 d-flex">
              <div 
                className="service-card-modern d-flex flex-column"
                onClick={() => handleServiceClick(service.path)}
              >
                <div className="service-card-header">
                  <div className="service-logo-wrapper">
                    <img src={service.logo} alt={`${service.title} Logo`} className="service-logo" />
                  </div>
                  <h3 className="service-title-modern">{service.title}</h3>
                </div>
                
                <p className="service-description-modern">{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                <div className="service-card-footer">
                  <button className="service-btn">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="services-cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how our IT services can help you achieve your goals and drive growth.</p>
          <div className="cta-buttons">
            <button 
              className="service-btn primary-btn"
              onClick={() => window.location.href = 'mailto:Connect@ftebtech.com'}
            >
              Get Started Today
            </button>
            <button 
              className="service-btn secondary-btn"
              onClick={() => window.location.href = 'tel:+971588481295'}
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;