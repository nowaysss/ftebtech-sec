import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate/ServicePageTemplate';
import erosourceLogo from '../../assets/images/ProductLogos/erosource.png';

const ErosourceServices = () => {
  const serviceData = {
    title: "Erosource Enterprise Solutions",
    subtitle: "Advanced ERP & Business Intelligence Platform",
    description: "Transform your business operations with Erosource's comprehensive enterprise resource planning and business intelligence solutions. Streamline processes, gain insights, and drive data-driven decisions.",
    logo: erosourceLogo,
    heroGradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    
    stats: [
      { number: "150+", label: "ERP Implementations" },
      { number: "95%", label: "Process Efficiency" },
      { number: "60%", label: "Decision Speed" }
    ],

    services: [
      {
        title: "ERP Implementation",
        description: "Complete enterprise resource planning implementation with modules for finance, HR, supply chain, and operations.",
        features: ["Financial Management", "Human Resources", "Supply Chain", "Manufacturing"]
      },
      {
        title: "Business Intelligence",
        description: "Advanced analytics and reporting platform to transform data into actionable business insights.",
        features: ["Data Analytics", "Custom Reports", "Real-time Dashboards", "Predictive Analytics"]
      },
      {
        title: "Process Automation",
        description: "Automate business processes to improve efficiency, reduce errors, and accelerate operations.",
        features: ["Workflow Automation", "Document Management", "Approval Processes", "Task Scheduling"]
      },
      {
        title: "Data Integration",
        description: "Seamless integration with existing systems and third-party applications for unified data management.",
        features: ["API Integration", "Data Migration", "System Connectivity", "Real-time Sync"]
      },
      {
        title: "Custom Development",
        description: "Tailored solutions and custom modules to meet specific business requirements and industry needs.",
        features: ["Custom Modules", "Industry Solutions", "API Development", "System Extensions"]
      },
      {
        title: "Training & Support",
        description: "Comprehensive training programs and ongoing support to ensure successful adoption and optimization.",
        features: ["User Training", "Admin Training", "24/7 Support", "System Optimization"]
      }
    ],

    benefits: [
      {
        title: "Streamlined Operations",
        description: "Integrate all business processes into a single platform for improved efficiency and visibility."
      },
      {
        title: "Data-Driven Decisions",
        description: "Make informed decisions with real-time analytics and comprehensive business intelligence."
      },
      {
        title: "Scalable Solution",
        description: "Grow your business with a platform that scales with your needs and requirements."
      },
      {
        title: "Industry Expertise",
        description: "Benefit from industry-specific solutions and best practices tailored to your sector."
      }
    ],

    process: [
      {
        step: "01",
        title: "Business Analysis",
        description: "Comprehensive analysis of business processes, requirements, and existing systems."
      },
      {
        step: "02",
        title: "Solution Design",
        description: "Design customized ERP solution with modules and features aligned to business needs."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Phased implementation approach with data migration, system configuration, and testing."
      },
      {
        step: "04",
        title: "Go-Live & Support",
        description: "Smooth go-live transition with comprehensive training and ongoing support services."
      }
    ],

    technologies: [
      "Microsoft SQL Server",
      "Power BI",
      ".NET Framework",
      "Azure Cloud",
      "REST APIs",
      "Crystal Reports",
      "SharePoint Integration",
      "Office 365"
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default ErosourceServices;