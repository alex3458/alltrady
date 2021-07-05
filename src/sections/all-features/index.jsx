import React from "react"
import SectionLayout from "../../layouts/SectionLayout"
import FeatureItem from "../../components/common/FeatureItem"
import { featuresData } from "../../utils/staticData"

const AllFeatures = () => {
  return (
    <SectionLayout sectionName="all-features">
      <div className="cryptor-content-wrapper">
        {featuresData.map((item, idx) => (
          <FeatureItem
            key={idx}
            tag={item.kicker}
            even={idx % 2 === 0 ? " flex-row-reverse" : ""}
            {...item}
          />
        ))}
      </div>
    </SectionLayout>
  )
}

export default AllFeatures
