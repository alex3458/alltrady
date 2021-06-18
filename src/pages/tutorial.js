import React from "react"
import AcademyPageLayout from "../layouts/AcademyPageLayout"
import JoinNowSection from "../sections/join-now"
import TutorialSection from "../sections/tutorials"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Tutorial = ({ location, data }) => {
  const currentSlug = location.pathname.split("/")[2]
  const tutorialData =
    data &&
    data.allPrismicTutorial.nodes.filter(item => item.data.slug === currentSlug)
  const currentTutorial = tutorialData[0] && tutorialData[0].data

  const categoryId = tutorialData[0] && tutorialData[0].data.category.id
  const currentCategory =
    data &&
    data.allPrismicCourseCategory.nodes.filter(
      item => item.prismicId === categoryId
    )
  const categorySlug = currentCategory[0] && currentCategory[0].data.slug
  const categoryName = currentCategory[0] && currentCategory[0].data.name

  const tutorialList =
    data &&
    data.allPrismicTutorial.nodes.filter(
      item => item.data.category.id === categoryId
    )

  return (
    <AcademyPageLayout>
      <Seo
        title="Altrady - Crypto Academy To Expand Your Trading Knowledge"
        description="Altrady brings to you his cryptocurrency academy to help beginners and more advanced crypto traders with their trading strategy."
      />
      <TutorialSection
        currentTutorial={currentTutorial}
        tutorialList={tutorialList}
        categorySlug={categorySlug}
        categoryName={categoryName}
      />
      <JoinNowSection type="academy" />
    </AcademyPageLayout>
  )
}

export const query = graphql`
  query Tutorial {
    allPrismicCourseCategory {
      nodes {
        data {
          name
          slug
        }
        prismicId
      }
    }
    allPrismicTutorial(sort: { order: ASC, fields: first_publication_date }) {
      nodes {
        data {
          category {
            id
          }
          name
          duration
          slug
          description {
            raw
          }
          video_embed
        }
      }
    }
  }
`

export default Tutorial
