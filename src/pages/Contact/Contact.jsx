import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhoneAlt, 
  faEnvelope,
  faClock,
  faGlobe,
  faCheckCircle,
  faExclamationTriangle,
  faPaperPlane,
  faDesktop,
  faGoogleDrive,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faTwitter,
  faFacebookF,
  faInstagram,
  faGoogle,
  faMicrosoft,
  faYahoo,
  faApple
} from '@fortawesome/free-brands-svg-icons';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    agreeToTerms: false
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: "Visit Our Office",
      content: "AG House, Sala Al Din, Dubai, UAE",
      subContent: "Business Bay District"
    },
    {
      icon: faPhoneAlt,
      title: "Call Us",
      content: "+971 58 848 1295",
      subContent: "Mon - Fri, 9:00 AM - 6:00 PM"
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      content: "Connect@ftebtech.com",
      subContent: "We'll respond within 24 hours"
    },
    {
      icon: faClock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      subContent: "Sat: 10:00 AM - 4:00 PM"
    }
  ];

  const services = [
    'Azure Cloud Services',
    'Microsoft 365 Solutions',
    'Dynamics 365 Implementation',
    'Custom Development',
    'IT Infrastructure',
    'Cybersecurity Solutions',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'Prefer to discuss'
  ];

  const socialLinks = [
    { icon: faLinkedinIn, url: 'https://linkedin.com/company/ftebtech', label: 'LinkedIn' },
    { icon: faTwitter, url: 'https://twitter.com/ftebtech', label: 'Twitter' },
    { icon: faFacebookF, url: 'https://facebook.com/ftebtech', label: 'Facebook' },
    { icon: faInstagram, url: 'https://instagram.com/ftebtech', label: 'Instagram' }
  ];

  const emailClients = [
    {
      name: 'Outlook',
      icon: faMicrosoft,
      color: '#0078d4',
      action: 'outlook'
    },
    {
      name: 'Gmail',
      icon: faGoogle,
      color: '#ea4335',
      action: 'gmail'
    },
    {
      name: 'Yahoo Mail',
      icon: faYahoo,
      color: '#6001d2',
      action: 'yahoo'
    },
    {
      name: 'Apple Mail',
      icon: faApple,
      color: '#000000',
      action: 'apple'
    },
    {
      name: 'Default Email App',
      icon: faDesktop,
      color: '#6c757d',
      action: 'default'
    },
    {
      name: 'Other Email Client',
      icon: faEnvelope,
      color: '#28a745',
      action: 'other'
    }
  ];

  // Validation rules
  const validateField = (name, value) => {
    const errors = {};

    switch (name) {
      case 'firstName':
        if (!value.trim()) errors.firstName = 'First name is required';
        else if (value.length < 2) errors.firstName = 'First name must be at least 2 characters';
        break;
      
      case 'lastName':
        if (!value.trim()) errors.lastName = 'Last name is required';
        else if (value.length < 2) errors.lastName = 'Last name must be at least 2 characters';
        break;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) errors.email = 'Email is required';
        else if (!emailRegex.test(value)) errors.email = 'Please enter a valid email address';
        break;
      
      case 'phone':
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!value.trim()) errors.phone = 'Phone number is required';
        else if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
          errors.phone = 'Please enter a valid phone number';
        }
        break;
      
      case 'company':
        if (!value.trim()) errors.company = 'Company name is required';
        break;
      
      case 'service':
        if (!value) errors.service = 'Please select a service';
        break;
      
      case 'message':
        if (!value.trim()) errors.message = 'Message is required';
        else if (value.length < 10) errors.message = 'Message must be at least 10 characters';
        break;
      
      case 'agreeToTerms':
        if (!value) errors.agreeToTerms = 'You must agree to the terms and conditions';
        break;
      
      default:
        break;
    }

    return errors;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    // Real-time validation
    const fieldErrors = validateField(name, fieldValue);
    setFormErrors(prev => ({
      ...prev,
      ...fieldErrors,
      [name]: fieldErrors[name] || undefined
    }));
  };

  // Validate entire form
  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach(key => {
      const fieldErrors = validateField(key, formData[key]);
      Object.assign(errors, fieldErrors);
    });
    return errors;
  };

  // Check form validity
  useEffect(() => {
    const errors = validateForm();
    const hasErrors = Object.keys(errors).length > 0;
    const hasEmptyRequired = !formData.firstName || !formData.lastName || 
                           !formData.email || !formData.phone || 
                           !formData.company || !formData.service || 
                           !formData.message || !formData.agreeToTerms;
    
    setIsFormValid(!hasErrors && !hasEmptyRequired);
  }, [formData]);

  // Generate email content
  const generateEmailContent = () => {
    const subject = `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`;
    
    const body = `Hello FTEB Team,

I am interested in your services and would like to get in touch. Here are my details:

CONTACT INFORMATION:
• Name: ${formData.firstName} ${formData.lastName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Company: ${formData.company}

PROJECT DETAILS:
• Service Interested In: ${formData.service}
• Project Budget: ${formData.budget || 'Not specified'}

MESSAGE:
${formData.message}

Please contact me at your earliest convenience to discuss how we can work together.

Best regards,
${formData.firstName} ${formData.lastName}
${formData.company}
${formData.email}
${formData.phone}`;

    return { subject, body };
  };

  // Handle email client selection
  const handleEmailClientSelect = (clientAction) => {
    const { subject, body } = generateEmailContent();
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    
    let emailUrl = '';

    switch (clientAction) {
      case 'gmail':
        emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Connect@ftebtech.com&su=${encodedSubject}&body=${encodedBody}`;
        window.open(emailUrl, '_blank');
        break;
      
      case 'outlook':
        emailUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=Connect@ftebtech.com&subject=${encodedSubject}&body=${encodedBody}`;
        window.open(emailUrl, '_blank');
        break;
      
      case 'yahoo':
        emailUrl = `https://compose.mail.yahoo.com/?to=Connect@ftebtech.com&subject=${encodedSubject}&body=${encodedBody}`;
        window.open(emailUrl, '_blank');
        break;
      
      case 'apple':
      case 'default':
      case 'other':
        emailUrl = `mailto:Connect@ftebtech.com?subject=${encodedSubject}&body=${encodedBody}`;
        window.location.href = emailUrl;
        break;
      
      default:
        emailUrl = `mailto:Connect@ftebtech.com?subject=${encodedSubject}&body=${encodedBody}`;
        window.location.href = emailUrl;
        break;
    }

    setShowEmailModal(false);
    setSubmitStatus('success');
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        agreeToTerms: false
      });
      setFormErrors({});
      setSubmitStatus(null);
    }, 3000);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show email client selection modal
      setShowEmailModal(true);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="hero-content">
                <span className="hero-subtitle">GET IN TOUCH</span>
                <h1 className="hero-title">
                  Let's Build Something 
                  <span className="highlight-text"> Amazing Together</span>
                </h1>
                <p className="hero-description">
                  Ready to transform your business with cutting-edge technology solutions? 
                  Our expert team is here to help you achieve your goals.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <Container>
          <Row className="g-4">
            {contactInfo.map((info, index) => (
              <Col key={index} lg={3} md={6}>
                <Card className="contact-info-card h-100">
                  <Card.Body className="text-center">
                    <div className="info-icon">
                      <FontAwesomeIcon icon={info.icon} />
                    </div>
                    <h5 className="info-title">{info.title}</h5>
                    <p className="info-content">{info.content}</p>
                    <small className="info-subcontent">{info.subContent}</small>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact-section">
        <Container>
          <Row className="g-5">
            {/* Contact Form */}
            <Col lg={8}>
              <Card className="contact-form-card">
                <Card.Body>
                  <div className="form-header">
                    <h2>Send Us a Message</h2>
                    <p>Fill out the form below and we'll help you choose the best email client to send your message.</p>
                  </div>

                  {submitStatus === 'success' && (
                    <Alert variant="success" className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                      Your email client should have opened with the message pre-filled. If it didn't open automatically, please check your browser's popup settings.
                    </Alert>
                  )}

                  {submitStatus === 'error' && (
                    <Alert variant="danger" className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
                      Sorry, there was an error processing your request. Please try again or contact us directly.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit} noValidate>
                    <Row className="g-3">
                      {/* Name Fields */}
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>First Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            isInvalid={!!formErrors.firstName}
                            placeholder="Enter your first name"
                          />
                          <Form.Control.Feedback type="invalid">
                            {formErrors.firstName}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Last Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            isInvalid={!!formErrors.lastName}
                            placeholder="Enter your last name"
                          />
                          <Form.Control.Feedback type="invalid">
                            {formErrors.lastName}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      {/* Contact Fields */}
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            isInvalid={!!formErrors.email}
                            placeholder="Enter your email"
                          />
                          <Form.Control.Feedback type="invalid">
                            {formErrors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Phone Number *</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            isInvalid={!!formErrors.phone}
                            placeholder="Enter your phone number"
                          />
                          <Form.Control.Feedback type="invalid">
                            {formErrors.phone}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      {/* Company Field */}
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label>Company Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            isInvalid={!!formErrors.company}
                            placeholder="Enter your company name"
                          />
                          <Form.Control.Feedback type="invalid">
                            {formErrors.company}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      {/* Service and Budget */}
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Service Interested In *</Form.Label>
                          <Form.Select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            isInvalid={!!formErrors.service}
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>{service}</option>
                            ))}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {formErrors.service}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Project Budget</Form.Label>
                          <Form.Select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range, index) => (
                              <option key={index} value={range}>{range}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      {/* Message */}
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label>Message *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            isInvalid={!!formErrors.message}
                            placeholder="Tell us about your project requirements..."
                          />
                          <Form.Control.Feedback type="invalid">
                            {formErrors.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      {/* Terms Checkbox */}
                      <Col md={12}>
                        <Form.Group>
                          <Form.Check
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                            isInvalid={!!formErrors.agreeToTerms}
                            label="I agree to the Terms of Service and Privacy Policy *"
                          />
                          <Form.Control.Feedback type="invalid">
                            {formErrors.agreeToTerms}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      {/* Submit Button */}
                      <Col md={12}>
                        <Button
                          type="submit"
                          className="submit-btn"
                          disabled={!isFormValid || isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" />
                              Processing...
                            </>
                          ) : (
                            <>
                              <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              <div className="contact-sidebar">
                {/* Quick Contact */}
                <Card className="quick-contact-card mb-4">
                  <Card.Body>
                    <h4>Quick Contact</h4>
                    <p>Need immediate assistance? Reach out to us directly.</p>
                    
                    <div className="quick-contact-methods">
                      <a href="tel:+971588481295" className="contact-method-btn">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <span>Call Now</span>
                      </a>
                      <a href="mailto:Connect@ftebtech.com" className="contact-method-btn">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>Email Us</span>
                      </a>
                    </div>
                  </Card.Body>
                </Card>

                {/* Social Media */}
                <Card className="social-media-card mb-4">
                  <Card.Body>
                    <h4>Follow Us</h4>
                    <p>Stay connected with us on social media for updates and insights.</p>
                    
                    <div className="social-links">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label={social.label}
                        >
                          <FontAwesomeIcon icon={social.icon} />
                        </a>
                      ))}
                    </div>
                  </Card.Body>
                </Card>

                {/* Office Hours */}
                <Card className="office-hours-card">
                  <Card.Body>
                    <h4>Office Hours</h4>
                    <div className="hours-list">
                      <div className="hours-item">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="hours-item">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="hours-item">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Email Client Selection Modal */}
      <Modal 
        show={showEmailModal} 
        onHide={() => setShowEmailModal(false)}
        centered
        size="lg"
        className="email-client-modal"
      >
        <Modal.Header>
          <Modal.Title>
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            Choose Your Email Client
          </Modal.Title>
          <Button 
            variant="link" 
            onClick={() => setShowEmailModal(false)}
            className="btn-close-custom"
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-description">
            Select your preferred email client to send your message. We'll open it with your message pre-filled.
          </p>
          <div className="email-clients-grid">
            {emailClients.map((client, index) => (
              <button
                key={index}
                className="email-client-option"
                onClick={() => handleEmailClientSelect(client.action)}
                style={{ '--client-color': client.color }}
              >
                <div className="client-icon">
                  <FontAwesomeIcon icon={client.icon} />
                </div>
                <span className="client-name">{client.name}</span>
              </button>
            ))}
          </div>
          <div className="modal-note">
            <small className="text-muted">
              <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
              If your preferred email client doesn't open automatically, please check your browser's popup settings.
            </small>
          </div>
        </Modal.Body>
      </Modal>

      {/* Map Section */}
      <section className="map-section">
        <Container fluid className="p-0">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1234567890!2d55.2708!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzUwLjAiTiA1NcKwMTYnMTUuMCJF!5e0!3m2!1sen!2sae!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FTEB Technology Office Location"
            ></iframe>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;