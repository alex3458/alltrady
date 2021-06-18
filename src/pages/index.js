import React from "react"
import { graphql } from "gatsby"
import LandingPageLayout from "../layouts/LandingPageLayout"
import HeroSection from "../sections/hero"
import ExchangeSection from "../sections/exchanges"
import BenefitSection from "../sections/benefit"
import FeaturesListSection from "../sections/features-list"
import ReviewsSection from "../sections/reviews/Reviews"
import CoinCryptorSection from "../sections/coin-cryptor"
import PeopleSayingSection from "../sections/people-saying"
import PeopleSayingSection2 from "../sections/people-saying2"
import FeatureCTASection from "../sections/feature-cta"
import PeopleSayingSection3 from "../sections/people-saying3"
import BestCryptorSection from "../sections/best-cryptor"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"
import Seo from "../components/seo"
import {
  heroSectionData,
  benefitSection,
  benefitSectionData,
  featuresSection,
  featuresListData,
  reviewsData,
  testimonials1,
  testimonials2,
  benoistTestimonial,
  bestCryptorSection,
  softwareListData,
} from "../utils/staticData"

export default function Home({ data }) {
  const blogCategories = data.allPrismicBlogCategory.nodes
  const bestCryptorSectionData = data.allPrismicBlogPostApi.nodes.slice(0, 8)
  const exchangeData = data?.allPrismicExchanges.nodes[0].data.exchange_group
  return (
    <LandingPageLayout>
      <Seo title="Altrady Crypto Trading Software is Fast, Easy & Secure" />
      <HeroSection heroSectionData={heroSectionData} />
      <ExchangeSection exchangeData={exchangeData} />
      <BenefitSection
        title={benefitSection.title}
        content={benefitSection.content}
        benefitSectionData={benefitSectionData}
      />
      <FeaturesListSection
        title={featuresSection.title}
        content={featuresSection.content}
        featuresListData={featuresListData}
      />
      <ReviewsSection {...reviewsData} />
      <CoinCryptorSection />
      <PeopleSayingSection {...testimonials1} />
      <PeopleSayingSection2 {...testimonials2} />
      <FeatureCTASection />
      <PeopleSayingSection3 {...benoistTestimonial} />
      <BestCryptorSection
        title={bestCryptorSection.title}
        content={bestCryptorSection.content}
        categories={blogCategories}
        data={bestCryptorSectionData}
      />
      <LevelUpCTASection />
      <TradingSoftwareSection {...softwareListData} />
    </LandingPageLayout>
  )
}

export const query = graphql`
  query Home {
    allPrismicExchanges(
      sort: { order: ASC, fields: data___exchange_group___position }
    ) {
      nodes {
        data {
          exchange_group {
            slug
            name
            partner
            icon {
              url
            }
          }
        }
      }
    }
    allPrismicBlogPostApi(sort: { fields: data___date, order: DESC }) {
      nodes {
        data {
          title
          slug
          featured
          date
          category {
            id
          }
          content {
            type
            text
            url
          }
          summary
          thumbnail {
            url
          }
        }
      }
    }
    allPrismicBlogCategory {
      nodes {
        data {
          category_color
          category_name
          category_slug
          meta_description
          meta_keywords
          meta_title
        }
        prismicId
      }
    }
  }
`
