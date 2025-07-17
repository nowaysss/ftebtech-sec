import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../Icons/IconSystem';
import '../../styles/components/Counter/Counter.scss';

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const counterData = [
    {
      icon: "Check",
      endValue: 500,
      label: "Projects Completed",
      suffix: "+",
      description: "Successfully delivered projects"
    },
    {
      icon: "Users",
      endValue: 98,
      label: "Client Satisfaction",
      suffix: "%",
      description: "Happy clients worldwide"
    },
    {
      icon: "Award",
      endValue: 10,
      label: "Years Experience",
      suffix: "+",
      description: "In technology solutions"
    },
    {
      icon: "Settings",
      endValue: 24,
      label: "Support Available",
      suffix: "/7",
      description: "Round the clock assistance"
    }
  ];

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Counter animation logic
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    counterData.forEach((item, index) => {
      let currentStep = 0;
      const increment = item.endValue / steps;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(
          Math.round(increment * currentStep),
          item.endValue
        );

        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = currentValue;
          return newCounters;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    });
  }, [isVisible]);

  return (
    <section className="counter-section section scroll-animate" data-animation="fade-in" ref={sectionRef}>
      <div className="container">
        <div className="section-titles scroll-animate" data-animation="slide-up" data-duration="slow">
          <h6 className="counter-subtitle scroll-animate" data-animation="fade-in" data-delay="100">OUR ACHIEVEMENTS</h6>
          <h2 className="counter-title scroll-animate" data-animation="slide-up" data-delay="200">Numbers That Speak Our Success</h2>
          <p className="counter-description scroll-animate" data-animation="slide-up" data-delay="300">
            We take pride in delivering exceptional results and building lasting relationships 
            with our clients through innovative technology solutions.
          </p>
        </div>

        <div className="counter-grid scroll-animate-container">
          {counterData.map((item, index) => (
            <div 
              key={index} 
              className={`counter-item scroll-animate ${isVisible ? 'animate' : ''}`}
              data-animation="zoom-in"
              data-delay={`${index * 150 + 400}`}
            >
              <div className="counter-icon-wrapper">
                <div className="icon-container icon-container-xl icon-container-primary">
                  <Icon name={item.icon} size={40} />
                </div>
              </div>
              
              <div className="counter-content">
                <div className="counter-number">
                  <span className="number">{counters[index]}</span>
                  <span className="suffix">{item.suffix}</span>
                </div>
                <h3 className="counter-label">{item.label}</h3>
                <p className="counter-description">{item.description}</p>
              </div>

              <div className="counter-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Background decorative elements */}
        <div className="counter-bg-decoration">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-pattern"></div>
        </div>
      </div>
    </section>
  );
};

export default Counter;