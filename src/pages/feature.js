import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import HeroSection from "../sections/hero"
import AllFeatures from "../sections/all-features"
import BenefitSection from "../sections/benefit"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"
import { softwareListData, benefitSectionData } from "../utils/staticData"

const benefitTitle = "Multiple Benefits. Single Platform."
const benefitContent = `With Altrady, you are at a huge advantage!
Our tools and technology give you the easiest way to manage your trades and portfolio.`
const title = `Level Up Now`
const description = `Overwhelmed with the complexity of the cryptocurrency world?
Bring your trading experience to another level with the power of cryptocurrency trading software Altrady, your best bitcoin trading platform choice`

export default function Feature() {
  return (
    <LandingPageLayout>
      <HeroSection extraClsName="light-bk" />
      <AllFeatures />
      <BenefitSection
        title={benefitTitle}
        content={benefitContent}
        benefitSectionData={benefitSectionData}
      />
      <LevelUpCTASection
        title={title}
        description={description}
        button="Try for free"
      />
      <TradingSoftwareSection {...softwareListData} />
    </LandingPageLayout>
  )
}
