import React, { useState, useEffect } from "react";
import "../../styles/components/ServicesSection/ServicesSection.scss";
import { Icon } from '../Icons/IconSystem';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation , Pagination , Autoplay} from 'swiper/modules';

const services = [
  {
    icon: "Server",
    title: "IT Management",
    desc: "It's possible to simultaneously manage and transform information from one server to another."
  },
  {
    icon: "Shield",
    title: "Data Security",
    desc: "Back up your database, store in a safe and secure place while still maintaining its accessibility."
  },
  {
    icon: "Analytics",
    title: "Business Reform",
    desc: "We propose feasible & practical plans for successfully transform businesses based on their needs."
  },
  {
    icon: "Network",
    title: "Infrastructure Plan",
    desc: "Mitech takes into account all conditions and budgets needed for building infrastructure plan."
  },
  {
    icon: "Shield",
    title: "Firewall Advance",
    desc: "Enhancing the strength and security of firewalls to protect online data from malicious sources."
  },
  {
    icon: "Settings",
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
      <h2>
        Preparing for your success,<br />
        we provide <span >truly prominent IT solutions.</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          fadeEffect={{ crossFade: true } }
          centeredSlides={true}
          loop={true}
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
                opacity: isVisible ? 1 : 0,
                transform: hoveredIndex === idx ? 'translateY(-10px)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`icon-container icon-container-lg ${hoveredIndex === idx ? 'icon-container-primary' : 'icon-container-secondary'}`}>
                <Icon name={service.icon} size={32} />
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
                  <Icon name="ArrowRight" size={16} className="button-icon" />
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