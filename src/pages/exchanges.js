import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import ExchangeHeroSection from "../sections/exchange-hero"
import SupportedExchangeSection from "../sections/supported-exchange"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"
import UpcomingSupportSection from "../sections/upcoming-support"
import { softwareListData } from "../utils/staticData"
const title = `Level Up Now`
const description = `Overwhelmed with the complexity of the cryptocurrency world?
Bring your trading experience to another level with the power of cryptocurrency trading software Altrady, your best bitcoin trading platform choice`
export default function Exchanges({ data }) {
  return (
    <LandingPageLayout>
      <ExchangeHeroSection extraClsName="light-bk" />
      <SupportedExchangeSection />
      <UpcomingSupportSection />
      <LevelUpCTASection
        title={title}
        description={description}
        button="Try for free"
      />
      <TradingSoftwareSection {...softwareListData} />
    </LandingPageLayout>
  )
}
