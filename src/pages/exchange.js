import React from "react"
import { graphql } from "gatsby"
import LandingPageLayout from "../layouts/LandingPageLayout"
import ExchangeDetailHeroSection from "../sections/exchange-detail-hero"
import BenefitSection from "../sections/benefit"
import FeaturesListSection from "../sections/features-list"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"
import { softwareListData } from "../utils/staticData"

const benefitTitle = "Binance Exchange Benefits"
const benefitContent = `With Altrady, you are at a huge advantage!
Our tools and technology give you the easiest way to manage your trades and portfolio.`

const featuresListTitle =
  "Make Binance even better with following Altrady features"
const featuresListContent = `With Altrady, you are at a huge advantage!
Our tools and technology give you the easiest way to manage your trades and portfolio.`
const title = `Level Up Now`
const description = `Overwhelmed with the complexity of the cryptocurrency world?
Bring your trading experience to another level with the power of cryptocurrency trading software Altrady, your best bitcoin trading platform choice`
const Exchange = ({ location, data }) => {
  const currentSlug = location.pathname.split("/")[2]
  const exchangeData = data?.allPrismicExchanges.nodes.filter(
    item => item.data.slug === currentSlug
  )
  const benefitSectionData = exchangeData[0]?.data.benefit_group
  return (
    <LandingPageLayout>
      <ExchangeDetailHeroSection exchangeData={exchangeData[0]?.data} />
      <BenefitSection
        title={benefitTitle}
        content={benefitContent}
        benefitSectionData={benefitSectionData}
      />
      <FeaturesListSection
        title={featuresListTitle}
        content={featuresListContent}
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

export const query = graphql`
  query ExchangeDetail {
    allPrismicExchanges(sort: { order: ASC, fields: data___position }) {
      nodes {
        data {
          name
          type_group {
            support
            select_type
          }
          short_description
          slug
          icon {
            url
          }
          benefit_group {
            title
            content
            image {
              url
            }
          }
        }
      }
    }
  }
`
