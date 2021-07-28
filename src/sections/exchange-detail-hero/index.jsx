import React from "react"
import { Link } from "gatsby"
import GotoBtn from "../../components/common/GotoBtn"
import "../style.scss"
import { LeftAngle } from "../../utils/imgLoader"

const ExchangeDetailHeroSection = ({ exchangeData }) => {
  return (
    <section className={"section hero exchange-detail"}>
      <div className="exchange-layout text-center">
        <Link to="/exchanges" className="back__link justify-content-center">
          <img alt="left angle" src={LeftAngle} className="back-img" />
          All exchanges
        </Link>
        <div className="item-name d-flex justify-content-center">
          <img
            alt={exchangeData?.name}
            src={exchangeData?.icon.url}
            className="item__img"
          />
          <h3 className="item_title">{exchangeData?.name}</h3>
        </div>
        <p className="item__content txt-white">
          {exchangeData?.short_description}
        </p>
        <div className="tags d-flex justify-content-center">
          {exchangeData?.type_group.map((item, idx) => (
            <p
              className={
                item.support === true
                  ? "caption item__tag active"
                  : "caption item__tag"
              }
              key={idx}
            >
              {item.select_type}
            </p>
          ))}
        </div>
        <div className="item-detail d-flex justify-content-center">
          <div className="item-detail__col">
            <p className="caption">Markets:</p>
            <h4 className="item-detail__markets">1214</h4>
          </div>
          <div className="item-detail__col">
            <p className="caption">Coins:</p>
            <h4 className="item-detail__markets">358</h4>
          </div>
          <div className="item-detail__col">
            <p className="caption">24h Volume:</p>
            <h4 className="item-detail__markets">$123,345</h4>
          </div>
        </div>
        <GotoBtn to="/" clsName="btn-goto">
          Go to {exchangeData?.name}
        </GotoBtn>
        <p className="caption color-dark-tertiary text-center">
          * - not supported in Altrady
        </p>
      </div>
    </section>
  )
}

export default ExchangeDetailHeroSection
