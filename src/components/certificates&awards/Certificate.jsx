import React, { useState } from 'react';
import "./Certificate.css";
import Menu from './Awards';


const Certificate = () => {
  const[items,setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems);
  }

  return (
    <section className="work container section" id="certificate">
      <h2 className="section__title">Certificates & Awards</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>All</span>
        <span className="work__item" onClick={() => filterItem("Courses")}>Courses</span>
        <span className="work__item" onClick={() => filterItem("T&I")}>Trainings & Internships</span>
        <span className="work__item" onClick={() => filterItem("Bootcamps")}>Bootcamps</span>
        <span className="work__item" onClick={() => filterItem("Competitions")}>Competitions</span>
        <span className="work__item" onClick={() => filterItem("Others")}>Other Activities</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) =>{
          const{id,image,title,category,link} = elem;
          return(
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button" target={'_blank'}>
                <i className="icon-size-fullscreen work__button-icon"></i> 
              </a>
            </div>
          )
        })}
      </div>
      
    </section>
  )
}

export default Certificate