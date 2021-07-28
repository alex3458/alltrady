import React from "react"
import { Link } from "gatsby"

const BlogDetailHero = ({ blogData, categories }) => {
  const categoryId = blogData?.category.id
  let color = ""
  let type = ""
  let slug = ""
  categories &&
    categories.forEach(item => {
      if (item.prismicId === categoryId) {
        color = item.data.color
        type = item.data.name
        slug = item.data.slug
      }
    })
  return (
    <div className="blog-detail-hero position-relative">
      <img
        src={blogData?.thumbnail.url}
        alt={blogData?.thumbnail.alt}
        className="blog-detail-bk w-100 h-600"
      />
      <div className="layout-container position-absolute blog-detail-hero__container">
        <Link to={`/category/${slug}`} className="category-link">
          <p className={"caption blog-detail-hero__type color-white " + color}>
            {type}
          </p>
        </Link>
        <h3 className="blog-detail-hero__title">{blogData?.title}</h3>
        <p className="caption blog-detail-hero__date color-dark-tertiary">
          {blogData?.date}
        </p>
      </div>
    </div>
  )
}

export default BlogDetailHero
