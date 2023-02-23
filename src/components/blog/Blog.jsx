import React from 'react';
import "./blog.css";
import Blog1 from "../../assets/blog-1.jpg";
import Blog2 from "../../assets/blog-2.jpg";


const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#"><span className="blog__category">Opinion</span></a>
            <a href="https://blogsbypayal.weebly.com/blog/my-views-on-chatgpt"><img src={Blog1} alt="" className='blog__img'/></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">My Views on ChatGPT</h3>
            <div className="blog__meta">
              <span>20 February, 2023</span>
              <span className="blog__dot">.</span>
              <span>Payal</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#"><span className="blog__category">Info</span></a>
            <a href="https://blogsbypayal.weebly.com/blog/must-have-vscode-extensions"><img src={Blog2} alt="" className='blog__img'/></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Must have VSCODE extensions</h3>
            <div className="blog__meta">
              <span>19 February,2023</span>
              <span className="blog__dot">.</span>
              <span>Payal</span>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  )
}

export default Blog