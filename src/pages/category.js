import React from "react"
import { graphql } from "gatsby"
import BlogPageLayout from "../layouts/BlogPageLayout"
import BlogDetailList from "../sections/blog-detail-list"
import Seo from "../components/seo"

const Category = ({ location, data }) => {
  const currentSlug = location.pathname.split("/")[2]
  const categories = data?.allPrismicBlogCategory.nodes
  const currentCatetgory =
    categories && categories.filter(item => item.data.slug === currentSlug)
  const prismicId = currentCatetgory[0] && currentCatetgory[0].prismicId
  const blogData = data?.allPrismicBlogPostApi.nodes.filter(
    item => item.data.category.id === prismicId
  )
  return (
    <BlogPageLayout>
      <Seo
        title={currentCatetgory[0]?.data.meta_title}
        description={currentCatetgory[0]?.data.meta_description}
        keywords={currentCatetgory[0]?.data.meta_keywords}
        meta="nofollow, noindex"
      />
      <h1 className="category-name">
        {currentCatetgory[0] && currentCatetgory[0].data.name}
      </h1>
      <div className="layout-container">
        <BlogDetailList
          blogData={blogData}
          categories={categories}
          type="category"
        />
      </div>
    </BlogPageLayout>
  )
}

export const query = graphql`
  query Category {
    allPrismicBlogPostApi {
      nodes {
        data {
          category {
            id
          }
          date
          thumbnail {
            url
          }
          title
          slug
        }
      }
    }
    allPrismicBlogCategory {
      nodes {
        data {
          slug
          color
          name
          meta_title
          meta_keywords
          meta_description
        }
        prismicId
      }
    }
  }
`

export default Category
