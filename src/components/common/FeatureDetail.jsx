import React from "react"
const FeatureDetail = ({ header, content, icon, tag, even }) => {
  return (
    <div className={"section-item row d-flex" + even}>
      <div className="col-lg-6 col-sm-12 section-item__content-wrapper">
        {tag && <p className="kicker">{tag}</p>}
        <h2 className="section-item__title">{header}</h2>
        <p className="section-item__content">{content}</p>
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="img-container">
          <img alt={header} src={icon.url} />
        </div>
      </div>
    </div>
  )
}

export default FeatureDetail
