import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate/ServicePageTemplate';
import azureLogo from '../../assets/images/ProductLogos/azure.jpg';

const AzureServices = () => {
  const serviceData = {
    title: "Microsoft Azure Services",
    subtitle: "Complete Cloud Infrastructure Solutions",
    description: "Transform your business with enterprise-grade Azure cloud solutions. From migration to optimization, we provide end-to-end cloud services that ensure scalability, security, and cost-effectiveness.",
    logo: azureLogo,
    heroGradient: "linear-gradient(135deg, #0078d4 0%, #005a9e 100%)",
    
    stats: [
      { number: "500+", label: "Cloud Migrations" },
      { number: "99.9%", label: "Uptime SLA" },
      { number: "40%", label: "Cost Reduction" }
    ],

    services: [
      {
        title: "Cloud Migration & Strategy",
        description: "Seamless migration of your existing infrastructure to Azure with minimal downtime and maximum efficiency.",
        features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Hybrid Cloud Setup"]
      },
      {
        title: "Infrastructure as a Service (IaaS)",
        description: "Scalable virtual machines, networks, and storage solutions tailored to your business requirements.",
        features: ["Virtual Machines", "Virtual Networks", "Load Balancers", "Storage Solutions"]
      },
      {
        title: "Platform as a Service (PaaS)",
        description: "Accelerate development with managed services including databases, web apps, and container orchestration.",
        features: ["Azure App Service", "Azure SQL Database", "Azure Kubernetes Service", "Azure Functions"]
      },
      {
        title: "DevOps & Automation",
        description: "Streamline your development lifecycle with CI/CD pipelines and infrastructure as code.",
        features: ["Azure DevOps", "GitHub Actions", "Terraform", "ARM Templates"]
      },
      {
        title: "Security & Compliance",
        description: "Enterprise-grade security with Azure Security Center and compliance management.",
        features: ["Azure Security Center", "Key Vault", "Azure AD", "Compliance Management"]
      },
      {
        title: "Monitoring & Optimization",
        description: "Continuous monitoring and cost optimization to ensure peak performance and efficiency.",
        features: ["Azure Monitor", "Cost Management", "Performance Tuning", "Resource Optimization"]
      }
    ],

    benefits: [
      {
        title: "Scalability",
        description: "Scale resources up or down based on demand with automatic scaling capabilities."
      },
      {
        title: "Cost Efficiency",
        description: "Pay only for what you use with flexible pricing models and cost optimization tools."
      },
      {
        title: "Security",
        description: "Enterprise-grade security with built-in threat protection and compliance certifications."
      },
      {
        title: "Reliability",
        description: "99.9% uptime SLA with global data centers and disaster recovery capabilities."
      }
    ],

    process: [
      {
        step: "01",
        title: "Assessment",
        description: "Comprehensive analysis of your current infrastructure and business requirements."
      },
      {
        step: "02",
        title: "Strategy",
        description: "Develop a customized cloud migration and implementation strategy."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Execute the migration with minimal disruption to your business operations."
      },
      {
        step: "04",
        title: "Optimization",
        description: "Continuous monitoring and optimization for performance and cost efficiency."
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