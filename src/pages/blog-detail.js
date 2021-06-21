import React from "react"
import { graphql } from "gatsby"
import BlogPageLayout from "../layouts/BlogPageLayout"
import BlogDetailContentSection from "../sections/blog-detail-content"
import BlogDetailHero from "../sections/blog-detail-hero"
import BlogDetailList from "../sections/blog-detail-list"
import Seo from "../components/seo"

const BlogDetail = ({ location, data }) => {
  const currentSlug = location.pathname.split("/")[2]
  const blogData = data?.allPrismicBlogPostApi.nodes
  const currentBlog = blogData.filter(item => item.data.slug === currentSlug)
  const categories = data?.allPrismicBlogCategory.nodes
  const features = blogData
    .filter(item => item.data.featured === true)
    .slice(0, 5)
  const moreBlog = blogData.slice(0, 8)
  return (
    <BlogPageLayout>
      <Seo
        title={currentBlog[0] ? currentBlog[0].data.meta_title : ""}
        description={currentBlog[0] ? currentBlog[0].data.meta_description : ""}
        keywords={currentBlog[0] ? currentBlog[0].data.meta_keywords : ""}
      />
      <BlogDetailHero
        blogData={currentBlog && currentBlog[0]}
        categories={categories}
      />
      <div className="layout-container">
        <BlogDetailContentSection
          content={currentBlog && currentBlog[0]}
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
          category_color
          meta_title
          meta_keywords
          meta_description
          image {
            url
          }
          category_slug
          category_name
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
          content {
            type
            text
            url
            spans {
              start
              end
              type
            }
          }
          summary
          thumbnail {
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
