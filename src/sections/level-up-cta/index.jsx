import React from "react"
import LinkPrimaryBtn from "../../components/common/LinkPrimaryBtn"

const LevelUpCTASection = ({ title, description, button, clsName }) => {
  return (
    <div className={"section-cta level-up " + clsName}>
      <div className="member">
        <h2 className="title">{title}</h2>
        <p className="lead-text">{description}</p>
        <LinkPrimaryBtn clsName="btn-normal">{button}</LinkPrimaryBtn>
      </div>
    </div>
  )
}

export default LevelUpCTASection
