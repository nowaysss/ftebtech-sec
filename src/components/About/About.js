import "../../styles/components/About/About.scss"
import aboutImage from "../../assets/images/about-us.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faAward, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const features = [
    {
      icon: faCheckCircle,
      title: "Proven Track Record"
    },
    {
      icon: faAward,
      title: "Industry Recognition"
    },
    {
      icon: faUsers,
      title: "Expert Team"
    },
    {
      icon: faLightbulb,
      title: "Innovative Solutions"
    }
  ]

  return (
    <section className="about section bg-light">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-image">
            <img src={aboutImage || "/placeholder.svg"} alt="About Us" />
            <div className="experience-badge">
              <h2 className="experience-number">10+</h2>
              <p className="experience-text">Years Experience</p>
            </div>
          </div>

          <div className="about-content">
            <h6 className="about-subtitle">ABOUT US</h6>
            <h2 className="about-title">We've been providing advanced IT solutions ahead of time.</h2>
            <p className="about-lead">
             We are leading technology solutions providing company all over the world doing over 10+ years. We help businesses elevate their value through cloud solution, DevOps, custom software development, product design, QA and consultancy services.
            </p>
            <p className="about-description">
              We are committed to providing our clients with exceptional service while offering our employees the best
              training and a working atmosphere that promotes self-development and teamwork.
            </p>

          
          </div>
        </div>
      </div>
    </section>
  )
}

export default About