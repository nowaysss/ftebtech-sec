import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate/ServicePageTemplate';
import microsoftLogo from '../../assets/images/ProductLogos/Microsoft-Logo.png';

const InfrastructureServices = () => {
  const serviceData = {
    title: "IT Infrastructure Services",
    subtitle: "Building Robust, Scalable IT Foundations",
    description: "Comprehensive IT infrastructure planning, implementation, and management services to ensure optimal performance, reliability, and business continuity for your organization.",
    logo: microsoftLogo,
    heroGradient: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
    
    stats: [
      { number: "400+", label: "Infrastructure Projects" },
      { number: "99.8%", label: "Network Uptime" },
      { number: "30%", label: "Cost Reduction" }
    ],

    services: [
      {
        title: "Network Design & Implementation",
        description: "Design and implement robust network infrastructure with optimal performance and security.",
        features: ["Network Architecture", "LAN/WAN Setup", "Wireless Networks", "Network Security"]
      },
      {
        title: "Server Management",
        description: "Complete server lifecycle management from procurement to maintenance and monitoring.",
        features: ["Server Installation", "Virtualization", "Server Monitoring", "Backup Solutions"]
      },
      {
        title: "Cloud Infrastructure",
        description: "Hybrid and multi-cloud infrastructure solutions for scalability and flexibility.",
        features: ["Cloud Migration", "Hybrid Cloud", "Multi-cloud Strategy", "Cloud Optimization"]
      },
      {
        title: "Security Infrastructure",
        description: "Comprehensive security infrastructure to protect your organization from cyber threats.",
        features: ["Firewall Management", "VPN Setup", "Intrusion Detection", "Security Monitoring"]
      },
      {
        title: "Disaster Recovery",
        description: "Business continuity planning with robust disaster recovery and backup solutions.",
        features: ["Backup Strategy", "Disaster Recovery", "Business Continuity", "Data Protection"]
      },
      {
        title: "Hardware Procurement",
        description: "Strategic hardware procurement and lifecycle management for optimal ROI.",
        features: ["Hardware Selection", "Vendor Management", "Lifecycle Planning", "Asset Management"]
      }
    ],

    benefits: [
      {
        title: "High Availability",
        description: "Ensure maximum uptime with redundant systems and proactive monitoring."
      },
      {
        title: "Scalability",
        description: "Infrastructure that grows with your business needs and requirements."
      },
      {
        title: "Cost Optimization",
        description: "Optimize infrastructure costs while maintaining performance and reliability."
      },
      {
        title: "24/7 Monitoring",
        description: "Continuous monitoring and support to prevent issues before they impact business."
      }
    ],

    process: [
      {
        step: "01",
        title: "Assessment",
        description: "Comprehensive assessment of current infrastructure and business requirements."
      },
      {
        step: "02",
        title: "Planning",
        description: "Develop detailed infrastructure design and implementation roadmap."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Execute infrastructure deployment with minimal business disruption."
      },
      {
        step: "04",
        title: "Management",
        description: "Ongoing monitoring, maintenance, and optimization of infrastructure."
      }
    ],

    technologies: [
      "VMware vSphere",
      "Microsoft Hyper-V",
      "Cisco Networking",
      "Dell/HP Servers",
      "Azure/AWS",
      "Veeam Backup",
      "SolarWinds",
      "Fortinet Security"
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default InfrastructureServices;