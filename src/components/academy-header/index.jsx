import React, { useState } from "react"
import { BLogo } from "../../utils/imgLoader"
import { Link } from "gatsby"
import "../style.scss"
import LinkPrimaryBtn from "../common/LinkPrimaryBtn"
import NavAcademyTab from "../header/NavAcademyTab"

import BodyClassName from "react-body-classname"
import { AcademyIcon } from "../../utils/imgLoader"

const AcademyHeader = () => {
  const [hambugerActive, setHambugerActiveState] = useState(false)
  const [navMenuShow, setNavMenuShow] = useState(["", ""])
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
      <header className="header academy-header">
        <div className="layout-container">
          <nav className="header-nav">
            <div className="left-side d-flex">
              <Link to="/">
                <img alt="altrady logo" src={BLogo} />
              </Link>
              <Link to="/academy">
                <div className="navbar-academy d-flex">
                  <img
                    alt="academy icon"
                    src={AcademyIcon}
                    className="blog-icon"
                  />
                  <p className="navlink color-secondary m-auto">Academy</p>
                </div>
              </Link>
            </div>
            <div className="d-flex">
              <ul className="nav-items tablet-show">
                <li className="nav-item">
                  <Link to="#courses" className="nav-link">
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#download" className="nav-link">
                    Download
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
                  className={"nav-item dropdown " + navMenuShow[1]}
                  onClick={() => navMenuClick(1)}
                  onKeyDown={() => navMenuClick(1)}
                  role="presentation"
                >
                  <Link to="#courses" className="nav-link dropdown-item">
                    Courses
                    <span />
                  </Link>
                  <NavAcademyTab />
                </li>
                <li className="nav-item">
                  <Link to="#download" className="nav-link">
                    Download
                  </Link>
                </li>
                <li className="action-btns">
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

export default AcademyHeader
