"use client"

import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { routes } from '../../routes.js'
import "../../styles/components/Header/Header.css"
// import logo from "../../assets/images/image.jpeg"

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
     

      <div className="main-header">
        <div className="wrapper">
          <div className="main-header-inner">
            <div className="logo">
              <Link to={routes.home.path}>
                {/* <img src={logo} alt="Mitech Logo" className="logo-icon" /> */}
                <h1>FTEB </h1>
              </Link>
            </div>

            <div className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <nav className={`main-nav ${mobileMenuOpen ? "active" : ""}`}>
              <ul className="menu">
                <li className="menu-item">
                  <NavLink to={routes.home.path} end onClick={() => setMobileMenuOpen(false)}>{routes.home.name}</NavLink>
                </li>
               
                <li className="menu-item">
                  <NavLink to={routes.servicess.path} onClick={() => setMobileMenuOpen(false)}>{routes.servicess.name}</NavLink>
                </li>
                
               
                <li className="menu-item">
                <div className="get-quote-container">
                  <a href="mailto:Connect@ftebtech.com" className="get-quote-button">
                    Get Quote
                  </a>
                </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header