import React from "react"
import NavDropdownResourceColumn from "./NavDropdownResourceColumn"
import NavDropdownExchangeColumn from "./NavDropdownExchangeColumn"
import NavDropdownFeatureColumn from "./NavDropdownFeatureColumn"

const NavResourcesTab = ({
  navResourceExchangeData,
  navResourceResourceData,
  navResourcePartnerData,
}) => {
  return (
    <div className="dropdown-content resource-tab">
      <div className="layout-container">
        <div className="row">
          <NavDropdownResourceColumn
            title="Resources"
            content={navResourceResourceData}
          />
          <NavDropdownFeatureColumn
            title="Partners"
            content={navResourcePartnerData}
          />
          <NavDropdownExchangeColumn
            title="Partner exchanges"
            content={navResourceExchangeData}
          />
        </div>
      </div>
    </div>
  )
}

export default NavResourcesTab
