import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { Icon } from '../../components/Icons/IconSystem';
import '../../styles/pages/Legal/LegalPages.scss';

const TermsOfService = () => {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: "Check",
      content: [
        {
          text: "By accessing and using FTEB Technology Solutions' services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
        },
        {
          text: "These terms apply to all users of our services, including but not limited to:",
          list: [
            "Website visitors and prospective clients",
            "Current clients using our IT services",
            "Partners and vendors working with us",
            "Any third parties accessing our systems"
          ]
        }
      ]
    },
    {
      id: "services-description",
      title: "Services Description",
      icon: "Settings",
      content: [
        {
          subtitle: "Cloud Services",
          text: "We provide comprehensive cloud infrastructure services including:",
          list: [
            "Microsoft Azure, AWS, and Google Cloud Platform implementation",
            "Cloud migration and optimization services",
            "Multi-cloud strategy and management",
            "Infrastructure as a Service (IaaS) solutions",
            "Platform as a Service (PaaS) implementations"
          ]
        },
        {
          subtitle: "Microsoft Solutions",
          text: "Our Microsoft-focused services include:",
          list: [
            "Microsoft 365 licensing, implementation, and support",
            "Dynamics 365 ERP and CRM solutions",
            "Azure Active Directory and security services",
            "SharePoint and Teams deployment",
            "Power Platform development and training"
          ]
        },
        {
          subtitle: "Custom Development",
          text: "We offer tailored development services:",
          list: [
            "Web application development using modern frameworks",
            "Mobile application development for iOS and Android",
            "API development and system integration",
            "Database design and optimization",
            "Custom software solutions for business needs"
          ]
        },
        {
          subtitle: "IT Infrastructure",
          text: "Our infrastructure services encompass:",
          list: [
            "Network design and implementation",
            "Server management and virtualization",
            "Cybersecurity solutions and monitoring",
            "Backup and disaster recovery planning",
            "24/7 managed services and support"
          ]
        }
      ]
    },
    {
      id: "client-responsibilities",
      title: "Client Responsibilities",
      icon: "Users",
      content: [
        {
          subtitle: "Information Accuracy",
          text: "Clients are responsible for:",
          list: [
            "Providing accurate and complete information about their requirements",
            "Timely communication of changes to project scope or specifications",
            "Ensuring authorized personnel have access to necessary systems",
            "Maintaining confidentiality of access credentials and security information",
            "Complying with licensing requirements for third-party software"
          ]
        },
        {
          subtitle: "System Access",
          text: "When providing services, clients must:",
          list: [
            "Grant necessary access to systems and data",
            "Ensure backup of critical data before any changes",
            "Provide testing environments when required",
            "Coordinate with internal teams for service delivery",
            "Follow security protocols and best practices"
          ]
        },
        {
          subtitle: "Payment Obligations",
          text: "Clients agree to:",
          list: [
            "Pay invoices within agreed payment terms",
            "Provide accurate billing and contact information",
            "Notify us of any billing disputes within 30 days",
            "Pay applicable taxes and fees",
            "Cover costs for additional work outside original scope"
          ]
        }
      ]
    },
    {
      id: "payment-terms",
      title: "Payment Terms and Billing",
      icon: "Analytics",
      content: [
        {
          subtitle: "Payment Schedule",
          text: "Our standard payment terms are:",
          list: [
            "Net 30 days from invoice date for ongoing services",
            "50% upfront payment for project-based work",
            "Monthly billing for managed services and support",
            "Immediate payment for emergency or urgent services",
            "Annual payment discounts available for long-term contracts"
          ]
        },
        {
          subtitle: "Late Payments",
          text: "Late payment policies include:",
          list: [
            "1.5% monthly service charge on overdue amounts",
            "Suspension of services for accounts 60+ days overdue",
            "Collection costs and legal fees charged to client",
            "Requirement for advance payment on future services",
            "Termination rights for chronic late payment"
          ]
        },
        {
          subtitle: "Pricing Changes",
          text: "We reserve the right to:",
          list: [
            "Adjust pricing with 60 days written notice",
            "Implement emergency pricing for urgent requests",
            "Pass through third-party licensing cost increases",
            "Offer volume discounts for large implementations",
            "Provide custom pricing for unique requirements"
          ]
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: "Shield",
      content: [
        {
          subtitle: "Our Intellectual Property",
          text: "FTEB Technology Solutions retains ownership of:",
          list: [
            "Proprietary methodologies and frameworks",
            "Custom tools and automation scripts",
            "Documentation templates and best practices",
            "Training materials and knowledge base content",
            "Improvements to our service delivery processes"
          ]
        },
        {
          subtitle: "Client Intellectual Property",
          text: "Clients retain ownership of:",
          list: [
            "Business data and proprietary information",
            "Existing systems and applications",
            "Custom configurations specific to their environment",
            "Business processes and workflows",
            "Branding and marketing materials"
          ]
        },
        {
          subtitle: "Third-Party Licenses",
          text: "Both parties acknowledge:",
          list: [
            "Microsoft, Amazon, Google, and other vendor licensing terms apply",
            "Clients are responsible for obtaining necessary licenses",
            "We will assist with license optimization and compliance",
            "Violation of licensing terms may result in service termination",
            "Additional costs may apply for license compliance remediation"
          ]
        }
      ]
    },
    {
      id: "confidentiality",
      title: "Confidentiality and Data Protection",
      icon: "Database",
      content: [
        {
          subtitle: "Confidential Information",
          text: "We commit to protecting:",
          list: [
            "Business strategies and financial information",
            "Technical specifications and system architectures",
            "User data and personal information",
            "Security configurations and access credentials",
            "Proprietary business processes and procedures"
          ]
        },
        {
          subtitle: "Data Security Measures",
          text: "Our security practices include:",
          list: [
            "End-to-end encryption for data transmission",
            "Multi-factor authentication for system access",
            "Regular security audits and compliance assessments",
            "Employee background checks and security training",
            "Incident response and breach notification procedures"
          ]
        },
        {
          subtitle: "Data Retention",
          text: "We maintain data according to:",
          list: [
            "Legal and regulatory requirements",
            "Industry best practices and standards",
            "Client-specific retention policies",
            "Service delivery and support needs",
            "Audit and compliance obligations"
          ]
        }
      ]
    },
    {
      id: "service-levels",
      title: "Service Level Agreements",
      icon: "Clock",
      content: [
        {
          subtitle: "Availability Commitments",
          text: "Our service level commitments include:",
          list: [
            "99.9% uptime for managed cloud services",
            "24/7 monitoring and alerting for critical systems",
            "4-hour response time for critical issues",
            "Next business day response for standard requests",
            "Scheduled maintenance windows with advance notice"
          ]
        },
        {
          subtitle: "Support Services",
          text: "We provide:",
          list: [
            "Email and phone support during business hours",
            "Emergency support for critical system failures",
            "Remote assistance and troubleshooting",
            "On-site support when required (additional charges apply)",
            "Knowledge transfer and training sessions"
          ]
        },
        {
          subtitle: "Performance Metrics",
          text: "We track and report on:",
          list: [
            "System availability and performance statistics",
            "Response and resolution times for support requests",
            "Security incident detection and response metrics",
            "Customer satisfaction scores and feedback",
            "Service improvement initiatives and outcomes"
          ]
        }
      ]
    },
    {
      id: "limitations",
      title: "Limitations of Liability",
      icon: "Info",
      content: [
        {
          subtitle: "Service Limitations",
          text: "Our liability is limited to:",
          list: [
            "Direct damages resulting from our negligence or breach",
            "The amount paid for services in the 12 months preceding the claim",
            "Replacement or correction of defective services",
            "Reasonable efforts to mitigate damages and restore service",
            "Compliance with applicable laws and regulations"
          ]
        },
        {
          subtitle: "Excluded Damages",
          text: "We are not liable for:",
          list: [
            "Indirect, consequential, or punitive damages",
            "Loss of profits, revenue, or business opportunities",
            "Data loss due to client actions or third-party failures",
            "Damages resulting from force majeure events",
            "Issues arising from unauthorized system modifications"
          ]
        },
        {
          subtitle: "Client Mitigation",
          text: "Clients are expected to:",
          list: [
            "Maintain appropriate backups of critical data",
            "Implement business continuity and disaster recovery plans",
            "Notify us promptly of any issues or concerns",
            "Follow recommended security and operational procedures",
            "Maintain adequate insurance coverage for their operations"
          ]
        }
      ]
    },
    {
      id: "termination",
      title: "Termination and Suspension",
      icon: "Close",
      content: [
        {
          subtitle: "Termination Rights",
          text: "Either party may terminate services:",
          list: [
            "With 30 days written notice for ongoing services",
            "Immediately for material breach of contract terms",
            "For non-payment after appropriate notice and cure period",
            "For violation of security or confidentiality requirements",
            "Upon mutual agreement of both parties"
          ]
        },
        {
          subtitle: "Service Suspension",
          text: "We may suspend services for:",
          list: [
            "Non-payment of invoices beyond agreed terms",
            "Violation of acceptable use policies",
            "Security threats or suspicious activities",
            "Legal or regulatory compliance requirements",
            "Emergency maintenance or security updates"
          ]
        },
        {
          subtitle: "Post-Termination",
          text: "Upon termination:",
          list: [
            "Client data will be returned or securely destroyed",
            "Access credentials will be revoked",
            "Final invoices will be issued for services rendered",
            "Transition assistance may be provided (additional charges apply)",
            "Confidentiality obligations continue indefinitely"
          ]
        }
      ]
    },
    {
      id: "governing-law",
      title: "Governing Law and Disputes",
      icon: "Award",
      content: [
        {
          subtitle: "Applicable Law",
          text: "These terms are governed by:",
          list: [
            "Laws of the United Arab Emirates",
            "Dubai International Financial Centre (DIFC) regulations",
            "International data protection and privacy laws",
            "Industry-specific compliance requirements",
            "Applicable international trade and export regulations"
          ]
        },
        {
          subtitle: "Dispute Resolution",
          text: "Disputes will be resolved through:",
          list: [
            "Good faith negotiations between the parties",
            "Mediation by a mutually agreed neutral party",
            "Arbitration under DIFC arbitration rules",
            "Dubai courts as the exclusive jurisdiction",
            "English language for all proceedings"
          ]
        }
      ]
    }
  ];

  return (
    <PageWrapper 
      title="Terms of Service" 
      description="Terms and conditions for using FTEB Technology's IT services and solutions"
    >
      <div className="legal-page">
        <div className="container">
          
          {/* Introduction */}
          <div className="legal-intro">
            <div className="intro-content">
              <h2>Terms of Service Agreement</h2>
              <p>
                These Terms of Service govern your use of FTEB Technology Solutions' IT services, 
                including cloud infrastructure, Microsoft solutions, custom development, and managed services. 
                Please read these terms carefully before engaging our services.
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
              <h3>Questions About These Terms?</h3>
              <p>
                If you have any questions about these terms of service or need clarification 
                on any provisions, please contact our legal team.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <Icon name="Email" size={20} />
                  <div>
                    <strong>Legal Inquiries:</strong>
                    <a href="mailto:legal@ftebtech.com">legal@ftebtech.com</a>
                  </div>
                </div>
                <div className="contact-method">
                  <Icon name="Phone" size={20} />
                  <div>
                    <strong>Business Line:</strong>
                    <a href="tel:+971588481295">+971 58 848 1295</a>
                  </div>
                </div>
                <div className="contact-method">
                  <Icon name="Location" size={20} />
                  <div>
                    <strong>Business Address:</strong>
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

export default TermsOfService;