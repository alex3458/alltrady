import React from "react"
import {
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
} from "../../utils/imgLoader"

const sectionData = [
  {
    imgSrc: Feature1,
  },
  {
    imgSrc: Feature2,
  },
  {
    imgSrc: Feature3,
  },
  {
    imgSrc: Feature4,
  },
  {
    imgSrc: Feature5,
  },
]

const FeatureCTASection = () => {
  return (
    <div className="section-cta as-featured-in">
      <div className="layout-container text-center">
        <h5 className="title">As featured in:</h5>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          {sectionData.map(({ imgSrc }, idx) => (
            <div className="feature-img" key={idx}>
              <img alt="featured in" src={imgSrc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeatureCTASection
