import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { Icon } from '../../components/Icons/IconSystem';
import '../../styles/pages/Legal/LegalPages.scss';

const PrivacyPolicy = () => {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: "Database",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect personal information that you voluntarily provide when using our services, including:",
          list: [
            "Name, email address, and phone number when you contact us",
            "Company information and job title for business inquiries",
            "Technical requirements and project specifications",
            "Billing and payment information for our services",
            "Communication preferences and service feedback"
          ]
        },
        {
          subtitle: "Technical Information",
          text: "We automatically collect certain technical information when you visit our website:",
          list: [
            "IP address and browser type",
            "Device information and operating system",
            "Pages visited and time spent on our website",
            "Referral sources and search terms used",
            "Cookies and similar tracking technologies"
          ]
        },
        {
          subtitle: "Service Data",
          text: "When providing IT services, we may access and process:",
          list: [
            "System configurations and infrastructure data",
            "Performance metrics and monitoring data",
            "Security logs and incident reports",
            "Backup and recovery information",
            "User access logs and audit trails"
          ]
        }
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: "Settings",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide and improve our IT services:",
          list: [
            "Delivering cloud infrastructure and migration services",
            "Providing Microsoft 365 and Dynamics 365 implementation",
            "Offering custom development and security solutions",
            "Managing IT infrastructure and providing ongoing support",
            "Monitoring system performance and security"
          ]
        },
        {
          subtitle: "Communication",
          text: "We use your contact information to:",
          list: [
            "Respond to your inquiries and service requests",
            "Provide technical support and troubleshooting",
            "Send service updates and maintenance notifications",
            "Share relevant industry insights and best practices",
            "Conduct customer satisfaction surveys"
          ]
        },
        {
          subtitle: "Legal and Compliance",
          text: "We may use your information to:",
          list: [
            "Comply with legal obligations and regulations",
            "Protect our rights and prevent fraud",
            "Enforce our terms of service",
            "Respond to legal requests and court orders",
            "Maintain security and prevent unauthorized access"
          ]
        }
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: "Network",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers:",
          list: [
            "Microsoft, Amazon, and Google for cloud services",
            "Payment processors for billing and transactions",
            "Security vendors for threat monitoring",
            "Backup and disaster recovery providers",
            "Professional services partners"
          ]
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law or to protect our rights and the safety of others."
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security and Protection",
      icon: "Shield",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement comprehensive security measures to protect your information:",
          list: [
            "End-to-end encryption for data transmission",
            "Multi-factor authentication for system access",
            "Regular security audits and penetration testing",
            "Employee training on data protection practices",
            "Incident response and breach notification procedures"
          ]
        },
        {
          subtitle: "Data Retention",
          text: "We retain your information only as long as necessary for:",
          list: [
            "Providing ongoing services and support",
            "Meeting legal and regulatory requirements",
            "Resolving disputes and enforcing agreements",
            "Maintaining business records and audit trails"
          ]
        }
      ]
    },
    {
      id: "your-rights",
      title: "Your Rights and Choices",
      icon: "Users",
      content: [
        {
          subtitle: "Access and Control",
          text: "You have the right to:",
          list: [
            "Access and review your personal information",
            "Request corrections to inaccurate data",
            "Delete your personal information (subject to legal requirements)",
            "Restrict or object to certain processing activities",
            "Data portability for your information"
          ]
        },
        {
          subtitle: "Communication Preferences",
          text: "You can:",
          list: [
            "Opt-out of marketing communications",
            "Update your contact preferences",
            "Unsubscribe from newsletters and updates",
            "Choose your preferred communication channels"
          ]
        }
      ]
    },
    {
      id: "cookies-tracking",
      title: "Cookies and Tracking Technologies",
      icon: "Analytics",
      content: [
        {
          subtitle: "Cookie Usage",
          text: "We use cookies and similar technologies to:",
          list: [
            "Remember your preferences and settings",
            "Analyze website traffic and user behavior",
            "Provide personalized content and recommendations",
            "Improve website functionality and performance",
            "Deliver targeted advertising and marketing"
          ]
        },
        {
          subtitle: "Cookie Management",
          text: "You can control cookies through:",
          list: [
            "Browser settings and preferences",
            "Our cookie consent banner",
            "Third-party opt-out tools",
            "Privacy settings on your devices"
          ]
        }
      ]
    },
    {
      id: "international-transfers",
      title: "International Data Transfers",
      icon: "Network",
      content: [
        {
          text: "As a global IT services provider, we may transfer your information to countries outside your residence. We ensure appropriate safeguards are in place, including:",
          list: [
            "Standard contractual clauses approved by regulatory authorities",
            "Adequacy decisions by relevant data protection authorities",
            "Certification schemes and codes of conduct",
            "Binding corporate rules for intra-group transfers"
          ]
        }
      ]
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      icon: "Shield",
      content: [
        {
          text: "Our services are not directed to children under 16 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly."
        }
      ]
    },
    {
      id: "policy-updates",
      title: "Policy Updates",
      icon: "Info",
      content: [
        {
          text: "We may update this privacy policy periodically to reflect changes in our practices or legal requirements. We will notify you of material changes through:",
          list: [
            "Email notifications to registered users",
            "Prominent notices on our website",
            "Updates to our cookie consent banner",
            "Direct communication for significant changes"
          ]
        }
      ]
    }
  ];

  return (
    <PageWrapper 
      title="Privacy Policy" 
      description="Learn how FTEB Technology protects and manages your personal information"
    >
      <div className="legal-page">
        <div className="container">
          
          {/* Introduction */}
          <div className="legal-intro">
            <div className="intro-content">
              <h2>Your Privacy Matters to Us</h2>
              <p>
                At FTEB Technology Solutions, we are committed to protecting your privacy and ensuring 
                the security of your personal information. This privacy policy explains how we collect, 
                use, and safeguard your data when you use our IT services and visit our website.
              </p>
              <div className="last-updated">
                <Icon name="Clock" size={16} />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="table-of-contents">
            <h3>Table of Contents</h3>
            <div className="toc-grid">
              {sections.map((section, index) => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`} 
                  className="toc-item"
                >
                  <Icon name={section.icon} size={20} />
                  <span>{section.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="legal-content">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="content-section">
                <div className="section-header">
                  <div className="icon-container icon-container-lg icon-container-primary">
                    <Icon name={section.icon} size={32} />
                  </div>
                  <h2>{section.title}</h2>
                </div>

                <div className="section-content">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="content-item">
                      {item.subtitle && <h3>{item.subtitle}</h3>}
                      {item.text && <p>{item.text}</p>}
                      {item.list && (
                        <ul>
                          {item.list.map((listItem, listIndex) => (
                            <li key={listIndex}>
                              <Icon name="Check" size={14} />
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact Information */}
          <div className="legal-contact">
            <div className="contact-card">
              <h3>Questions About This Policy?</h3>
              <p>
                If you have any questions about this privacy policy or our data practices, 
                please don't hesitate to contact us.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <Icon name="Email" size={20} />
                  <div>
                    <strong>Email:</strong>
                    <a href="mailto:privacy@ftebtech.com">privacy@ftebtech.com</a>
                  </div>
                </div>
                <div className="contact-method">
                  <Icon name="Phone" size={20} />
                  <div>
                    <strong>Phone:</strong>
                    <a href="tel:+971588481295">+971 58 848 1295</a>
                  </div>
                </div>
                <div className="contact-method">
                  <Icon name="Location" size={20} />
                  <div>
                    <strong>Address:</strong>
                    <span>AG House, Sala Al Din, Dubai, UAE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default PrivacyPolicy;