import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's get in touch !</h3>
          <p className="contact__details">Email : payaladhikary2000@gmail.com <br /> Phone : +91-7091630692 </p>

            
        </div>

        <form action="https://formsubmit.co/payaladhikary.portfolio@gmail.com" method="POST" className="contact__form">
    <input type="hidden" name="_captcha" value="false">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" name="Name" className="contact__form-input" placeholder='Insert your name' required/>
            </div>

            <div className="contact__form-div">
              <input type="email" name="Email" className="contact__form-input" placeholder='Insert your email' required/>
            </div>
          </div>


          <div className="contact__form-div contact__form-area">
            <textarea cols="30" rows="10" name="Message" className='contact__form-input' placeholder='Write your message' required></textarea>
          </div>


          <button className='btn' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
