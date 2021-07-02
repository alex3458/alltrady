import React from "react"
import NavFeatureItem from "../common/NavFeatureItem"

const NavDropdownFeatureColumn = ({ title, content }) => {
  return (
    <div className="col-lg-4 nav-col">
      <h4 className="title">{title}</h4>
      <div className="row flex-column">
        {content &&
          content.map(({ name, slug, description, icon }, idx) => (
            <NavFeatureItem
              title={name}
              content={description}
              slug={slug}
              imgSrc={icon?.url}
              key={idx}
            />
          ))}
      </div>
    </div>
  )
}

export default NavDropdownFeatureColumn
