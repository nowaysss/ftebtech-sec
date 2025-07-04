import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate/ServicePageTemplate';
import m365Logo from '../../assets/images/ProductLogos/m365.png';

const Microsoft365Services = () => {
  const serviceData = {
    title: "Microsoft 365 Solutions",
    subtitle: "Empower Your Workforce with Modern Collaboration",
    description: "Transform your workplace with comprehensive Microsoft 365 implementation, security configuration, and ongoing support for maximum productivity and collaboration.",
    logo: m365Logo,
    heroGradient: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
    
    stats: [
      { number: "300+", label: "M365 Deployments" },
      { number: "99.5%", label: "User Adoption Rate" },
      { number: "50%", label: "Productivity Increase" }
    ],

    services: [
      {
        title: "Email Migration & Setup",
        description: "Seamless migration from legacy email systems to Exchange Online with zero data loss.",
        features: ["Exchange Online Setup", "Email Migration", "Mailbox Configuration", "Mobile Device Setup"]
      },
      {
        title: "Microsoft Teams Implementation",
        description: "Complete Teams deployment with custom configurations for optimal collaboration.",
        features: ["Teams Setup", "Channel Configuration", "Meeting Policies", "Phone System Integration"]
      },
      {
        title: "SharePoint & OneDrive",
        description: "Document management and collaboration platform setup with security and governance.",
        features: ["SharePoint Sites", "Document Libraries", "OneDrive Sync", "Permission Management"]
      },
      {
        title: "Security & Compliance",
        description: "Advanced security features and compliance management to protect your organization.",
        features: ["Azure AD Security", "Conditional Access", "DLP Policies", "Compliance Center"]
      },
      {
        title: "Power Platform Integration",
        description: "Automate workflows and create custom solutions with Power Apps, Power Automate, and Power BI.",
        features: ["Power Apps", "Power Automate", "Power BI", "Custom Connectors"]
      },
      {
        title: "Training & Support",
        description: "Comprehensive user training and ongoing support to ensure successful adoption.",
        features: ["User Training", "Admin Training", "Documentation", "24/7 Support"]
      }
    ],

    benefits: [
      {
        title: "Enhanced Collaboration",
        description: "Seamless collaboration with integrated tools for communication and file sharing."
      },
      {
        title: "Improved Security",
        description: "Advanced security features including multi-factor authentication and threat protection."
      },
      {
        title: "Increased Productivity",
        description: "Streamlined workflows and automation to boost team productivity."
      },
      {
        title: "Cost Savings",
        description: "Reduce IT costs with cloud-based solutions and simplified management."
      }
    ],

    process: [
      {
        step: "01",
        title: "Planning",
        description: "Assess current environment and plan the M365 implementation strategy."
      },
      {
        step: "02",
        title: "Migration",
        description: "Migrate email, files, and applications to Microsoft 365 platform."
      },
      {
        step: "03",
        title: "Configuration",
        description: "Configure security settings, policies, and user permissions."
      },
      {
        step: "04",
        title: "Training",
        description: "Provide comprehensive training and ongoing support for users."
      }
    ],

    technologies: [
      "Exchange Online",
      "Microsoft Teams",
      "SharePoint Online",
      "OneDrive for Business",
      "Power Platform",
      "Azure Active Directory",
      "Microsoft Intune",
      "Security & Compliance Center"
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default Microsoft365Services;