import React from "react"
import BlogHeader from "../../components/blog-header"
import Footer from "../../components/footer"

const BlogPageLayout = ({ children, navData }) => {
  return (
    <>
      <BlogHeader />
      {/* <div className="overlap"></div> */}
      <main>{children}</main>
      <Footer exchangeData={navData} />
    </>
  )
}

export default BlogPageLayout
