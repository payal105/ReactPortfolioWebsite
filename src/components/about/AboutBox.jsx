import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-graduation"></i>

            <div>
                <h3 className="about__title">4+</h3>
                <span className="about__subtitle">Years of Experience</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">10+</h3>
                <span className="about__subtitle">Certifications</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon fa-solid fa-laptop-code"></i>

            <div>
                <h3 className="about__title">15+</h3>
                <span className="about__subtitle">Projects Completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-trophy"></i>

            <div>
                <h3 className="about__title">10+</h3>
                <span className="about__subtitle">Awards won</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox