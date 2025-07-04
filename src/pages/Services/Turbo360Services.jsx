import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate/ServicePageTemplate';
import turbo360Logo from '../../assets/images/ProductLogos/Turbo360.png';

const Turbo360Services = () => {
  const serviceData = {
    title: "Turbo360 Management Platform",
    subtitle: "Complete Azure & Office 365 Governance Solution",
    description: "Streamline your cloud operations with Turbo360's comprehensive management platform. Monitor, govern, and optimize your Azure and Office 365 environments with advanced analytics and automation.",
    logo: turbo360Logo,
    heroGradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    
    stats: [
      { number: "200+", label: "Managed Tenants" },
      { number: "99.9%", label: "Platform Uptime" },
      { number: "45%", label: "Cost Savings" }
    ],

    services: [
      {
        title: "Azure Resource Management",
        description: "Comprehensive monitoring and management of Azure resources with real-time insights and automated governance.",
        features: ["Resource Monitoring", "Cost Analytics", "Compliance Tracking", "Automated Policies"]
      },
      {
        title: "Office 365 Governance",
        description: "Complete governance solution for Office 365 with user management, security monitoring, and compliance reporting.",
        features: ["User Lifecycle", "Security Monitoring", "License Management", "Compliance Reports"]
      },
      {
        title: "Cloud Cost Optimization",
        description: "Advanced cost management tools to optimize your cloud spending with detailed analytics and recommendations.",
        features: ["Cost Analytics", "Budget Alerts", "Resource Optimization", "Spending Forecasts"]
      },
      {
        title: "Security & Compliance",
        description: "Comprehensive security monitoring and compliance management for your cloud environment.",
        features: ["Security Dashboard", "Threat Detection", "Compliance Audits", "Risk Assessment"]
      },
      {
        title: "Automated Workflows",
        description: "Streamline operations with automated workflows for provisioning, deprovisioning, and lifecycle management.",
        features: ["User Provisioning", "Resource Automation", "Workflow Designer", "Process Optimization"]
      },
      {
        title: "Analytics & Reporting",
        description: "Detailed analytics and customizable reports to gain insights into your cloud environment performance.",
        features: ["Custom Dashboards", "Performance Metrics", "Usage Analytics", "Executive Reports"]
      }
    ],

    benefits: [
      {
        title: "Centralized Management",
        description: "Manage all your Azure and Office 365 resources from a single, unified platform."
      },
      {
        title: "Cost Optimization",
        description: "Reduce cloud costs by up to 45% with intelligent resource optimization and monitoring."
      },
      {
        title: "Enhanced Security",
        description: "Proactive security monitoring with real-time threat detection and compliance management."
      },
      {
        title: "Operational Efficiency",
        description: "Automate routine tasks and streamline operations with intelligent workflow automation."
      }
    ],

    process: [
      {
        step: "01",
        title: "Environment Assessment",
        description: "Comprehensive analysis of your current Azure and Office 365 environment and requirements."
      },
      {
        step: "02",
        title: "Platform Configuration",
        description: "Configure Turbo360 platform with custom dashboards, policies, and automation rules."
      },
      {
        step: "03",
        title: "Integration & Deployment",
        description: "Seamless integration with your existing systems and deployment of monitoring solutions."
      },
      {
        step: "04",
        title: "Optimization & Support",
        description: "Continuous optimization and 24/7 support to ensure maximum platform efficiency."
      }
    ],

    technologies: [
      "Azure Resource Manager",
      "Office 365 APIs",
      "PowerShell Automation",
      "Azure Monitor",
      "Microsoft Graph",
      "Azure Policy",
      "Power BI Integration",
      "REST APIs"
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default Turbo360Services;