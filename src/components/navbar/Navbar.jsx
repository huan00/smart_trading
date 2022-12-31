import React, { useState } from 'react'
import './navbar.css'
import { CgMenuMotion, CgMenu } from 'react-icons/cg'

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wst">What is Smart Trading?</a>
    </p>
    <p>
      <a href="#opportunities">Opportunities</a>
    </p>
    <p>
      <a href="#results">Results</a>
    </p>
    <p>
      <a href="#reviews">Client Reviews</a>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="st__navbar">
      <div className="st__navbar-links">
        <div className="st__navbar-links_logo">
          {/* <img src={logo} alt="logo" /> */}
          <h4>Smart-Trading</h4>
        </div>
        <div className="st__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="st__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="st__navbar-menu">
        {toggleMenu ? (
          <CgMenuMotion
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <CgMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="st__navbar-menu_container shadow-drop-2-center">
            <div className="st__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="st__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
