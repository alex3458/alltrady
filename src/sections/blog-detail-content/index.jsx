import React from "react"
import { RichText } from "prismic-reactjs"
import BlogListItem from "../../components/blog-list-item"
import htmlSerializer from "../../utils/htmlSerializer"

const BlogDetailContentSection = ({ content, features }) => {
  const renderData = content && content.data.content
  return (
    <div className="blog-detail-content row">
      <div className="col-lg-8">
        <RichText render={renderData} serializeHyperlink={htmlSerializer} />
      </div>
      <div className="col-lg-4">
        <h4 className="features-blogs tablet-hide">Features Blogs</h4>
        <div className="blogs-list tablet-hide">
          {features &&
            features.map((item, idx) => (
              <BlogListItem {...item.data} key={idx} />
            ))}
        </div>
        <div className="coindelist blog-detail"> </div>
      </div>
    </div>
  )
}

export default BlogDetailContentSection
