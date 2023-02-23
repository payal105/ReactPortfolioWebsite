import React from 'react';
import "./home.css";
import Me from "../../assets/me.png";
import HeaderSocials from "../home/HeaderSocials";
import ScrollDown from "../home/ScrollDown";
import Shapes from '../home/Shapes';


const Home = () => {
  return (
    <>
    <Shapes/>
    <section className="home container" id="home">
      
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Payal Adhikary</h1>
        <span className="home__education">I'm a Full Stack Developer</span>

        

        

        <HeaderSocials/>
        
        <a href="#contact" className='btn'>Contact me</a>

        
        <ScrollDown/>
      </div>

      
    </section>
    </>
  )
}

export default Home