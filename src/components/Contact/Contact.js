"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMapMarkerAlt, 
  faPhoneAlt, 
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import "./Contact.scss"

const Contact = () => {
  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: "Visit Us",
      content: "AG house, sala al din, dubai, UAE",
    },
    {
      icon: faPhoneAlt,
      title: "Call Us",
      content: +971588481295,
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      content: "Connect@ftebtech.com",
      isEmail: true,
    },
  ]

  return (
    <section className="contact section bg-light">
      <div className="container">
        <div className="title-contact">
          <h6>CONTACT US</h6>
          <h2>Get in Touch</h2>
          <p className="para">Have questions or need assistance? Our team is here to help you with any inquiries.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-infos">
            <h3>Contact Information</h3>

            <div className="info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={info.icon} />
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.isEmail ? (
                      <p>
                        <a 
                          href={`mailto:${info.content}` }
                          className="email-link"
                          title="Click to send email"
                        >
                          {info.content}
                        </a>
                      </p>
                    ) : (
                      <p>{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

             <div className="contact-button-wrapper">
           
            <button className="service-btn" onClick={() => window.location.href = 'mailto:Connect@ftebtech.com'}>
              Contact Us
            </button>
          </div>
          </div>

        
        </div>
      </div>
    </section>
  )
}

export default Contact