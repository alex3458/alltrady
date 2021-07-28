import React from "react"
import NavFeatureItem from "../common/NavFeatureItem"

const NavDropdownPartnerColumn = ({ title, content }) => {
  return (
    <div className="col-lg-4 nav-col">
      <h4 className="title">{title}</h4>
      <div className="row flex-column">
        {content &&
          content.map((item, idx) => (
            <NavFeatureItem
              title={item.name}
              content={item.description}
              slug={item.slug}
              imgSrc={item.icon?.url}
              key={idx}
            />
          ))}
      </div>
    </div>
  )
}

export default NavDropdownPartnerColumn
