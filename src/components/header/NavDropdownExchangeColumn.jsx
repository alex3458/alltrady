import React from "react"
import NavExchangeItem from "../common/NavExchangeItem"

const NavDropdownExchangeColumn = ({ title, content }) => {
  return (
    <div className="col-lg-4 nav-col">
      <h4 className="title">{title}</h4>
      <div className="row flex-column">
        {content &&
          content.map(({ name, icon, slug }, idx) => (
            <NavExchangeItem
              title={name}
              imgSrc={icon.url}
              slug={slug}
              key={idx}
            />
          ))}
      </div>
    </div>
  )
}

export default NavDropdownExchangeColumn
