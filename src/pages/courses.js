import React from "react"
import { Link } from "gatsby"
import AcademyPageLayout from "../layouts/AcademyPageLayout"
import SectionLayout from "../layouts/SectionLayout"
import HeroComponent from "../components/hero"
import SectionHeader from "../components/common/SectionHeader"
import JoinNowSection from "../sections/join-now"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { BlogImg, StarIcon } from "../utils/imgLoader"

const headerContent = `Welcome to Altrady Crypto Trading Academy`
const sectionContent = `Step by step, crypto trading tutorials to help you in your trading journey!`
const courseTitle = "Courses:"

const courseContent = `We believe it is important that you know what we’re building, and we’d love to hear your feedback and other feature requests.`

const AcademyCourses = ({ data }) => {
  const categoryData = data.allPrismicCourseCategory.nodes
  return (
    <AcademyPageLayout>
      <Seo
        title="Altrady - Crypto Academy To Expand Your Trading Knowledge"
        description="Altrady brings to you his cryptocurrency academy to help beginners and more advanced crypto traders with their trading strategy."
      />
      <HeroComponent
        clsName="section hero academy"
        headerContent={headerContent}
        sectionContent={sectionContent}
        kickerText="Learn crypto trading"
        heroImg={BlogImg}
        type="academy"
      />
      <SectionLayout sectionName="courses">
        <SectionHeader title={courseTitle} content={courseContent} />
        <div className="course-container">
          {categoryData?.map((item, idx) => (
            <div className="grid-container row" key={idx}>
              <div className="course-video">
                <img
                  src={item.data.course_cover.url}
                  alt="Course Cover"
                  className="item__img"
                />
              </div>
              <div className="course-list">
                <h3 className="course-list__title">{item.data.name}</h3>
                <p className="course-list__content">{item.data.description}</p>
                <Link
                  to={`/academy/${item.data.slug}`}
                  className="btn-explore-course"
                >
                  <div className="d-flex align-items-center">
                    <img className="mr-2" src={StarIcon} alt="star icon" />
                    Explore the course
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
      <JoinNowSection type="academy" />
    </AcademyPageLayout>
  )
}

export const query = graphql`
  query AcademyCourses {
    allPrismicCourseCategory {
      nodes {
        data {
          name
          description
          slug
          course_cover {
            url
          }
        }
        prismicId
      }
    }
  }
`

export default AcademyCourses
