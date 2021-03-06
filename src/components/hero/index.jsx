import React from "react"
import { Link } from "gatsby"
import LinkSecondBtn from "../../components/common/LinkSecondBtn"
import "../style.scss"

const HeroComponent = ({
  clsName,
  kickerText,
  headerContent,
  sectionContent,
  sectionCaption,
  heroImg,
  type,
  slug,
}) => {
  return (
    <section className={clsName}>
      <div className="layout-container">
        <div className="row">
          <div className="col-lg-6 left-part">
            {type === "course" && (
              <div className="__breadcrumb">
                <Link to="/academy" className="pr-3">
                  Altrady Academy
                </Link>
                /
                <Link to={`/academy/${slug}`} className="pl-3">
                  {headerContent}
                </Link>
              </div>
            )}
            <p className="kicker">{kickerText}</p>
            <h1 className="section-title">{headerContent}</h1>
            <p className="section-content">{sectionContent}</p>
            <div className="btn-container">
              {!type && (
                <a
                  href="https://app.altrady.com/dashboard#/signup"
                  className="btn btn-primary "
                >
                  Try for Free
                </a>
              )}
              {sectionCaption && (
                <LinkSecondBtn to="/why-altrady">Why Altrady?</LinkSecondBtn>
              )}
              {type === "feature" && (
                <>
                  <a
                    className="btn btn-primary"
                    href="https://app.altrady.com/dashboard#/signup "
                  >
                    Try now in Altrady
                  </a>
                  <LinkSecondBtn to="/features">See all features</LinkSecondBtn>
                </>
              )}
              {type === "landing" && (
                <a
                  className="btn btn-primary"
                  href="https://app.altrady.com/dashboard#/signup "
                >
                  Sign up now
                </a>
              )}
            </div>
            <p className="section-caption caption">{sectionCaption}</p>
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

export default HeroComponent
