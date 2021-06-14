import React from "react"
import { Link } from "gatsby"
import SectionHeader from "../../components/common/SectionHeader"
import SectionLayout from "../../layouts/SectionLayout"
import TutorialList from "../../components/tutorial-list"
import { StarIcon } from "../../utils/imgLoader"

const CourseSection = ({ title, content, categoryData, tutorialData }) => {
  return (
    <SectionLayout sectionName="courses">
      <SectionHeader title={title} content={content} />
      <div className="course-container">
        {categoryData &&
          categoryData.map((item, idx) => (
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
                <TutorialList
                  courseId={item.prismicId}
                  tutorialData={tutorialData}
                />
                <Link
                  to={`/course/${item.data.slug}`}
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
  )
}

export default CourseSection
