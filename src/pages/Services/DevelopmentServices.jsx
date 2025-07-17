import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate/ServicePageTemplate';
import developmentLogo from '../../assets/images/ProductLogos/Development.png';

const DevelopmentServices = () => {
  const serviceData = {
    title: "Custom Development Services",
    subtitle: "Building Tomorrow's Digital Solutions Today",
    description: "Create powerful, scalable applications with our expert development team. From web applications to mobile apps, we deliver cutting-edge solutions that drive business growth.",
    logo: developmentLogo,
    heroGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    
    stats: [
      { number: "200+", label: "Applications Built" },
      { number: "98%", label: "Client Satisfaction" },
      { number: "24/7", label: "Support Available" }
    ],

    services: [
      {
        title: "Web Application Development",
        description: "Modern, responsive web applications built with the latest technologies and frameworks.",
        features: ["React/Angular/Vue.js", "Node.js/Python/.NET", "Progressive Web Apps", "API Development"]
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android platforms.",
        features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"]
      },
      {
        title: "E-commerce Solutions",
        description: "Complete e-commerce platforms with payment integration and inventory management.",
        features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Processing"]
      },
      {
        title: "Enterprise Applications",
        description: "Custom enterprise software solutions to streamline business processes and operations.",
        features: ["ERP Systems", "CRM Solutions", "Workflow Automation", "Business Intelligence"]
      },
      {
        title: "API Development & Integration",
        description: "RESTful APIs and third-party integrations to connect your systems and services.",
        features: ["REST/GraphQL APIs", "Third-party Integration", "Microservices", "API Security"]
      },
      {
        title: "Cloud-Native Development",
        description: "Scalable cloud applications designed for modern infrastructure and deployment.",
        features: ["Containerization", "Serverless Architecture", "CI/CD Pipelines", "Auto-scaling"]
      }
    ],

    benefits: [
      {
        title: "Scalable Architecture",
        description: "Build applications that grow with your business using modern, scalable architectures."
      },
      {
        title: "Latest Technologies",
        description: "Leverage cutting-edge technologies and frameworks for optimal performance."
      },
      {
        title: "Agile Development",
        description: "Fast, iterative development process with regular feedback and updates."
      },
      {
        title: "Quality Assurance",
        description: "Comprehensive testing and quality assurance to ensure reliable, bug-free applications."
      }
    ],

    process: [
      {
        step: "01",
        title: "Requirements",
        description: "Gather and analyze requirements to understand your business needs and goals."
      },
      {
        step: "02",
        title: "Design",
        description: "Create user experience designs and technical architecture specifications."
      },
      {
        step: "03",
        title: "Development",
        description: "Build the application using agile methodologies with regular progress updates."
      },
      {
        step: "04",
        title: "Deployment",
        description: "Deploy to production with ongoing maintenance and support services."
      }
    ],

    technologies: [
      "React.js",
      "Node.js",
      "Python",
      "React Native",
      "Flutter",
      "AWS/Azure",
      "Docker",
      "Kubernetes"
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default DevelopmentServices;