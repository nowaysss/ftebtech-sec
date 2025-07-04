import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate/ServicePageTemplate';
import azureLogo from '../../assets/images/ProductLogos/azure.jpg';

const AzureServices = () => {
  const serviceData = {
    title: "Microsoft Azure Services",
    subtitle: "Complete Azure Cloud Infrastructure Solutions",
    description: "Transform your business with enterprise-grade Azure cloud solutions. From migration to optimization, we provide end-to-end Azure services that ensure scalability, security, and cost-effectiveness.",
    logo: azureLogo,
    heroGradient: "linear-gradient(135deg, #0078d4 0%, #005a9e 100%)",
    
    stats: [
      { number: "300+", label: "Azure Migrations" },
      { number: "99.9%", label: "Uptime SLA" },
      { number: "35%", label: "Cost Reduction" }
    ],

    services: [
      {
        title: "Azure Infrastructure Services",
        description: "Complete Azure IaaS solutions including virtual machines, networking, and storage with high availability.",
        features: ["Azure Virtual Machines", "Virtual Networks", "Load Balancers", "Azure Storage", "Backup & Recovery", "Site Recovery"]
      },
      {
        title: "Azure Platform Services",
        description: "Leverage Azure PaaS offerings for faster development and deployment with managed services.",
        features: ["Azure App Service", "Azure SQL Database", "Azure Functions", "Azure Logic Apps", "API Management", "Service Bus"]
      },
      {
        title: "Azure DevOps & Automation",
        description: "Streamline development with Azure DevOps, CI/CD pipelines, and infrastructure automation.",
        features: ["Azure DevOps", "Azure Pipelines", "ARM Templates", "Azure Resource Manager", "PowerShell DSC", "Azure Automation"]
      },
      {
        title: "Azure Security & Compliance",
        description: "Enterprise-grade security with Azure Security Center and comprehensive compliance management.",
        features: ["Azure Security Center", "Azure Sentinel", "Key Vault", "Azure AD", "Conditional Access", "Compliance Manager"]
      },
      {
        title: "Azure AI & Analytics",
        description: "Harness the power of Azure AI and analytics services for intelligent business insights.",
        features: ["Azure Machine Learning", "Cognitive Services", "Azure Synapse", "Power BI", "Azure Data Factory", "Stream Analytics"]
      },
      {
        title: "Azure Monitoring & Management",
        description: "Comprehensive monitoring and management tools for optimal Azure performance and cost control.",
        features: ["Azure Monitor", "Log Analytics", "Application Insights", "Cost Management", "Azure Advisor", "Resource Health"]
      }
    ],

    benefits: [
      {
        title: "Enterprise Scalability",
        description: "Scale resources up or down based on demand with Azure's global infrastructure and auto-scaling capabilities."
      },
      {
        title: "Cost Efficiency",
        description: "Optimize costs with Azure's flexible pricing models, reserved instances, and intelligent cost management tools."
      },
      {
        title: "Advanced Security",
        description: "Multi-layered security with Azure Security Center, threat protection, and compliance certifications."
      },
      {
        title: "High Availability",
        description: "99.9% uptime SLA with global data centers, availability zones, and disaster recovery capabilities."
      }
    ],

    process: [
      {
        step: "01",
        title: "Azure Assessment",
        description: "Comprehensive analysis of your current infrastructure and Azure migration requirements."
      },
      {
        step: "02",
        title: "Azure Strategy",
        description: "Develop a customized Azure cloud strategy and implementation roadmap."
      },
      {
        step: "03",
        title: "Azure Implementation",
        description: "Execute the Azure migration and deployment with minimal disruption to business operations."
      },
      {
        step: "04",
        title: "Azure Optimization",
        description: "Continuous monitoring and optimization for performance, security, and cost efficiency."
      }
    ],

    technologies: [
      "Azure Virtual Machines",
      "Azure App Service",
      "Azure SQL Database",
      "Azure Kubernetes Service",
      "Azure DevOps",
      "Azure Security Center",
      "Azure Monitor",
      "Azure Active Directory"
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default AzureServices;