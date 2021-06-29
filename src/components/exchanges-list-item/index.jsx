import React from "react"
import { Link } from "gatsby"
import "../style.scss"

const ExchangesListItem = ({
  icon,
  name,
  type_group,
  short_description,
  slug,
}) => {
  return (
    <div className="col-lg-6 col-sm-12 item-container">
      <div className="item d-flex flex-column justify-content-between">
        <div>
          <div className="item-header d-flex">
            <img src={icon.url} alt={name} className="item__img" />
            <div className="item-title__container">
              <h4 className="item__title">{name}</h4>
              <div className="d-flex">
                {type_group.map((item, idx) => (
                  <p
                    className={
                      item.support === true
                        ? "caption item-tag active"
                        : "caption item-tag"
                    }
                    key={idx}
                  >
                    {item.select_type}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="item-content">
            <p className="item-content__content">{short_description}</p>
            <div className="item-content-info d-flex">
              <div className="item-content-info__container">
                <p className="caption">Markets:</p>
                <h4 className="item-content-info__value">1223</h4>
              </div>
              <div className="item-content-info__container">
                <p className="caption">Coins:</p>
                <h4 className="item-content-info__value">643</h4>
              </div>
              <div className="item-content-info__container">
                <p className="caption">24h Volume:</p>
                <h4 className="item-content-info__value">$563,443</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="action d-flex justify-content-between">
          <Link
            to={`/exchanges/${slug}`}
            className="btn-learn-more button color-primary position-relative text-link"
          >
            Learn more
          </Link>
          <p className="caption">* - not supported in Altrady</p>
        </div>
      </div>
    </div>
  )
}

export default ExchangesListItem
