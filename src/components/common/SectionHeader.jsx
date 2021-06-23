import React from "react"

const SectionHeader = ({ title, content }) => {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      {content && <p className="section-content member">{content}</p>}
    </div>
  )
}

export default SectionHeader
