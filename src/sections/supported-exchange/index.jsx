import React from "react"
import SectionHeader from "../../components/common/SectionHeader"
import ExchangesListItem from "../../components/exchanges-list-item"
import SectionLayout from "../../layouts/SectionLayout"
import { useStaticQuery, graphql } from "gatsby"

const sectionContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Integer enim neque volutpat ac tincidunt vitae semper quis.`

const SupportedExchangeSection = () => {
  const data = useStaticQuery(graphql`
    query Exchanges {
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
            upcoming
            icon {
              url
            }
          }
        }
      }
    }
  `)
  const exchangesData = data?.allPrismicExchanges.nodes.filter(
    item => item.data.upcoming === false
  )
  return (
    <SectionLayout sectionName="supported-exchange">
      <SectionHeader title="Supported exchanges" content={sectionContent} />

      <div className="row exchanges-list">
        {exchangesData.map((item, idx) => (
          <ExchangesListItem {...item.data} key={idx} />
        ))}
      </div>
    </SectionLayout>
  )
}

export default SupportedExchangeSection
