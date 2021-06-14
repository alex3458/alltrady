import React from "react"
import AcademyHeader from "../../components/academy-header"
import Footer from "../../components/footer"

const AcademyPageLayout = ({ children, navData }) => {
  return (
    <>
      <AcademyHeader />
      <main>{children}</main>
      <Footer exchangeData={navData} />
    </>
  )
}

export default AcademyPageLayout
