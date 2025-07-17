"use client"

import { Icon } from '../Icons/IconSystem'
import "../../styles/components/Contact/Contact.scss"

const Contact = () => {
  const contactInfo = [
    {
      icon: "Location",
      title: "Visit Us",
      content: "AG house, sala al din deira, UAE",
    },
    {
      icon: "Phone",
      title: "Call Us",
      content: "+971588481295",
    },
    {
      icon: "Email",
      title: "Email Us",
      content: "Connect@ftebtech.com",
      isEmail: true,
    },
  ]

  return (
    <section className="contact section bg-light scroll-animate" data-animation="fade-in">
      <div className="container">
        <div className="title-contact scroll-animate" data-animation="slide-up" data-duration="slow">
          <h6 className="scroll-animate" data-animation="fade-in" data-delay="100">CONTACT US</h6>
          <h2 className="scroll-animate" data-animation="slide-up" data-delay="200">Get in Touch</h2>
          <p className="para scroll-animate" data-animation="slide-up" data-delay="300">Have questions or need assistance? Our team is here to help you with any inquiries.</p>
        </div>

        <div className="contact-wrapper scroll-animate" data-animation="fade-in" data-delay="350">
          <div className="contact-infos scroll-animate" data-animation="slide-up" data-delay="400">
            <h3 className="scroll-animate" data-animation="fade-in" data-delay="500">Contact Information</h3>

            <div className="info-list scroll-animate-container">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-item scroll-animate" data-animation="slide-up" data-delay={`${index * 150 + 600}`}>
                  <div className="icon-container icon-container-md icon-container-primary scroll-animate" data-animation="zoom-in" data-delay={`${index * 150 + 650}`}>
                    <Icon name={info.icon} size={24} />
                  </div>
                  <div className="info-content scroll-animate" data-animation="fade-in" data-delay={`${index * 150 + 700}`}>
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

             <div className="contact-button-wrapper scroll-animate" data-animation="zoom-in" data-delay="900">
            <button className="btn" onClick={() => window.location.href = 'mailto:Connect@ftebtech.com'}>
              <Icon name="Email" size={18} className="button-icon" />
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