import React from "react"
import { Link } from "gatsby"

const title = `Join now`
const content = `Manage Your Digital Assets Within One Interface`
const JoinNowSection = ({ type }) => {
  return (
    <div className="section-cta join-now bk-color-blue">
      <h2 className="title">{title}</h2>
      <p className="lead-text">{content}</p>
      {type && (
        <Link className="btn-academy-join" to="https://www.altrady.com">
          Trade now with Altrady
        </Link>
      )}
    </div>
  )
}

export default JoinNowSection
