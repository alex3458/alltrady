import React from "react"
import { Link } from "gatsby"

const BlogListItem = ({ thumbnail, title, date, slug, extraCls = "" }) => {
  return (
    <div className="blog-list-item">
      <Link to={`/blog-detail/${slug}`}>
        <div className="d-flex">
          <div className="blog-list-item__img">
            <img alt={title} src={thumbnail?.url} />
          </div>
          <div className="blog-list-item__content d-flex flex-column justify-content-around">
            <h5 className="blog-list-item__title">{title}</h5>
            <p className="caption blog-list-item__date color-tertiary">
              {date}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogListItem