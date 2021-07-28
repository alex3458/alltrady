import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import HeroComponent from "../components/hero"
import SubFeatures from "../sections/sub-features"
import FeatureOthers from "../sections/feature-others"
import LevelUpCTASection from "../sections/level-up-cta"

const title = `Level Up Now`
const description = `Overwhelmed with the complexity of the cryptocurrency world?
Bring your trading experience to another level with the power of cryptocurrency trading software Altrady, your best bitcoin trading platform choice`

export default function Feature({ pageContext }) {
  const { feature } = pageContext
  const featureData = feature?.data
  return (
    <LandingPageLayout>
      <HeroComponent
        clsName="section hero feature"
        headerContent={featureData?.header}
        sectionContent={featureData?.content}
        kickerText={featureData?.kicker}
        heroImg={featureData?.icon.url}
        type="feature"
      />
      <SubFeatures featuresData={featureData?.feature_group} />
      <FeatureOthers
        title={featureData?.section_title}
        featureOthers={featureData?.other_features}
      />
      <LevelUpCTASection
        title={title}
        description={description}
        button="Try for free"
        bk=" blue-bk"
      />
    </LandingPageLayout>
  )
}
