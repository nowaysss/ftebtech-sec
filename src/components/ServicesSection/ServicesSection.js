import React, { useState, useEffect } from "react";
import "../../styles/components/ServicesSection/ServicesSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faServer, 
  faShieldAlt, 
  faChartLine, 
  faSitemap, 
  faLock, 
  faDesktop 
} from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation , Pagination , Autoplay} from 'swiper/modules';

const services = [
  {
    icon: faServer,
    title: "IT Management",
    desc: "It's possible to simultaneously manage and transform information from one server to another."
  },
  {
    icon: faShieldAlt,
    title: "Data Security",
    desc: "Back up your database, store in a safe and secure place while still maintaining its accessibility."
  },
  {
    icon: faChartLine,
    title: "Business Reform",
    desc: "We propose feasible & practical plans for successfully transform businesses based on their needs."
  },
  {
    icon: faSitemap,
    title: "Infrastructure Plan",
    desc: "Mitech takes into account all conditions and budgets needed for building infrastructure plan."
  },
  {
    icon: faLock,
    title: "Firewall Advance",
    desc: "Enhancing the strength and security of firewalls to protect online data from malicious sources."
  },
  {
    icon: faDesktop,
    title: "Desktop Computing",
    desc: "Programming is taken care of by our experienced and professional specialist in IT management."
  }
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.services-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSlideChange = (swiper) => {
    setHoveredIndex(swiper.realIndex);
  };

  return (
    <section className="services-section">
      <h2 style={{
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '2.5rem',
        marginBottom: 40,
        letterSpacing: 1,
        animation: isVisible ? 'fadeInDown 1s' : 'none',
        opacity: isVisible ? 1 : 0,
      }}>
        Preparing for your success,<br />
        we provide <span style={{ 
          background: 'linear-gradient(135deg, #007bff, #00a0ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>truly prominent IT solutions.</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          navigation={true}
          speed={350}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        className="services-swiper"
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => setHoveredIndex(swiper.realIndex)}
      >
        {services.map((service, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="service-card animated-service-card"
              style={{
                animation: isVisible ? `fadeInUp 0.7s ${0.1 * idx + 0.2}s both` : 'none',
                opacity: isVisible ? 1 : 0,
                transform: hoveredIndex === idx ? 'translateY(-10px)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`icon-wrapper ${hoveredIndex === idx ? 'floating-icon' : ''}`}>
                <FontAwesomeIcon
                  icon={service.icon}
                  style={{
                    width: 40,
                    height: 40,
                    color: '#007bff',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredIndex === idx ? 'scale(1.2) rotate(5deg)' : 'scale(1) rotate(0deg)'
                  }}
                />
              </div>
              <h3 className="title-highlight">{service.title}</h3>
              <p>{service.desc}</p>
              
              <div style={{
                marginTop: 'auto',
                paddingTop: 20,
                opacity: hoveredIndex === idx ? 1 : 0,
                transform: hoveredIndex === idx ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <button
                  className="service-btn"
                  onClick={() => {
                    console.log(`Clicked ${service.title}`);
                  }}
                  style={{
                    transform: hoveredIndex === idx ? 'scale(1.05)' : 'scale(1)'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesSection;
