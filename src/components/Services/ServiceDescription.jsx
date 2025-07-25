import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/Services/Services.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Import existing logos from your project
import azureLogo from '../../assets/images/ProductLogos/azure.jpg';
import m365Logo from '../../assets/images/ProductLogos/m365.png';
import dynamicsLogo from '../../assets/images/ProductLogos/Dynamics-365.png';
import developmentLogo from '../../assets/images/ProductLogos/Development.png';
import microsoftLogo from '../../assets/images/ProductLogos/Microsoft-Logo.png';
import awsLogo from "../../assets/images/ProductLogos/aws.jpg";
import erosourceLogo from "../../assets/images/ProductLogos/erosource.png";
import googlecloudLogo from "../../assets/images/ProductLogos/googlecloud.png";
import linuxLogo from "../../assets/images/ProductLogos/linux.png";
import mlLogo from "../../assets/images/ProductLogos/Machine_Learning_Logo.png";
import pythonLogo from "../../assets/images/ProductLogos/Python.png";
import reactLogo from "../../assets/images/ProductLogos/react-logo.png";
import terraformLogo from "../../assets/images/ProductLogos/terraform.png";
import turbo360Logo from "../../assets/images/ProductLogos/Turbo360.png";
import adevops from "../../assets/images/ProductLogos/a-devops.png";
import Cybersecurity from "../../assets/images/ProductLogos/cyber.png";
import ITinfrastructureLogo from "../../assets/images/ProductLogos/it-infrastructure.png";

const ServiceDescription = () => {
  const navigate = useNavigate();

  const services = [
       {
      id: 'cloud-services',
      title: 'Cloud Services (Azure, AWS, GCP)',
      description: 'Complete multi-cloud infrastructure solutions. From migration to optimization, we handle your entire cloud journey across Azure, AWS, and Google Cloud with enterprise-grade security and scalability.',
      logo: azureLogo,
      features: ['Multi-Cloud Strategy', 'Cloud Migration', 'Infrastructure Setup', 'Cost Optimization'],
      path: '/services/cloud-services'
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
      id: 'infrastructure',
      title: 'ICT',
      description: 'End-to-end infrastructure planning, implementation, and management for optimal performance, reliability, and business continuity.',
      logo: ITinfrastructureLogo,
      features: ['Network Setup', 'Server Management', 'Hardware Procurement', 'Monitoring'],
      path: '/services/infrastructure'
    },
        {
      id: 'security',
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive security strategies, advanced threat protection, and compliance management solutions.',
      logo: Cybersecurity,
      features: ['Security Assessment', 'Threat Protection', 'Compliance', '24/7 Monitoring'],
      path: '/services/security'
    },
  
        {
      id: 'turbo360',
      title: 'Turbo360 Management',
      description: 'Comprehensive Azure and Office 365 management platform for monitoring, governance, and optimization of your cloud environment.',
      logo: turbo360Logo,
      features: ['Cloud Monitoring', 'Governance', 'Cost Management', 'Performance Analytics'],
      path: '/services/turbo360'
    },
    {
      id: 'eresource',
      title: 'eresource Solutions',
      description: 'Advanced enterprise resource planning and business intelligence solutions to streamline operations and drive data-driven decisions.',
      logo: erosourceLogo,
      features: ['ERP Implementation', 'Business Intelligence', 'Data Analytics', 'Process Automation'],
      path: '/services/eresource'
    },
        {
      id: 'development',
      title: 'Custom Development',
      description: 'Build powerful web applications and business tools with modern technologies, ensuring scalability, performance, and user experience.',
      logo: developmentLogo,
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      path: '/services/development'
    },


  ];
 const productLogos = [
    { src: awsLogo, class: 'logo-aws', alt: 'AWS Logo' },
    { src: reactLogo, class: 'logo-react', alt: 'React Logo' },
    { src: azureLogo, class: 'logo-azure', alt: 'Azure Logo' },
    { src: developmentLogo, class: 'logo-development', alt: 'Development Logo' },
    { src: terraformLogo, class: 'logo-terraform', alt: 'Terraform Logo' },
    { src: googlecloudLogo, class: 'logo-googlecloud', alt: 'Google Cloud Logo' },
    { src: linuxLogo, class: 'logo-linux', alt: 'Linux Logo' },
    { src: m365Logo, class: 'logo-m365', alt: 'Microsoft 365 Logo' },
    { src: erosourceLogo, class: 'logo-erosource', alt: 'Erosource Logo' },
    { src: mlLogo, class: 'logo-ml', alt: 'Machine Learning Logo' },
    { src: dynamicsLogo, class: 'logo-dynamics', alt: 'Dynamics 365 Logo' },
    { src: pythonLogo, class: 'logo-python', alt: 'Python Logo' },
    { src: turbo360Logo, class: 'logo-turbo360', alt: 'Turbo360 Logo' },
    { src: adevops, class: 'logo-adevops', alt: 'adevops' },
    { src: microsoftLogo, class: 'logo-microsoft', alt: 'Microsoft Logo' },
  ];

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <div className="service-description-wrapper">
      <div className="services-hero-section scroll-animate" data-animation="fade-in">
        <div className="services-hero-content scroll-animate" data-animation="slide-up" data-duration="slow">
          <span className="services-subtitle scroll-animate" data-animation="fade-in" data-delay="100">OUR EXPERTISE</span>
          <h1 className="services-main-title scroll-animate" data-animation="slide-up" data-delay="200">
            Comprehensive IT Services for 
            <span className="highlight-text"> Modern Businesses</span>
          </h1>
          <p className="services-hero-description scroll-animate" data-animation="slide-up" data-delay="300">
            From cloud infrastructure to custom development, we provide end-to-end technology solutions 
            that drive innovation, enhance security, and accelerate your digital transformation journey.
          </p>
          <div className="services-stats scroll-animate-container">
            <div className="stat-item scroll-animate" data-animation="fade-in" data-delay="400">
              <span className="stat-number scroll-animate" data-animation="fade-in" data-delay="500">500+</span>
              <span className="stat-label scroll-animate" data-animation="fade-in" data-delay="600">Projects Delivered</span>
            </div>
            <div className="stat-item scroll-animate" data-animation="fade-in" data-delay="700">
              <span className="stat-number scroll-animate" data-animation="fade-in" data-delay="800">98%</span>
              <span className="stat-label scroll-animate" data-animation="fade-in" data-delay="900">Client Satisfaction</span>
            </div>
            <div className="stat-item scroll-animate" data-animation="fade-in" data-delay="1000">
              <span className="stat-number scroll-animate" data-animation="fade-in" data-delay="1100">10+</span>
              <span className="stat-label scroll-animate" data-animation="fade-in" data-delay="1200">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
      <section className="descriptions">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={2000}
          spaceBetween={30}
          slidesPerGroup={1}
          allowTouchMove={true}
          watchSlidesProgress={true}
          centeredSlides={true}
          grabCursor={true}
          navigation={false}
          keyboard={{
            enabled: true,
            onlyInViewport: false,

          }}

          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false
          }}
          className="product-logos-swiper"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 15 },
            480: { slidesPerView: 3, spaceBetween: 20 },
            640: { slidesPerView: 4, spaceBetween: 25 },
            768: { slidesPerView: 5, spaceBetween: 30 },
            1024: { slidesPerView: 6, spaceBetween: 35 },
            1200: { slidesPerView: 7, spaceBetween: 40 },
          }}
        >
          {[...productLogos].map((logo, idx) => (
            <SwiperSlide key={idx} className="logo-slide">
              <img
                src={logo.src}
                alt={logo.alt}
                className={logo.class}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="container services-grid-section scroll-animate-container">
        <div className="row">
          {services.map((service, index) => (
            <div key={service.id} className="col-md-6 col-sm-6 col-lg-4 mb-4 d-flex">
              <div 
                className="service-card-modern d-flex flex-column scroll-animate"
                data-animation="zoom-in"
                data-delay={`${1600 + index * 100}`}
                onClick={() => handleServiceClick(service.path)}
              >
                <div className="service-card-header scroll-animate" data-animation="fade-in" data-delay={`${1700 + index * 100}`}>
                  <div className="service-logo-wrapper scroll-animate" data-animation="slide-right" data-delay={`${1800 + index * 100}`}>
                    <img src={service.logo} alt={`${service.title} Logo`} className="service-logo" />
                  </div>
                  <h3 className="service-title-modern scroll-animate" data-animation="slide-up" data-delay={`${1900 + index * 100}`}>{service.title}</h3>
                </div>
                
                <p className="service-description-modern scroll-animate" data-animation="slide-up" data-delay={`${2000 + index * 100}`}>{service.description}</p>
                
                <div className="service-features scroll-animate" data-animation="slide-up" data-delay={`${2100 + index * 100}`}>
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag scroll-animate" data-animation="fade-in" data-delay={`${2200 + index * 100 + idx * 50}`}>{feature}</span>
                  ))}
                </div>
                
                <div className="service-card-footer scroll-animate" data-animation="fade-in" data-delay={`${2300 + index * 100}`}>
                  <button className="service-btn">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="services-cta-section scroll-animate" data-animation="fade-in" data-delay="2500">
        <div className="cta-content scroll-animate" data-animation="slide-up" data-delay="2600">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how our IT services can help you achieve your goals and drive growth.</p>
          <div className="cta-buttons scroll-animate" data-animation="zoom-in" data-delay="2700">
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
