import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'; // Importing Link from react-scroll
// import logo from '../../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['navbar', 'navbar-expand-lg', 'navbar-background', 'fixed-top'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <>
      <nav className={navbarClasses.join(' ')}>
        <div className="container navbar-e">
          <div className="logo">
            <img className="nav-logo" src="" alt="logo" />
            <h2 className="nav-heading">CITE</h2>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-e" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="home" className="nav-link" smooth={true} duration={500}>Home</Link>
              </li>
              <li className="nav-item">
              <Link to="about-us" className="nav-link" smooth={true} duration={500}>About Us</Link>
              </li>
              <li className="nav-item">
              <Link to="technology-verticals" className="nav-link" smooth={true} duration={500}>Technology Verticals</Link>
              </li>
              <li className="nav-item">
              <Link to="team" smooth={true} duration={500}>
              Team
            </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact Us
                </Link>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
    </>
  );
}
