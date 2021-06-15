import React from "react"
import AcademyPageLayout from "../layouts/AcademyPageLayout"
import HeroComponent from "../components/hero"
import JoinNowSection from "../sections/join-now"
import CourseDetail from "../sections/courses/course-detail"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Course = ({ location, data }) => {
  const currentSlug = location.pathname.split("/")[2]
  const exchangeData =
    data && data.allPrismicExchange.nodes[2].data.exchange_item
  const categoryData =
    data &&
    data.allPrismicCourseCategory.nodes.filter(
      item => item.data.slug === currentSlug
    )
  const courseId = categoryData[0] && categoryData[0].prismicId
  const tutorialData =
    data &&
    data.allPrismicTutorial.nodes.filter(
      item => item.data.category.id === courseId
    )
  return (
    <AcademyPageLayout navData={exchangeData}>
      <Seo
        title="Altrady - Crypto Academy To Expand Your Trading Knowledge"
        description="Altrady brings to you his cryptocurrency academy to help beginners and more advanced crypto traders with their trading strategy."
      />
      <HeroComponent
        clsName="section hero academy"
        headerContent={categoryData[0] && categoryData[0].data.name}
        sectionContent={categoryData[0] && categoryData[0].data.description}
        heroImg={categoryData[0] && categoryData[0].data.course_cover.url}
        slug={categoryData[0] && categoryData[0].data.slug}
        type="course"
      />
      <CourseDetail
        categoryData={categoryData}
        tutorialData={tutorialData}
        type="course"
      />
      <JoinNowSection type="academy" />
    </AcademyPageLayout>
  )
}

export const query = graphql`
  query Course {
    allPrismicCourseCategory {
      nodes {
        data {
          name
          description
          text
          slug
          course_cover {
            url
          }
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
        }
      }
    }
    allPrismicExchange {
      nodes {
        data {
          exchange_item {
            content
            exc_img {
              url
            }
            title
          }
        }
      }
    }
  }
`

export default Course
