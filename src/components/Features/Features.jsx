import "../../styles/components/Features/Features.scss"
import { Icon } from '../Icons/IconSystem'
import featureImage from "../../assets/images/computer-scientists-data-center-managing-maintaining-databases (1).jpg"

const Features = () => {
  const features = [
    {
      icon: "Cloud",
      title: "Cloud Infrastructure Design",
      description: "We architect cost-optimized, scalable, and highly available Azure environments tailored to your workloads reducing TCO while maximizing efficiency.",
      color: "#007bff"
    },
    {
      icon: "Settings",
      title: "Cloud Operations & Management",
      description: "From deployment to continuous optimization, we manage your cloud services with best practices in automation, governance, and performance monitoring.",
      color: "#007bff"
    },
    {
      icon: "Shield",
      title: "Cloud Security & Compliance",
      description: "Our team ensures your infrastructure is protected with enterprise-grade security, active threat monitoring, data backup strategies, and compliance readiness.",
      color: "#007bff"
    },
  ]

  return (
    <div className="features">
      <section className="features-section bg-light">
        <div className="container">
          <div className="features-wrapper">
            <div className="features-content" data-aos="fade-right">
              <h6>WHY CHOOSE US</h6>
              <h2>We're Here To Help You Build a Smarter, Secure, and Cost-Efficient Cloud Ecosystem</h2>

              <div className="features-list">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="feature-box"
                    data-aos="fade-up" 
                    data-aos-delay={index * 100}
                  >
                    <div className="icon-container icon-container-lg icon-container-primary">
                      <Icon name={feature.icon} size={32} />
                    </div>
                    <div className="feature-text">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="features-image" data-aos="fade-left">
              <div className="image-container">
                <img src={featureImage} alt="IT Professional Team" />
                <div className="floating-card top">
                  <div className="icon-container icon-container-md icon-container-white">
                    <Icon name="Cloud" size={24} />
                  </div>
                  <div className="card-content">
                    <span className="number">2.5K+</span>
                    <span className="text">Projects Done</span>
                  </div>
                </div>
                <div className="floating-card bottom">
                  <div className="stat">
                    <span className="number">98%</span>
                    <span className="label">Client Satisfaction</span>
                  </div>
                  <div className="stat">
                    <span className="number">10</span>
                    <span className="label">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features