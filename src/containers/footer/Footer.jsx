import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="st__footer">
      <div className="st__footer-heading">
        <h1 className="gradient__text">
          Take the first step into your future before others
        </h1>
        <p>Request Access to the platform</p>
      </div>
      <div className="st__footer-container__content">
        <div className="st__footer-container__content-logo">
          <img src={logo} alt="logo" />
          <p>Smart-Trading, all rights reserved</p>
        </div>
        <div className="st__footer-container__content-links">
          <h4>Links</h4>
          <p>Overviews</p>
          <p>Socail Meida</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="st__footer-container__content-links">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="st__footer-container__content-links">
          <h4>Get In Touch</h4>
          <p>Smart-Trading Inc.</p>
          <p>212-234-9876</p>
          <p>info@payment.net</p>
        </div>
      </div>
      <div className="st__footer-copyright">
        <p>© 2021 Smart-Trading. All rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
