import React from 'react'
import './card.css'

const Card = ({ title, text }) => {
  return (
    <div className="st__card">
      <div className="st__card-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="st__card-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card
