import React, { useState } from 'react';
import './Header.css';
import logo from "../../../assets/itllogo3.png";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={`main-header ${isNavOpen ? 'open-nav' : ''}`}>
      <Link className="logo-header" to="/" onClick={closeNav}>
        <img className="logo-header-img" src={logo} alt="logo" />
      </Link>
      <nav className="main-nav">
        <ul className="nav-list">
          {/* Dropdown Menu Community */}
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link dropdown-toggle">Our Network</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/founders" className="dropdown-item" onClick={closeNav}>Founders</Link></li>
                <li><Link to="/Experts" className="dropdown-item" onClick={closeNav}>Experts</Link></li>
                <li><Link to="/Investors" className="dropdown-item" onClick={closeNav}>Investors</Link></li>
                <li><Link to="/join" className="dropdown-item" onClick={closeNav}>Join</Link></li>
              </ul>
            )}
          </li>
          {/* Dropdown Menu Verticals */}
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link dropdown-toggle">Tracks</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/AiandBigData" className="dropdown-item" onClick={closeNav}>AI and Big Data</Link></li>
                <li><Link to="/CyberSecurity" className="dropdown-item" onClick={closeNav}>Cyber Security</Link></li>
                <li><Link to="/Robotics" className="dropdown-item" onClick={closeNav}>Robotics & Autonomous Systems</Link></li>
                <li><Link to="/ArAndVr" className="dropdown-item" onClick={closeNav}>AR & VR</Link></li>
                <li><Link to="/BioTechnology" className="dropdown-item" onClick={closeNav}>Biotechnology</Link></li>
                <li><Link to="/climateTech" className="dropdown-item" onClick={closeNav}>Climate Tech</Link></li>
                <li><Link to="/dualuse" className="dropdown-item" onClick={closeNav}>Dual Use</Link></li>
              </ul>
            )}
          </li>
          {/* Dropdown Menu Programs */}
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link dropdown-toggle">Programs</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/Incubation" className="dropdown-item" onClick={closeNav}>Incubation Programs</Link></li>
                <li><Link to="/EarlyStage" className="dropdown-item" onClick={closeNav}>Early Stage Accelerators</Link></li>
                <li><Link to="/BootcampProgram" className="dropdown-item" onClick={closeNav}>Bootcamp Program</Link></li>
                {/* <li><Link to="/SpecializedCourses" className="dropdown-item" onClick={closeNav}>Specialized Courses</Link></li> */}
                <li><Link to="/Announcement" className="dropdown-item" onClick={closeNav}>Announcement</Link></li>
              </ul>
            )}
          </li>
          {/* Dropdown Menu Collaborations */}
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link dropdown-toggle">Collaborations</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/Universities" className="dropdown-item" onClick={closeNav}>Universities</Link></li>
                <li><Link to="/Corporate" className="dropdown-item" onClick={closeNav}>Corporate</Link></li>
                <li><Link to="/Government" className="dropdown-item" onClick={closeNav}>Government</Link></li>
              </ul>
            )}
          </li>
          {/* Dropdown Menu About */}
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link dropdown-toggle">About</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/AboutUs" className="dropdown-item" onClick={closeNav}>About Us</Link></li>
                <li><Link to="/InnovationBlog" className="dropdown-item" onClick={closeNav}>Innovation Blog</Link></li>
                <li><Link to="/Team" className="dropdown-item" onClick={closeNav}>Team</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button className="menu-btn" onClick={toggleNav}>
        {isNavOpen ? (
          <ion-icon name="close-outline"></ion-icon>
        ) : (
          <ion-icon name="menu-outline"></ion-icon>
        )}
      </button>
    </header>
  );
};

export default Header;
