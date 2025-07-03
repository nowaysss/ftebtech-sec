import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate/ServicePageTemplate';
import dynamicsLogo from '../../assets/images/ProductLogos/Dynamics-365.png';

const Dynamics365Services = () => {
  const serviceData = {
    title: "Dynamics 365 Implementation",
    subtitle: "Intelligent Business Applications for Modern Enterprises",
    description: "Transform your business operations with comprehensive Dynamics 365 ERP and CRM solutions tailored to your industry needs and business processes.",
    logo: dynamicsLogo,
    heroGradient: "linear-gradient(135deg, #742774 0%, #9c4a9c 100%)",
    
    stats: [
      { number: "150+", label: "D365 Implementations" },
      { number: "95%", label: "User Satisfaction" },
      { number: "60%", label: "Process Efficiency Gain" }
    ],

    services: [
      {
        title: "Dynamics 365 Business Central",
        description: "Complete ERP solution for small to medium businesses with financial management and operations.",
        features: ["Financial Management", "Supply Chain", "Project Management", "Manufacturing"]
      },
      {
        title: "Dynamics 365 Sales",
        description: "Comprehensive CRM solution to manage your sales pipeline and customer relationships.",
        features: ["Lead Management", "Opportunity Tracking", "Sales Analytics", "Mobile CRM"]
      },
      {
        title: "Dynamics 365 Customer Service",
        description: "Deliver exceptional customer service with omnichannel support and case management.",
        features: ["Case Management", "Knowledge Base", "Omnichannel Support", "Service Analytics"]
      },
      {
        title: "Dynamics 365 Field Service",
        description: "Optimize field operations with intelligent scheduling and mobile workforce management.",
        features: ["Work Order Management", "Resource Scheduling", "Mobile App", "IoT Integration"]
      },
      {
        title: "Power Platform Integration",
        description: "Extend Dynamics 365 capabilities with custom apps, workflows, and business intelligence.",
        features: ["Power Apps", "Power Automate", "Power BI", "Custom Development"]
      },
      {
        title: "Data Migration & Integration",
        description: "Seamless data migration from legacy systems with ongoing integration support.",
        features: ["Data Migration", "System Integration", "API Development", "Data Synchronization"]
      }
    ],

    benefits: [
      {
        title: "Unified Platform",
        description: "Integrate all business processes on a single, unified platform for better visibility."
      },
      {
        title: "AI-Powered Insights",
        description: "Leverage artificial intelligence for predictive analytics and intelligent recommendations."
      },
      {
        title: "Scalable Solution",
        description: "Scale your solution as your business grows with flexible licensing options."
      },
      {
        title: "Industry Specific",
        description: "Industry-specific solutions tailored to your business requirements and compliance needs."
      }
    ],

    process: [
      {
        step: "01",
        title: "Discovery",
        description: "Analyze business processes and requirements to design the optimal solution."
      },
      {
        step: "02",
        title: "Design",
        description: "Create detailed system design and configuration specifications."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Deploy and configure Dynamics 365 with custom development as needed."
      },
      {
        step: "04",
        title: "Go-Live Support",
        description: "Provide comprehensive support during go-live and post-implementation phases."
      }
    ],

    technologies: [
      "Dynamics 365 Business Central",
      "Dynamics 365 Sales",
      "Dynamics 365 Customer Service",
      "Dynamics 365 Field Service",
      "Power Platform",
      "Azure Integration Services",
      "Common Data Service",
      "Microsoft Flow"
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default Dynamics365Services;