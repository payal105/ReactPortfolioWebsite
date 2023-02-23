import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.png";
import Image2 from "../../assets/service-2.png";
import Image3 from "../../assets/service-3.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX",
    description:
      "Designing the landing pages of websites and apps.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Working on the frontend and backend part of the websites.",
  },
  {
    id: 3,
    image: Image3,
    title: "App Development",
    description:
      "Building useful and user-friendly apps.",
  },
  
];

const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({id,image,title,description})=>{
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services