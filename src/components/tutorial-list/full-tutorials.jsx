import React from "react"
import { Link } from "gatsby"
import { VideoPlay } from "../../utils/imgLoader"

const TutorialList = ({ courseId, tutorialData }) => {
  const tutorialList = tutorialData.filter(
    item => item.data.category.id === courseId
  )
  return (
    <>
      <div className="video-list">
        {tutorialList.map((item, idx) => (
          <div key={idx} role="listitem" className="w-dyn-item">
            <Link
              to={`/tutorial/${item.data.slug}`}
              className="video-item w-inline-block"
            >
              <div className="video-item-left pr-2">
                <img src={VideoPlay} alt="Play Button" />
                <div className="video-name">{item.data.name}</div>
              </div>
              <div className="video-duration">{item.data.duration}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default TutorialList
