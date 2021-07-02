import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import AnnualPlanSection from "../sections/annual-plan"
import FAQSection from "../sections/faq"
import FeatureCTASection from "../sections/feature-cta"
import PeopleSayingSection from "../sections/people-saying"
import PricingHero from "../sections/pricing-hero"
import { testimonials1 } from "../utils/staticData"

const title = `Frequently Asked Questions`
const content = `To support the global trading community, we are offering special discounts for Annual plan.`
const questions = [
  {
    title: `Question`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim.`,
  },
  {
    title: `Question`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim.`,
  },
  {
    title: `Question`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim.`,
  },
  {
    title: `Question`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim.`,
  },
  {
    title: `Question`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim.`,
  },
  {
    title: `Question`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim.`,
  },
  {
    title: `Question`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim.`,
  },
]

export default function Pricing() {
  return (
    <LandingPageLayout>
      <PricingHero />
      <AnnualPlanSection />
      <FAQSection title={title} content={content} questions={questions} />
      <FeatureCTASection />
      <PeopleSayingSection {...testimonials1} />
    </LandingPageLayout>
  )
}
