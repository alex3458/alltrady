import React from "react"
import { Link } from "gatsby"

const ExchangeItem = ({ title, content, slug, imgSrc, extraCls = "" }) => {
  return (
    <Link to={`/exchanges/${slug}`} className={"link-non-effect" + extraCls}>
      <div className="feature-item">
        <img alt={title} src={imgSrc} className="feature-item__image" />
        <div className="feature-item__content-wrapper">
          <h5 className="feature-item_title">{title}</h5>
          {content && <p className="label feature-item_content">{content}</p>}
        </div>
      </div>
    </Link>
  )
}

export default ExchangeItem
