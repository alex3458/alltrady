import React from "react"
const SoftwareCard = ({ os, os_description, img, cta_text, clsName, url }) => {
  return (
    <div className={clsName}>
      <div className="software-card">
        <img alt={os} src={img?.url} className="benefit-item__image" />
        <h4 className="os">{os}</h4>
        <p className="description">{os_description}</p>
        <div>
          <a href={url} className="btn-text open-now text-link">
            {cta_text}
          </a>
        </div>
      </div>
    </div>
  )
}

export default SoftwareCard
