import React from "react"
import { graphql } from "gatsby"
import BlogPageLayout from "../layouts/BlogPageLayout"
import BlogDetailContentSection from "../sections/blog-detail-content"
import BlogDetailHero from "../sections/blog-detail-hero"
import BlogDetailList from "../sections/blog-detail-list"
import Seo from "../components/seo"

const BlogDetail = ({ pageContext, data }) => {
  const { blogDetail } = pageContext
  const blogData = data?.allPrismicBlogPostApi.nodes
  const currentBlog = blogDetail?.data
  const categories = data?.allPrismicBlogCategory.nodes
  const features = blogData
    .filter(item => item.data.featured === true)
    .slice(0, 5)
  const moreBlog = blogData.slice(0, 8)
  return (
    <BlogPageLayout>
      <Seo
        title={blogDetail?.data.meta_title}
        description={blogDetail?.data.meta_description}
        keywords={blogDetail?.data.meta_keywords}
        meta="nofollow, noindex"
      />
      <BlogDetailHero blogData={currentBlog} categories={categories} />
      <div className="layout-container">
        <BlogDetailContentSection
          content={currentBlog?.content}
          features={features}
        />
        <BlogDetailList
          blogData={moreBlog}
          categories={categories}
          type="blog"
        />
      </div>
    </BlogPageLayout>
  )
}

export const query = graphql`
  query BlogDetail {
    allPrismicBlogCategory {
      nodes {
        data {
          color
          icon {
            url
          }
          slug
          name
        }
        prismicId
      }
    }
    allPrismicBlogPostApi(sort: { fields: data___date, order: DESC }) {
      nodes {
        data {
          title
          slug
          featured
          date
          category {
            id
          }
          summary
          thumbnail {
            alt
            url
          }
          meta_title
          meta_keywords
          meta_description
        }
      }
    }
  }
`

export default BlogDetail
