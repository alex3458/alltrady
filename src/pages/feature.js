import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import HeroSection from "../sections/hero"
import AllFeatures from "../sections/all-features"
import BenefitSection from "../sections/benefit"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"
import {
  TradingPlatform,
  FastPowerfulTechnology,
  FundSecurity,
  FullyCustomizable,
  LearnTrading,
  RealTimeAlerts,
} from "../utils/imgLoader"
import { softwareListData } from "../utils/staticData"

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
  {
    title: "Fully customizable",
    content: `Customize your dashboard and configure alerts based on your trading goals and strategies.`,
    imgSrc: FullyCustomizable,
  },
  {
    title: "Learn trading with experts",
    content: `Grow your crypto knowledge and boost your trading experience with the help of experts from the Altrady community!`,
    imgSrc: LearnTrading,
  },
  {
    title: "Real-time alerts",
    content: `Get immediate notifications and real-time crypto alerts powered by our unique algorithms and websockets connection.`,
    imgSrc: RealTimeAlerts,
  },
]
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
