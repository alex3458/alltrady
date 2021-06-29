import React, { useState } from "react"
import { Logo } from "../../utils/imgLoader"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import "../style.scss"
import LinkSecondBtn from "../common/LinkSecondBtn"
import LinkPrimaryBtn from "../common/LinkPrimaryBtn"
import NavFeatureTab from "./NavFeatureTab"
import NavExchangesTab from "./NavExchangesTab"
import NavResourcesTab from "./NavResourcesTab"
import BodyClassName from "react-body-classname"
import { navResourceResourceData } from "../../utils/staticData"

const Header = () => {
  const data = useStaticQuery(graphql`
    query Header {
      allPrismicPartners {
        nodes {
          data {
            partner_group {
              name
              icon {
                url
              }
              description
            }
          }
        }
      }
      allPrismicExchanges(sort: { order: ASC, fields: data___position }) {
        nodes {
          data {
            name
            slug
            upcoming
            icon {
              url
            }
            partner
          }
        }
      }
      allPrismicFeatures(
        sort: { order: ASC, fields: data___feature_group___priority }
      ) {
        nodes {
          data {
            feature_group {
              name
              slug
              description
              featured_in_navbar
              type
              icon {
                url
              }
            }
          }
        }
      }
    }
  `)

  const exchangeData = data?.allPrismicExchanges.nodes.filter(
    item => item.data.upcoming === false
  )
  const navResourceExchangeData = exchangeData?.filter(
    item => item.data.partner === true
  )

  const featureData = data.allPrismicFeatures.nodes[0].data.feature_group.filter(
    item => item.featured_in_navbar === true
  )
  const navFeatureDiscoverData = featureData.filter(
    item => item.type === "Discover"
  )
  const navFeatureExcuteData = featureData.filter(
    item => item.type === "Execute"
  )
  const navFeatureAnalyzeData = featureData.filter(
    item => item.type === "Analyze"
  )

  const navResourcePartnerData =
    data.allPrismicPartners.nodes[0].data.partner_group

  const [hambugerActive, setHambugerActiveState] = useState(false)
  const [navMenuShow, setNavMenuShow] = useState(["", "", ""])
  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive)
  }
  const navMenuClick = idx => {
    let navMenuValue = navMenuShow
    if (navMenuShow[idx] === "show") {
      navMenuValue[idx] = ""
    } else {
      navMenuValue[idx] = "show"
    }
    setNavMenuShow(navMenuValue)
  }
  let humbugerClsName = "hamburger my-auto m-4 "
  let navMenuClsName = "nav-items desktop"
  let bodyClsName = ""
  if (hambugerActive) {
    humbugerClsName += "active"
    navMenuClsName += " active"
    bodyClsName += "bk-color-white"
  }
  return (
    <BodyClassName className={bodyClsName}>
      <header className="header">
        <div className="layout-container">
          <nav className="header-nav">
            <Link to="/">
              <img alt="altrady logo" src={Logo} className="" />
            </Link>
            <div className="d-flex">
              <ul className="nav-items tablet-show">
                <li className="nav-item">
                  <Link to="/download" className="nav-link">
                    Download
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/pricing" className="nav-link">
                    Pricing
                  </Link>
                </li>
                <li className="">
                  <LinkPrimaryBtn to="#try-free">Try for Free</LinkPrimaryBtn>
                </li>
              </ul>
              <div
                className={humbugerClsName}
                onClick={hamburgerHandler}
                onKeyDown={hamburgerHandler}
                role="button"
                tabIndex="0"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul className={navMenuClsName}>
                <li
                  className={"nav-item dropdown " + navMenuShow[0]}
                  onClick={() => navMenuClick(0)}
                  onKeyDown={() => navMenuClick(0)}
                  role="presentation"
                >
                  <Link to="/features" className="nav-link dropdown-item">
                    Features
                    <span />
                  </Link>
                  <NavFeatureTab
                    navFeatureDiscoverData={navFeatureDiscoverData}
                    navFeatureExcuteData={navFeatureExcuteData}
                    navFeatureAnalyzeData={navFeatureAnalyzeData}
                  />
                </li>
                <li
                  className={"nav-item dropdown " + navMenuShow[1]}
                  onClick={() => navMenuClick(1)}
                  onKeyDown={() => navMenuClick(1)}
                  role="presentation"
                >
                  <Link to="/exchanges" className="nav-link dropdown-item">
                    Exchanges
                    <span />
                  </Link>
                  <NavExchangesTab exchangeData={exchangeData} />
                </li>
                <li className="nav-item">
                  <Link to="/download" className="nav-link">
                    Download
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/pricing" className="nav-link">
                    Pricing
                  </Link>
                </li>
                <li
                  className={"nav-item dropdown " + navMenuShow[2]}
                  onClick={() => navMenuClick(2)}
                  onKeyDown={() => navMenuClick(2)}
                  role="presentation"
                >
                  <Link to="#resources" className="nav-link dropdown-item">
                    Resources
                    <span />
                  </Link>
                  <NavResourcesTab
                    navResourceExchangeData={navResourceExchangeData}
                    navResourceResourceData={navResourceResourceData}
                    navResourcePartnerData={navResourcePartnerData}
                  />
                </li>
                <li className="action-btns">
                  <LinkSecondBtn to="#login">Log in</LinkSecondBtn>
                  <LinkPrimaryBtn to="#try-free">Try for Free</LinkPrimaryBtn>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </BodyClassName>
  )
}

export default Header
