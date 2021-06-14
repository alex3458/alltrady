import React from "react"
import { Link } from "gatsby"

const BlogDetailHero = ({ blogData, categories }) => {
  const data = blogData ? blogData.data : null
  const categoryId = data && data.category.id
  let color = "green"
  let type = "test"
  let slug = "crypto-trading"
  categories &&
    categories.forEach(item => {
      if (item.prismicId === categoryId) {
        color = item.data.category_color
        type = item.data.category_name
        slug = item.data.category_slug
      }
    })
  return (
    data && (
      <div className="blog-detail-hero position-relative">
        <img
          src={data.thumbnail?.url}
          alt="title"
          className="blog-detail-bk w-100 h-600"
        />
        <div className="layout-container position-absolute blog-detail-hero__container">
          <Link to={`/category/${slug}`} className="category-link">
            <p
              className={"caption blog-detail-hero__type color-white " + color}
            >
              {type}
            </p>
          </Link>
          <h3 className="blog-detail-hero__title">{data.title}</h3>
          <p className="caption blog-detail-hero__date color-dark-tertiary">
            {data.date}
          </p>
        </div>
      </div>
    )
  )
}

export default BlogDetailHero
