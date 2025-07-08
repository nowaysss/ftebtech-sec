import React from 'react';
import HeroSection from '../../components/Hero/HeroSection';
import About from '../../components/About/About';
import Features from '../../components/Features/Features';
import CaseStudies from '../../components/CaseStudies/CaseStudies';
import Counter from '../../components/Counter/Counter';
import Contact from '../../components/Contact/Contact';
import ServicesSection from '../../components/ServicesSection/ServicesSection';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <About />
      <CaseStudies />
      <Counter />
      <Features />
      <ServicesSection/>
      <Contact />
    </div>
  );
};

export default HomePage;