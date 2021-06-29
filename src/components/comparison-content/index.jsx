import React from "react"

const ComparisonContent = ({ kickerText, title, content, img }) => {
  return (
    <div className="layout-container member">
      <div className="text-center">
        <p className="kicker">{kickerText}</p>
        <h1 className="section-title">{title}</h1>
        {content && <p className="section-content">{content}</p>}
        <div className="compare-img-container">
          <img src={img} alt={title} />
        </div>
      </div>
    </div>
  )
}

export default ComparisonContent
