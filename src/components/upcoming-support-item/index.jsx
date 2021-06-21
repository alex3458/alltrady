import React from "react"

const UpcomingSupportItem = ({ name, icon, short_description, slug }) => {
  return (
    <div className="col-lg-6">
      <div className="item">
        <div className="d-flex">
          <img alt={name} src={icon.url} className="item__img" />
          <h4 className="item__title d-flex align-items-center">{name}</h4>
        </div>
        <p className="item__content">{short_description}</p>
      </div>
    </div>
  )
}

export default UpcomingSupportItem
