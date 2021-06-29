import React from "react"
import { Link } from "gatsby"

const CoinigyHero = ({
  clsName,
  kickerText,
  headerContent,
  sectionContent,
  heroImg,
}) => {
  return (
    <section className={clsName}>
      <div className="layout-container">
        <div className="text-center">
          <p className="kicker">{kickerText}</p>
          <h1 className="section-title">{headerContent}</h1>
          <p className="section-content">{sectionContent}</p>
          <div className="d-flex justify-content-center">
            <Link to="/" className={"btn btn-primary my-4"}>
              Join Altrady
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-img-container img-container">
              <img src={heroImg} alt={headerContent} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img-container img-container">
              <img src={heroImg} alt={headerContent} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoinigyHero
