import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import DownloadHeroSection from "../sections/download-hero"
import TradingSoftwareSection from "../sections/trading-software"
import FeatureCTASection from "../sections/feature-cta"
import { softwareListData } from "../utils/staticData"

const Download = ({ data }) => {
  return (
    <LandingPageLayout>
      <DownloadHeroSection />
      <TradingSoftwareSection {...softwareListData} />
      <FeatureCTASection />
    </LandingPageLayout>
  )
}

export default Download
