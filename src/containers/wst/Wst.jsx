import React from 'react'
import Card from '../../components/card/Card'
import './wst.css'

const Wst = () => {
  return (
    <div className="st__wst section__margin">
      <div className="st__wst-card ">
        <Card
          title="What is Smart-Trading"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat inventore deleniti nulla molestiae illo a est nemo, perferendis alias nostrum."
        />
      </div>
      <div className="st__wst-heading">
        <h1 className="gradient__text">
          Start getting profits you never imagine you can.
        </h1>
        <p>Explore the possibility</p>
      </div>
      <div className="st__wst-container">
        <Card
          title="AI Chat"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis cupiditate in doloribus veniam laborum vel eos repellendus sequi repudiandae!"
        />
        <Card
          title="Smart Trend"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis cupiditate in doloribus veniam laborum vel eos repellendus sequi repudiandae!"
        />
        <Card
          title="Charts"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis cupiditate in doloribus veniam laborum vel eos repellendus sequi repudiandae!"
        />
      </div>
    </div>
  )
}

export default Wst
