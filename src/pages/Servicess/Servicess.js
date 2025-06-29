import React from "react";
import "../../styles/pages/Servicess/Servicess.css";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import men from "../../assets/men.png";
import {
  faServer,
  faShieldAlt,
  faChartLine,
  faSitemap,
  faLock,
  faDesktop,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import ServiceDescription from "../../components/Services/ServiceDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import awsLogo from "../../assets/images/ProductLogos/aws.jpg";
import azureLogo from "../../assets/images/ProductLogos/azure.jpg";
import developmentLogo from "../../assets/images/ProductLogos/Development.png";
import dynamicsLogo from "../../assets/images/ProductLogos/Dynamics-365.png";
import erosourceLogo from "../../assets/images/ProductLogos/erosource.png";
import googlecloudLogo from "../../assets/images/ProductLogos/googlecloud.jpg";
import linuxLogo from "../../assets/images/ProductLogos/linux.png";
import m365Logo from "../../assets/images/ProductLogos/m365.png";
import mlLogo from "../../assets/images/ProductLogos/Machine_Learning_Logo.png";
import microsoftLogo from "../../assets/images/ProductLogos/Microsoft-Logo.png";
import pythonLogo from "../../assets/images/ProductLogos/Python.png";
import reactLogo from "../../assets/images/ProductLogos/react-logo.png";
import terraformLogo from "../../assets/images/ProductLogos/terraform.png";
import turbo360Logo from "../../assets/images/ProductLogos/Turbo360.png";
import adevops from "../../assets/images/ProductLogos/a-devops.png";
import useServicessScroll from "../../hooks/useServicessScroll";

const services = [
  {
    icon: faServer,
    title: "End-to-End Implementation Excellence",
    desc: `From planning to deployment and optimization—we own every phase.`,
  },
  {
    icon: faShieldAlt,
    title: "Proven Cloud Strategy",
    desc: "We don't just move workloads to Azure—we align them with your business goals, cost models, and security posture.",
  },
  {
    icon: faChartLine,
    title: "Business Reform",
    desc: "We propose feasible & practical plans for successfully transform businesses based on their needs.",
  },
  {
    icon: faSitemap,
    title: "100% Project Success Rate",
    desc: "Our track record? Every Azure engagement delivered with zero overruns and zero surprises.",
  },
  {
    icon: faLock,
    title: "Secure-by-Design",
    desc: "Every build includes zero-trust principles, role-based access, policy enforcement, encryption, and monitoring.",
  },
  {
    icon: faDesktop,
    title: "Cost Optimization Experts",
    desc: "We right-size your Azure spend—pay only for what drives value.",
  },
];

const ITServices = () => {
  const isVisible = useServicessScroll();

  const productLogos = [
    { src: awsLogo, class: 'logo-aws', alt: 'AWS Logo' },
    { src: azureLogo, class: 'logo-azure', alt: 'Azure Logo' },
    { src: developmentLogo, class: 'logo-development', alt: 'Development Logo' },
    { src: dynamicsLogo, class: 'logo-dynamics', alt: 'Dynamics 365 Logo' },
    { src: erosourceLogo, class: 'logo-erosource', alt: 'Erosource Logo' },
    { src: googlecloudLogo, class: 'logo-googlecloud', alt: 'Google Cloud Logo' },
    { src: linuxLogo, class: 'logo-linux', alt: 'Linux Logo' },
    { src: m365Logo, class: 'logo-m365', alt: 'Microsoft 365 Logo' },
    { src: mlLogo, class: 'logo-ml', alt: 'Machine Learning Logo' },
    { src: microsoftLogo, class: 'logo-microsoft', alt: 'Microsoft Logo' },
    { src: pythonLogo, class: 'logo-python', alt: 'Python Logo' },
    { src: reactLogo, class: 'logo-react', alt: 'React Logo' },
    { src: terraformLogo, class: 'logo-terraform', alt: 'Terraform Logo' },
    { src: turbo360Logo, class: 'logo-turbo360', alt: 'Turbo360 Logo' },
    { src: adevops, class: 'logo-adevops', alt: 'adevops' },
  ];

  return (
    <div>
      <PageWrapper />

      <div className="itservices-hero-bg">
        <div className="itservices-hero-content">
          <h1 className="itservices-title">Our Services</h1>
        </div>
        <div className="itservices-hero-pattern"></div>
      </div>

      <section className="descriptions bg-light">
        {/* Logo Marquee Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1500}
          spaceBetween={30}
          slidesPerGroup={1}
          allowTouchMove={true}
          watchSlidesProgress={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="product-logos-swiper"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 15 },
            480: { slidesPerView: 3, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 25 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 35 },
            1200: { slidesPerView: 6, spaceBetween: 40 },
          }}
        >
          {[...productLogos, ...productLogos, ...productLogos].map((logo, idx) => (
            <SwiperSlide key={idx} className="logo-slide">
              <img
                src={logo.src}
                alt={logo.alt}
                className={`logo-img ${logo.class}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Service Description Component */}
        <ServiceDescription />
      </section>

      <div className="itservices-section">
        <div className="section-title">
          <span className="subtitle">WHAT WE OFFER</span>
          <h2>
            Transforming Businesses with <br />
            Advanced IT Solutions
          </h2>
        </div>
        {/* Second Slider - Services */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          speed={350}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
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
                <div className="icon-container">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="service-icon"
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <span className="service-arrow">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-image">
            <img src={men} alt="Support Representative" />
          </div>
          <div className="contact-info-content">
            <div className="rating-value">4.9/5.0</div>
            <div className="rating-stars">★★★★★</div>
            <div className="rating-text">
              by 700+ customers for 3200+ clients
            </div>
            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="contact-text">
                <div className="contact-label">Call for advice now!</div>
                <a href="tel:+971588481295" className="contact-value">
                  +971588481295
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="contact-text">
                <div className="contact-label">Say hello</div>
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