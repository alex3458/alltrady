import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import ExchangeDetailHeroSection from "../sections/exchange-detail-hero"
import BenefitSection from "../sections/benefit"
import FeaturesListSection from "../sections/features-list"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"
import { softwareListData, featuresListData } from "../utils/staticData"

const benefitContent = `With Altrady, you are at a huge advantage!
Our tools and technology give you the easiest way to manage your trades and portfolio.`

const featuresListContent = `With Altrady, you are at a huge advantage!
Our tools and technology give you the easiest way to manage your trades and portfolio.`
const title = `Level Up Now`
const description = `Overwhelmed with the complexity of the cryptocurrency world?
Bring your trading experience to another level with the power of cryptocurrency trading software Altrady, your best bitcoin trading platform choice`

const Exchange = ({ pageContext }) => {
  const { exchange } = pageContext
  const benefitSectionData = exchange?.data.benefit_group
  const exchangeName = exchange?.data.name

  return (
    <LandingPageLayout>
      <ExchangeDetailHeroSection exchangeData={exchange?.data} />
      <BenefitSection
        title={exchangeName + " Exchange Benefits"}
        content={benefitContent}
        benefitSectionData={benefitSectionData}
      />
      <FeaturesListSection
        title={
          "Make " +
          exchangeName +
          " even better with following Altrady features"
        }
        content={featuresListContent}
        featuresListData={featuresListData}
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

export default Exchange
