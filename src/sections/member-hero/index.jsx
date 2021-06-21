import React from "react"

const MemberHero = ({ kickerText, headerContent, sectionContent, img }) => {
  return (
    <section className="section hero">
      <div className="member">
        <p className="kicker">{kickerText}</p>
        <h1 className="section-title">{headerContent}</h1>
        <p className="section-content">{sectionContent}</p>
        <div className="hero-img-container img-container mt-95">
          <img src={img} alt={headerContent} />
        </div>
      </div>
    </section>
  )
}

export default MemberHero
