import React from "react"
import NavDropdownFeatureColumn from "./NavDropdownFeatureColumn"
import { Link } from "gatsby"

const NavAcademyTab = ({ navAcadmeyData }) => {
  return (
    <div className="dropdown-content academy">
      <div className="layout-container">
        <div className="row">
          <NavDropdownFeatureColumn title="Courses" content={navAcadmeyData} />
        </div>
        <div className="action-wrapper">
          <Link to="/features" className="view-all link-non-effect">
            <p className="view-all-feature text-link">View all coursess</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavAcademyTab
