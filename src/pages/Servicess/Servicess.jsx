import React, { useEffect } from "react";
import "../../styles/pages/Servicess/Servicess.scss";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { Icon } from '../../components/Icons/IconSystem';
import men from "../../assets/men.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import ServiceDescription from "../../components/Services/ServiceDescription";
import useServicessScroll from "../../hooks/useServicessScroll";

const services = [
  {
    icon: "Server",
    title: "End-to-End Implementation",
    desc: "From planning to deployment and optimization—we own every phase with precision and expertise.",
    link: "#implementation"
  },
  {
    icon: "Shield",
    title: "Cloud Strategy & Security",
    desc: "Align workloads with business goals while ensuring robust security measures and cost optimization.",
    link: "#strategy"
  },
  {
    icon: "Analytics",
    title: "Business Transformation",
    desc: "Strategic solutions and practical roadmaps for successful digital transformation initiatives.",
    link: "#transformation"
  },
  {
    icon: "Network",
    title: "Project Excellence",
    desc: "100% success rate with zero overruns—our proven track record speaks for itself.",
    link: "#excellence"
  },
  {
    icon: "Shield",
    title: "Security First Design",
    desc: "Zero-trust architecture with comprehensive security features built into every solution.",
    link: "#security"
  },
  {
    icon: "Settings",
    title: "Cost Optimization",
    desc: "Strategic resource allocation ensuring maximum value from your technology investments.",
    link: "#optimization"
  }
];

const ITServices = () => {
  const isVisible = useServicessScroll();

  useEffect(() => {
    // Add smooth scroll behavior
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const header = document.querySelector('.itservices-title');
      if (header) {
        header.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="it-services-page">
      <PageWrapper />

      <ServiceDescription />
      
      <div className="itservices-section">
        <div className="section-title">
          <span className="subtitle">OUR SERVICES</span>
          <h2>
            Transforming Businesses Through<br />
            Technology Innovation
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          loop={true}
          pagination={{ clickable: true }}
          speed={500}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="services-swiper"
        >
          {services.map((service, idx) => (
            <SwiperSlide
              key={idx}
              className={`service-slide${isVisible ? " visible" : ""}`}
              style={{
                transitionDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="service-card">
                <div className="icon-container icon-container-lg icon-container-primary">
                  <Icon name={service.icon} size={32} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <span className="service-arrow">
                  <Icon name="ArrowRight" size={18} />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-image">
            <img src={men} alt="IT Support Representative" loading="lazy" />
          </div>
          <div className="contact-info-content">
            <div className="rating-value">4.9/5.0</div>
            <div className="rating-stars">★★★★★</div>
            <div className="rating-text">
              Trusted by 700+ customers for 3200+ successful projects
            </div>
            
            <div className="contact-method">
              <div className="icon-container icon-container-sm icon-container-primary">
                <Icon name="Phone" size={20} />
              </div>
              <div className="contact-text">
                <div className="contact-label">Get Expert Advice</div>
                <a href="tel:+971588481295" className="contact-value">
                  +971 58 848 1295
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon-container icon-container-sm icon-container-primary">
                <Icon name="Email" size={20} />
              </div>
              <div className="contact-text">
                <div className="contact-label">Email Us</div>
                <a href="mailto:Connect@ftebtech.com" className="contact-value">
                  Connect@ftebtech.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServices;