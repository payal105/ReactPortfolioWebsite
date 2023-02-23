import React from 'react';
import "./about.css";
import about from "../../assets/about.png";
import CV from "../../assets/CV.pdf";
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={about} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Hi. I am Payal Adhikary. A dream chaser person with full of liveliness and rich knowledge in Web Design , Full Stack Web Development , MERN Development and building useful apps.</p>
            <a href={CV} className="btn" download>Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number ">95%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage web"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX</h3>
                <span className="skills__number ">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage mern"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">App Development</h3>
                <span className="skills__number ">75%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage app"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  );
};

export default About