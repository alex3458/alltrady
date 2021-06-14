import React from "react"
import SectionLayout from "../../layouts/SectionLayout"
import TutorialList from "../../components/tutorial-list/full-tutorials"

const CourseDetail = ({ categoryData, tutorialData }) => {
  return (
    <SectionLayout sectionName="courses">
      <div className="grid-container">
        <div>
          <h3 className="mb-2">About this course</h3>
          <p>{categoryData[0] && categoryData[0].data.text}</p>
        </div>
        <div className="course-list">
          <h3 className="mb-3">Tutorials in this course</h3>
          <TutorialList
            courseId={categoryData[0] && categoryData[0].prismicId}
            tutorialData={tutorialData}
          />
        </div>
      </div>
    </SectionLayout>
  )
}

export default CourseDetail
