import React from "react"
import { Link } from "gatsby"

const ActionBtn = () => (
  <span className="btn-learn-more btn-text-learn text-link">Learn more</span>
)
const FeatureItem = ({ value, tag, even, showCTABtn = true }) => {
  return (
    <div className={"section-item row d-flex" + even}>
      <div className="col-lg-6 col-sm-12 section-item__content-wrapper">
        {tag && <p className="kicker">{tag}</p>}
        <h2 className="section-item__title">{value.data?.header}</h2>
        <p className="section-item__content">{value.data?.content}</p>
        {showCTABtn && (
          <Link
            to={`/${value.data?.slug}`}
            className="btn btn-second btn-learn"
          >
            <ActionBtn />
          </Link>
        )}
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="img-container">
          <img alt={value.data?.header} src={value.data?.icon.url} />
        </div>
      </div>
    </div>
  )
}

export default FeatureItem
