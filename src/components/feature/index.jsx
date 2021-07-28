import React from "react"
import { Link } from "gatsby"
const FeatureOther = ({ title, desc, icon, url }) => {
  return (
    <div className="benefit-item col-lg-4 col-sm-6 ">
      <img alt={title} src={icon?.url} className="benefit-item__image" />
      <h4 className="benefit-item__title">{title}</h4>
      <p className="benefit-item__content mb-2">{desc}</p>
      <Link className="find-out btn-text text-link" to={`/${url}`}>
        Find out more
      </Link>
    </div>
  )
}

export default FeatureOther
