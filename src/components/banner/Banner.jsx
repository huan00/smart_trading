import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <div className="st__banner section__margin">
      <div className="st__banner-heading gradient-bar">
        <p>Request access to the platform</p>
        <h1>Register today and get access to exclusive data.</h1>
      </div>
      <div className="st__banner-btn">
        <button type="button">Get Started</button>
      </div>
    </div>
  )
}

export default Banner
