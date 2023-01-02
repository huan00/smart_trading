import React from 'react'
import './demo.css'
import demo from '../../assets/demo.png'

const Demo = () => {
  return (
    <div className="st__demo section__padding">
      <div className="st__demo-img">
        <img src={demo} alt="demo" />
      </div>
      <div className="st__demo-container">
        <p>Request Access to the Platform</p>
        <h1 className="gradient__text">Your possibility are endless</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          necessitatibus inventore quia excepturi saepe dolorem voluptatem
          officia, possimus explicabo illum facere quisquam. Nihil, sequi
          maiores.
        </p>
        <p>Request Access to the Platform</p>
      </div>
    </div>
  )
}

export default Demo
