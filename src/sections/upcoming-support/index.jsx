import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SectionHeader from "../../components/common/SectionHeader"
import UpcomingSupportItem from "../../components/upcoming-support-item"
import SectionLayout from "../../layouts/SectionLayout"

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Integer enim neque volutpat ac tincidunt vitae semper quis.`
const UpcomingSupportSection = () => {
  const data = useStaticQuery(graphql`
    query UpcomingExchange {
      allPrismicExchanges(sort: { order: ASC, fields: data___position }) {
        nodes {
          data {
            name
            short_description
            upcoming
            icon {
              url
            }
          }
        }
      }
    }
  `)
  const upcomingData = data?.allPrismicExchanges.nodes.filter(
    item => item.data.upcoming === true
  )
  return (
    <SectionLayout sectionName="upcoming-support light-bk">
      <SectionHeader title="Upcoming support on Altrady" content={content} />

      <div className="row section-body">
        {upcomingData.map((item, idx) => (
          <UpcomingSupportItem {...item.data} key={idx} />
        ))}
      </div>
    </SectionLayout>
  )
}

export default UpcomingSupportSection
