import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import ExchangeHeroSection from "../sections/exchange-hero"
import SupportedExchangeSection from "../sections/supported-exchange"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"
import UpcomingSupportSection from "../sections/upcoming-support"
import { softwareListData } from "../utils/staticData"

export default function Exchanges({ data }) {
  return (
    <LandingPageLayout>
      <ExchangeHeroSection extraClsName="light-bk" />
      <SupportedExchangeSection />
      <UpcomingSupportSection />
      <LevelUpCTASection />
      <TradingSoftwareSection {...softwareListData} />
    </LandingPageLayout>
  )
}
