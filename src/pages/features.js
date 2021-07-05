import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import HeroSection from "../sections/hero"
import AllFeatures from "../sections/all-features"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"
import { softwareListData, featuresHeroData } from "../utils/staticData"

const title = `Level Up Now`
const description = `Overwhelmed with the complexity of the cryptocurrency world?
Bring your trading experience to another level with the power of cryptocurrency trading software Altrady, your best bitcoin trading platform choice`

export default function Features() {
  return (
    <LandingPageLayout>
      <HeroSection extraClsName="light-bk" heroSectionData={featuresHeroData} />
      <AllFeatures />
      <LevelUpCTASection
        title={title}
        description={description}
        button="Try for free"
      />
      <TradingSoftwareSection {...softwareListData} />
    </LandingPageLayout>
  )
}
