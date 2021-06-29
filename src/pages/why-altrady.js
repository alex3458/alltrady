import React from "react"
import HeroComponent from "../components/hero"
import LandingPageLayout from "../layouts/LandingPageLayout"
import AltradySubscribeListSection from "../sections/altrady-subscribe-list"
import PeopleSayingSection3 from "../sections/people-saying3"
import ReviewsSection from "../sections/reviews/Reviews"
import TradeNowCTA from "../sections/trade-now-cta"
import TradingToolSection from "../sections/trading-tool"
import TradingFeaturesSection from "../sections/trading-features"
import ExclusiveVideoSection from "../sections/exclusive-video"
import BenefitSection from "../sections/benefit"
import {
  TradingPlatform,
  FastPowerfulTechnology,
  FundSecurity,
} from "../utils/imgLoader"
import FeatureCTASection from "../sections/feature-cta"
import JoinNowSection from "../sections/join-now"

const headerContent = `Easy & Simple Trading Platform For Higher Profits `
const sectionContent = `Get the power to trade and manage coins from many exchanges in one app.

Altrady has simplified day trading and automated trading for you. The app gives you advanced trading tools so you can save time trading while getting better profits.`
const altradySubscribeTitle = `Why subscribe to Altrady?`
const altradySubscribeContent = `With Altrady, you are at a huge advantage!
Our tools and technology give you the easiest way to manage your trades and portfolio.`

const benefitTitle = "Multiple Benefits. Single Platform."
const benefitContent = `With Altrady, you are at a huge advantage!
Our tools and technology give you the easiest way to manage your trades and portfolio.`
const benefitSectionData = [
  {
    title: "All-in-one trading platform",
    content: `With Altrady, you are at a huge advantage!
Our tools and technology give you the easiest way to manage your trades and portfolio.`,
    imgSrc: TradingPlatform,
  },
  {
    title: "Fast & powerful technology",
    content: `Make the right trading actions with speed and reliability! Altrady's innovative technology lets you react to changing markets with accuracy and efficiency.`,
    imgSrc: FastPowerfulTechnology,
  },
  {
    title: "100% fund security",
    content: `Altrady uses state-of-the-art encryption to safely store you API keys on the servers.`,
    imgSrc: FundSecurity,
  },
]
const WhyAltrady = () => {
  return (
    <LandingPageLayout>
      <HeroComponent
        clsName="section hero why-altrady"
        headerContent={headerContent}
        sectionContent={sectionContent}
        kickerText="Why Altrady?"
      />
      <TradeNowCTA
        title="Take Advantage Of The Fastest Crypto Trading Tool"
        description="Suitable For Day Trading or Automated Trading"
        btn="Trade now with Altrady"
      />
      <PeopleSayingSection3 showHeader={false} extraClsName="why-altrady" />
      <AltradySubscribeListSection
        title={altradySubscribeTitle}
        content={altradySubscribeContent}
      />

      <ReviewsSection />
      <TradingToolSection />
      <TradingFeaturesSection />
      <ExclusiveVideoSection />
      <BenefitSection
        title={benefitTitle}
        content={benefitContent}
        benefitSectionData={benefitSectionData}
      />
      <FeatureCTASection />
      <JoinNowSection />
    </LandingPageLayout>
  )
}

export default WhyAltrady
