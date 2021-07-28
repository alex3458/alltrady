import React from "react"
import { PlanCheck } from "../../utils/imgLoader"

const SupportItem = ({ title, content, even, features, img }) => {
  return (
    <div className={"row d-flex" + even}>
      <div className="col-lg-6 col-sm-12 section-item__content-wrapper">
        <h2 className="section-item__title">{title}</h2>
        {content && <p className="section-item__content">{content}</p>}
        {features && (
          <ul>
            {features.map((item, idx) => (
              <li key={idx} className="d-flex">
                <img
                  src={PlanCheck}
                  alt="Altrady"
                  className="section-item__plan-check"
                />
                <p className="section-item__content">{item.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="img-container">
          {img && <img alt={title} src={img.url} />}
        </div>
      </div>
    </div>
  )
}

export default SupportItem
