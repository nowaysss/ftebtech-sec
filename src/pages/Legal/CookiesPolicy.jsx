import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { Icon } from '../../components/Icons/IconSystem';
import '../../styles/pages/Legal/LegalPages.scss';

const CookiesPolicy = () => {
  const lastUpdated = "January 15, 2025";

  const cookieTypes = [
    {
      id: "necessary",
      title: "Necessary Cookies",
      icon: "Shield",
      required: true,
      description: "These cookies are essential for the website to function properly and cannot be disabled.",
      examples: [
        "Session management and user authentication",
        "Security tokens and CSRF protection",
        "Load balancing and server routing",
        "Cookie consent preferences",
        "Shopping cart and form data retention"
      ],
      retention: "Session or up to 1 year",
      thirdParty: false
    },
    {
      id: "functional",
      title: "Functional Cookies",
      icon: "Settings",
      required: false,
      description: "These cookies enable enhanced functionality and personalization features.",
      examples: [
        "Language and region preferences",
        "User interface customizations",
        "Accessibility settings and preferences",
        "Recently viewed services and content",
        "Chat widget and support preferences"
      ],
      retention: "Up to 2 years",
      thirdParty: false
    },
    {
      id: "analytics",
      title: "Analytics Cookies",
      icon: "Analytics",
      required: false,
      description: "These cookies help us understand how visitors interact with our website.",
      examples: [
        "Google Analytics for website traffic analysis",
        "Page views, bounce rates, and session duration",
        "User journey and conversion tracking",
        "Performance monitoring and error reporting",
        "A/B testing and optimization metrics"
      ],
      retention: "Up to 2 years",
      thirdParty: true,
      providers: ["Google Analytics", "Microsoft Clarity", "Hotjar"]
    },
    {
      id: "marketing",
      title: "Marketing Cookies",
      icon: "Network",
      required: false,
      description: "These cookies are used to deliver relevant advertisements and track campaign effectiveness.",
      examples: [
        "LinkedIn advertising and conversion tracking",
        "Google Ads remarketing and audience building",
        "Social media integration and sharing",
        "Email marketing campaign tracking",
        "Lead generation and qualification"
      ],
      retention: "Up to 1 year",
      thirdParty: true,
      providers: ["Google Ads", "LinkedIn", "Facebook", "Microsoft Advertising"]
    }
  ];

  const sections = [
    {
      id: "what-are-cookies",
      title: "What Are Cookies?",
      icon: "Info",
      content: [
        {
          text: "Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and analyzing how you use our site."
        },
        {
          text: "Cookies contain information such as:",
          list: [
            "Your language and region preferences",
            "Items in your shopping cart or form data",
            "Whether you've visited our site before",
            "Your browsing patterns and interests",
            "Technical information about your device and browser"
          ]
        }
      ]
    },
    {
      id: "why-we-use-cookies",
      title: "Why We Use Cookies",
      icon: "Settings",
      content: [
        {
          subtitle: "Essential Website Functions",
          text: "We use cookies to:",
          list: [
            "Maintain your session while browsing our site",
            "Remember your login status and preferences",
            "Protect against security threats and fraud",
            "Ensure proper website functionality across pages",
            "Provide customer support through chat widgets"
          ]
        },
        {
          subtitle: "Improve User Experience",
          text: "Cookies help us:",
          list: [
            "Remember your language and accessibility preferences",
            "Customize content based on your interests",
            "Provide relevant service recommendations",
            "Streamline contact forms and service requests",
            "Offer personalized support and assistance"
          ]
        },
        {
          subtitle: "Analyze and Optimize",
          text: "We use analytics cookies to:",
          list: [
            "Understand which services are most popular",
            "Identify areas for website improvement",
            "Track the effectiveness of our marketing campaigns",
            "Monitor website performance and loading times",
            "Optimize our content for better user engagement"
          ]
        }
      ]
    },
    {
      id: "cookie-management",
      title: "Managing Your Cookie Preferences",
      icon: "Users",
      content: [
        {
          subtitle: "Cookie Consent Banner",
          text: "When you first visit our website, you'll see a cookie consent banner that allows you to:",
          list: [
            "Accept all cookies for the full website experience",
            "Accept only necessary cookies for basic functionality",
            "Review detailed information about each cookie type",
            "Access our privacy policy for more information",
            "Change your preferences at any time"
          ]
        },
        {
          subtitle: "Browser Settings",
          text: "You can also manage cookies through your browser settings:",
          list: [
            "Block all cookies (may affect website functionality)",
            "Block third-party cookies only",
            "Delete existing cookies from your device",
            "Set up automatic cookie deletion",
            "Receive notifications when cookies are set"
          ]
        },
        {
          subtitle: "Third-Party Opt-Outs",
          text: "For third-party cookies, you can opt out directly:",
          list: [
            "Google Analytics: Use the Google Analytics Opt-out Browser Add-on",
            "Google Ads: Visit Google's Ad Settings page",
            "LinkedIn: Adjust your LinkedIn ad preferences",
            "Facebook: Modify your Facebook ad preferences",
            "Industry opt-out tools: Use NAI or DAA opt-out pages"
          ]
        }
      ]
    },
    {
      id: "third-party-cookies",
      title: "Third-Party Cookies and Services",
      icon: "Network",
      content: [
        {
          subtitle: "Analytics Services",
          text: "We use third-party analytics services to understand website usage:",
          list: [
            "Google Analytics: Tracks website traffic and user behavior",
            "Microsoft Clarity: Provides heatmaps and session recordings",
            "Hotjar: Offers user feedback and behavior analysis",
            "These services may set their own cookies on your device",
            "Data is processed according to their respective privacy policies"
          ]
        },
        {
          subtitle: "Marketing and Advertising",
          text: "We work with advertising partners for marketing purposes:",
          list: [
            "Google Ads: For search and display advertising",
            "LinkedIn Campaign Manager: For professional network advertising",
            "Facebook Business: For social media marketing",
            "Microsoft Advertising: For Bing search advertising",
            "These platforms may track your activity across websites"
          ]
        },
        {
          subtitle: "Social Media Integration",
          text: "Our website includes social media features:",
          list: [
            "Social sharing buttons for LinkedIn, Twitter, Facebook",
            "Embedded content from YouTube and other platforms",
            "Social login options for easier account creation",
            "These features may set cookies from social media platforms",
            "Your interactions are governed by their privacy policies"
          ]
        }
      ]
    },
    {
      id: "data-retention",
      title: "Cookie Data Retention",
      icon: "Clock",
      content: [
        {
          subtitle: "Retention Periods",
          text: "Different types of cookies are retained for different periods:",
          list: [
            "Session cookies: Deleted when you close your browser",
            "Persistent cookies: Remain until expiration or manual deletion",
            "Necessary cookies: Up to 1 year for security and functionality",
            "Analytics cookies: Up to 2 years for trend analysis",
            "Marketing cookies: Up to 1 year for campaign effectiveness"
          ]
        },
        {
          subtitle: "Automatic Deletion",
          text: "Cookies are automatically deleted when:",
          list: [
            "They reach their expiration date",
            "You clear your browser's cookie storage",
            "You use browser privacy/incognito mode",
            "You specifically delete them through browser settings",
            "We update our cookie policy with shorter retention periods"
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
          text: "Some of our third-party cookie providers are based outside the UAE and may transfer your data internationally. We ensure appropriate safeguards are in place:",
          list: [
            "Google (US): Certified under the EU-US Data Privacy Framework",
            "Microsoft (US): Implements Standard Contractual Clauses",
            "LinkedIn (US): Provides adequate data protection measures",
            "Facebook (US): Uses approved transfer mechanisms",
            "All transfers comply with applicable data protection laws"
          ]
        }
      ]
    },
    {
      id: "updates-changes",
      title: "Updates to This Policy",
      icon: "Info",
      content: [
        {
          text: "We may update this cookie policy to reflect changes in our practices or legal requirements. When we make significant changes, we will:",
          list: [
            "Update the 'Last Modified' date at the top of this policy",
            "Notify you through our cookie consent banner",
            "Send email notifications to registered users",
            "Provide prominent notice on our website",
            "Give you the opportunity to review and accept new terms"
          ]
        }
      ]
    }
  ];

  return (
    <PageWrapper 
      title="Cookies Policy" 
      description="Learn about how FTEB Technology uses cookies and tracking technologies"
    >
      <div className="legal-page">
        <div className="container">
          
          {/* Introduction */}
          <div className="legal-intro">
            <div className="intro-content">
              <h2>Cookie Policy</h2>
              <p>
                This cookie policy explains how FTEB Technology Solutions uses cookies and similar 
                tracking technologies on our website. We believe in transparency about how we collect 
                and use data, and this policy provides detailed information about our cookie practices.
              </p>
              <div className="last-updated">
                <Icon name="Clock" size={16} />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </div>

          {/* Cookie Types Overview */}
          <div className="cookie-types-overview">
            <h3>Types of Cookies We Use</h3>
            <div className="cookie-types-grid">
              {cookieTypes.map((type) => (
                <div key={type.id} className="cookie-type-card">
                  <div className="cookie-type-header">
                    <div className="icon-container icon-container-md icon-container-primary">
                      <Icon name={type.icon} size={24} />
                    </div>
                    <div className="cookie-type-info">
                      <h4>{type.title}</h4>
                      {type.required ? (
                        <span className="required-badge">Required</span>
                      ) : (
                        <span className="optional-badge">Optional</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="cookie-type-description">{type.description}</p>
                  
                  <div className="cookie-details">
                    <div className="detail-item">
                      <strong>Examples:</strong>
                      <ul>
                        {type.examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="detail-item">
                      <strong>Retention:</strong> {type.retention}
                    </div>
                    
                    <div className="detail-item">
                      <strong>Third-party:</strong> {type.thirdParty ? 'Yes' : 'No'}
                    </div>
                    
                    {type.providers && (
                      <div className="detail-item">
                        <strong>Providers:</strong> {type.providers.join(', ')}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table of Contents */}
          <div className="table-of-contents">
            <h3>Detailed Information</h3>
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

          {/* Cookie Management Tools */}
          <div className="cookie-management-tools">
            <div className="tools-card">
              <h3>Cookie Management Tools</h3>
              <p>Use these tools to manage your cookie preferences and privacy settings:</p>
              
              <div className="tools-grid">
                <div className="tool-item">
                  <Icon name="Settings" size={24} />
                  <div>
                    <strong>Browser Settings</strong>
                    <p>Configure cookie preferences in your browser settings</p>
                  </div>
                </div>
                
                <div className="tool-item">
                  <Icon name="Shield" size={24} />
                  <div>
                    <strong>Privacy Extensions</strong>
                    <p>Use browser extensions like uBlock Origin or Privacy Badger</p>
                  </div>
                </div>
                
                <div className="tool-item">
                  <Icon name="Network" size={24} />
                  <div>
                    <strong>Opt-out Tools</strong>
                    <p>Visit NAI, DAA, or EDAA opt-out pages for advertising cookies</p>
                  </div>
                </div>
                
                <div className="tool-item">
                  <Icon name="Analytics" size={24} />
                  <div>
                    <strong>Analytics Opt-out</strong>
                    <p>Use Google Analytics opt-out browser add-on</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="legal-contact">
            <div className="contact-card">
              <h3>Questions About Cookies?</h3>
              <p>
                If you have questions about our use of cookies or need help managing your preferences, 
                please don't hesitate to contact us.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <Icon name="Email" size={20} />
                  <div>
                    <strong>Privacy Team:</strong>
                    <a href="mailto:privacy@ftebtech.com">privacy@ftebtech.com</a>
                  </div>
                </div>
                <div className="contact-method">
                  <Icon name="Phone" size={20} />
                  <div>
                    <strong>Support Line:</strong>
                    <a href="tel:+971588481295">+971 58 848 1295</a>
                  </div>
                </div>
                <div className="contact-method">
                  <Icon name="Location" size={20} />
                  <div>
                    <strong>Office:</strong>
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

export default CookiesPolicy;