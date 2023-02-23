import React from 'react';
import "./testimonials.css";
import Image1 from "../../assets/test-1.png"
import Image2 from "../../assets/test2.png"
import Image3 from "../../assets/test-3.png"
import Image4 from "../../assets/test-4.png"
import Image5 from "../../assets/test-5.png"
import Image6 from "../../assets/test-6.png"


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id:1,
    image: Image1,
    title: "Rohan Pandey",
    subtitle: "Manager at Dreadnought",
    comment: "A hardworking and punctual person. Passionate to work with perfection."
  },
  {
    id:2,
    image: Image2,
    title: "Amandeep Kaur",
    subtitle: "Senior HR at Suvidha Foundation",
    comment: "A wonderful intern to have on board. Really hardworking and punctual. Always delivers the task on time with perfection. All the best for your future dear."
  },
  {
    id:3,
    image: Image3,
    title: "Prabhat Rajat",
    subtitle: "HR at Suvidha Foundation",
    comment: "Very dedicated to her work and knowledgable. Wishing you all the best for your future."
  },
  {
    id:4,
    image: Image4,
    title: "Gurleen Kaur",
    subtitle: "HR at Suvidha Foundation",
    comment: "All her work used to be very unique and perfect. She has great potential and took every task as a challenge to reach to the perfection. She never game me a chance to complain. All the best dear. May you shine more brightly in your future."
  },
  {
    id:5,
    image: Image5,
    title: "Md Riyazuddin",
    subtitle: "Youth Advisory Board Member of Suvidha Foundation",
    comment: "Great time working with her. Very polite and descent. All the best."
  },
  {
    id:6,
    image: Image6,
    title: "Yogesh Tabjula",
    subtitle: "HR at Jishnem Innovations Pvt Ltd.",
    comment: "A hardworking, punctual and polite intern with awesome potential.All the best Payal. Hope to rope you in again whenever you are free. Have a wonderful future ahead."
  },
]

const Testimonials = () => {
  return (
    <section className="testimonials container section" id='testimonials'>
      <h2 className="section__title">Reviews</h2>

      <Swiper className="testimonials__container grid"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={30}
       slidesPerView={1}
       loop={true}
       grabCursor={true}
       pagination={{ clickable: true }}
       >
        {data.map(({id, image, title, subtitle, comment}) => {
          return(
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials