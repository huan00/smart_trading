import React from 'react'
import './blog.css'

const Blog = ({ imgUrl, date, title }) => {
  return (
    <div className="st__blog">
      <div className="st__blog-img">
        <img src={imgUrl} alt="imageUrl" />
      </div>
      <div className="st__blog-container__content">
        <div>
          <p>{date}</p>
          <h1>{title}</h1>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Blog
