import React from 'react'
import './header.css'
import st from '../../assets/smart_trading.png'
import user from '../../assets/profile.png'

const Header = () => {
  return (
    <div className="st__header section__padding" id="home">
      <div className="st__header-content">
        <h1 className="gradient__text">
          Let's Build an Amazing Profolio with Smart-Trading
        </h1>
        <p>
          Smart-Trading assist user with trends, and industry leading AI
          technoloy to support creating the perfect entry and exit point.
        </p>
        <div className="st__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="st__header-content__user">
          <div className="st__header-content__user-img">
            {Array.apply(null, { length: 5 }).map((el, index) => (
              <img src={user} alt="user" key={index} />
            ))}
          </div>
          <p>800 people requested access within last 24hrs</p>
        </div>
      </div>
      <div className="st__header-img">
        <img src={st} alt="st" />
      </div>
    </div>
  )
}

export default Header
