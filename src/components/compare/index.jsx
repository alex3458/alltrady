import React from "react"
import { YesIcon, NoIcon, WaitingIcon } from "../../utils/imgLoader"

const CompareComponent = ({
  desc,
  altrady,
  altradyContent,
  coinigy,
  coinigyContent,
  waiting,
  coinigyYes,
}) => {
  return (
    <div className="layout-container compare-section">
      <div className="text-center">
        {desc && <h4 className="title">{desc}</h4>}
        <div className="row mt-5">
          <div className="col-sm-6">
            {waiting ? (
              <img src={WaitingIcon} alt="waiting icon" />
            ) : (
              <img src={YesIcon} alt="yes icon" />
            )}
            <h4 className="my-3">{altrady}</h4>
            <p>{altradyContent}</p>
          </div>
          <div className="col-sm-6 mt-48">
            {coinigyYes ? (
              <img src={YesIcon} alt="yes icon" />
            ) : (
              <img src={NoIcon} alt="no icon" />
            )}
            <h4 className="my-3">{coinigy}</h4>
            <p>{coinigyContent}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareComponent
