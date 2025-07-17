import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate/ServicePageTemplate';
import azureLogo from '../../assets/images/ProductLogos/googlecloud.png';

const CloudServices = () => {
  const serviceData = {
    title: "Multi-Cloud Services",
    subtitle: "Azure, AWS & Google Cloud Platform Solutions",
    description: "Transform your business with comprehensive multi-cloud infrastructure solutions. From migration to optimization, we provide end-to-end cloud services across Azure, AWS, and Google Cloud Platform that ensure scalability, security, and cost-effectiveness.",
    logo: azureLogo,
    heroGradient: "linear-gradient(136deg, rgb(21 73 146) 50%, rgb(48 173 233) 101%)",
    
    stats: [
      { number: "500+", label: "Cloud Migrations" },
      { number: "99.9%", label: "Uptime SLA" },
      { number: "40%", label: "Cost Reduction" }
    ],

    services: [
      {
        title: "Microsoft Azure Services",
        description: "Complete Azure cloud infrastructure with virtual machines, storage, networking, and advanced services like AI/ML and IoT.",
        features: ["Azure Virtual Machines", "Azure Storage", "Azure Networking", "Azure AI Services", "Azure DevOps", "Azure Security Center"]
      },
      {
        title: "Amazon Web Services (AWS)",
        description: "Comprehensive AWS solutions including EC2, S3, RDS, Lambda, and advanced analytics and machine learning services.",
        features: ["EC2 Instances", "S3 Storage", "RDS Databases", "Lambda Functions", "CloudFormation", "AWS Security Hub"]
      },
      {
        title: "Google Cloud Platform (GCP)",
        description: "Google Cloud services including Compute Engine, Cloud Storage, BigQuery, and cutting-edge AI/ML capabilities.",
        features: ["Compute Engine", "Cloud Storage", "BigQuery", "Cloud Functions", "Kubernetes Engine", "Cloud Security"]
      },
      {
        title: "Microsoft Azure Managed Services Partner",
        description: "As a trusted Managed Service Partner (MSP), we help businesses harness the full potential of Microsoft Azure with proactive management, optimization, and 24/7 support.",
        features: ["Cloud Strategy & Planning", "Azure Infrastructure Management", "Security & Compliance", "Backup & Disaster Recovery", "Monthly report"]
      },
      {
        title: "Cloud Migration Services",
        description: "Seamless migration from on-premises to cloud or between cloud providers with minimal downtime.",
        features: ["Assessment & Planning", "Data Migration", "Application Migration", "Testing & Validation", "Go-Live Support", "Post-Migration Optimization"]
      },
      {
        title: "DevOps & Automation",
        description: "Cloud-native DevOps practices with CI/CD pipelines, infrastructure as code, and automated deployment.",
        features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging", "Automated Testing", "Release Management"]
      }
    ],

    benefits: [
      {
        title: "Multi-Cloud Flexibility",
        description: "Avoid vendor lock-in with strategic multi-cloud architecture that leverages the best of each platform."
      },
      {
        title: "Cost Optimization",
        description: "Intelligent cost management across multiple cloud providers with automated optimization and monitoring."
      },
      {
        title: "Enhanced Security",
        description: "Enterprise-grade security with best practices across Azure, AWS, and GCP platforms."
      },
      {
        title: "Global Scalability",
        description: "Scale globally with multiple cloud regions and availability zones for optimal performance."
      }
    ],

    process: [
      {
        step: "01",
        title: "Assessment",
        description: "In-depth analysis of your existing environment, workloads, and business needs to identify the right Azure solutions."
      },
      {
        step: "02",
        title: "Planning Strategy",
        description: "Design a tailored cloud architecture, migration roadmap, and governance model aligning with your goals and compliance needs."
      },
      {
        step: "03",
        title: "Test Migration",
        description: "Perform pilot migrations in a controlled environment to validate configurations, performance, and risk mitigation strategies."
      },
      {
        step: "04",
        title: "Migration & Implementation",
        description: "Execute a full-scale migration with minimal disruption, provisioning all Azure resources and services under managed supervision."
      },
      {
        step: "05",
        title: "Optimization",
        description: "Ongoing cost management, performance tuning, security hardening, and 24/7 monitoring under our managed service model."
      }
    ],


    technologies: [
      "Microsoft Azure",
      "Amazon Web Services",
      "Google Cloud Platform",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Ansible",
      "Jenkins"
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default CloudServices;