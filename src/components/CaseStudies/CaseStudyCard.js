const CaseStudyCard = ({ image, category, title, description }) => {
  return (
    <div className="case-study-card">
      <div className="case-study-image">
        <img src={image || "/placeholder.svg"} alt={title} />
        <div className="case-study-overlay">
          <span className="category">{category}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href="#" className="read-more">
            View Details <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyCard
