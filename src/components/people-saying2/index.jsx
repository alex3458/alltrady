import React from "react"
import { Link } from "gatsby"

const ActionBtn = ({ url }) => (
  <Link className="find-more btn-text text-link" to={url}>
    Find out more
  </Link>
)

const PeopleSayingItem2 = ({ imgSrc, title, content, url }) => {
  return (
    <div className="col-lg-4 col-sm-12">
      <div className="people-saying-item second">
        <img alt={title} src={imgSrc} className="people-saying-item__img" />
        <h4 className="title">{title}</h4>
        <p className="content">{content}</p>
        <ActionBtn url={url} />
      </div>
    </div>
  )
}

export default PeopleSayingItem2
