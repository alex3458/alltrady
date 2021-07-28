import React from "react"
import { Link } from "gatsby"

const SectionHeader = ({ title, content, btn }) => {
  return (
    <div className="section-header member">
      {title && <h2 className="section-title">{title}</h2>}
      {content && <p className="section-content member">{content}</p>}
      {btn && (
        <Link to="/" className="btn btn-primary mt-3">
          {btn}
        </Link>
      )}
    </div>
  )
}

export default SectionHeader
