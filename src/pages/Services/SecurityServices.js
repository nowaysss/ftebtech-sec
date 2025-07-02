import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate/ServicePageTemplate';
import microsoftLogo from '../../assets/images/ProductLogos/Microsoft-Logo.png';

const SecurityServices = () => {
  const serviceData = {
    title: "Cybersecurity Solutions",
    subtitle: "Protecting Your Digital Assets with Advanced Security",
    description: "Comprehensive cybersecurity services to protect your organization from evolving threats with advanced security strategies, monitoring, and compliance management.",
    logo: microsoftLogo,
    heroGradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
    
    stats: [
      { number: "250+", label: "Security Assessments" },
      { number: "99.9%", label: "Threat Detection Rate" },
      { number: "24/7", label: "Security Monitoring" }
    ],

    services: [
      {
        title: "Security Assessment & Audit",
        description: "Comprehensive security assessments to identify vulnerabilities and compliance gaps.",
        features: ["Vulnerability Assessment", "Penetration Testing", "Compliance Audit", "Risk Analysis"]
      },
      {
        title: "Endpoint Protection",
        description: "Advanced endpoint security solutions to protect devices and prevent malware attacks.",
        features: ["Antivirus/Anti-malware", "Endpoint Detection", "Device Management", "Mobile Security"]
      },
      {
        title: "Network Security",
        description: "Multi-layered network security to protect against unauthorized access and threats.",
        features: ["Firewall Management", "Intrusion Prevention", "Network Monitoring", "VPN Security"]
      },
      {
        title: "Identity & Access Management",
        description: "Secure identity management with multi-factor authentication and access controls.",
        features: ["Single Sign-On", "Multi-factor Auth", "Privileged Access", "Identity Governance"]
      },
      {
        title: "Security Monitoring & Response",
        description: "24/7 security monitoring with rapid incident response and threat mitigation.",
        features: ["SIEM Solutions", "Threat Hunting", "Incident Response", "Forensic Analysis"]
      },
      {
        title: "Compliance Management",
        description: "Ensure regulatory compliance with industry standards and data protection regulations.",
        features: ["GDPR Compliance", "ISO 27001", "SOC 2", "HIPAA Compliance"]
      }
    ],

    benefits: [
      {
        title: "Proactive Protection",
        description: "Stay ahead of threats with proactive monitoring and advanced threat detection."
      },
      {
        title: "Regulatory Compliance",
        description: "Meet industry regulations and standards with comprehensive compliance management."
      },
      {
        title: "Rapid Response",
        description: "Quick incident response to minimize impact and prevent data breaches."
      },
      {
        title: "Cost Effective",
        description: "Reduce security costs while improving protection with managed security services."
      }
    ],

    process: [
      {
        step: "01",
        title: "Assessment",
        description: "Conduct comprehensive security assessment to identify current vulnerabilities."
      },
      {
        step: "02",
        title: "Strategy",
        description: "Develop customized security strategy based on risk assessment and compliance needs."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Deploy security solutions with minimal disruption to business operations."
      },
      {
        step: "04",
        title: "Monitoring",
        description: "Continuous monitoring and management with regular security updates and reports."
      }
    ],

    technologies: [
      "Microsoft Defender",
      "CrowdStrike",
      "Splunk SIEM",
      "Fortinet FortiGate",
      "Azure Sentinel",
      "Okta Identity",
      "Qualys VMDR",
      "Carbon Black"
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default SecurityServices;