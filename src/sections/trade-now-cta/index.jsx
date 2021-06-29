import React from "react"
import LinkNormalBtn from "../../components/common/LinkNormalBtn"

const TradeNowCTA = ({ title, description, btn }) => {
  return (
    <div className="section-cta cryptor-trading-tool">
      <h2 className="title">{title}</h2>
      {description && <p className="lead-text">{description}</p>}
      <LinkNormalBtn>{btn}</LinkNormalBtn>
    </div>
  )
}

export default TradeNowCTA
