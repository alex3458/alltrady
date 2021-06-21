import React from "react"

const BenefitItem = ({ title, content, image }) => {
  return (
    <div className="benefit-item col-lg-4 col-sm-6">
      <img alt={title} src={image?.url} className="benefit-item__image" />
      <h4 className="benefit-item__title">{title}</h4>
      <p className="benefit-item__content">{content}</p>
    </div>
  )
}

export default BenefitItem
