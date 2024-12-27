
import React, { useState } from 'react';
import './Header.css';
import logo from "../../../assets/itllogo3.png";
// import logo from "../../../assets/ILlogo_bg_removed.png";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={`main-header ${isNavOpen ? 'open-nav' : ''}`}>
      <Link className="logo-header" to="/">
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
                <li><Link to="/founders" className="dropdown-item"><a to="/founders" >Founders</a></Link></li>
                <li><Link to="/Experts" className="dropdown-item"><a to="/Experts" >Experts</a></Link></li>
                <li><Link to="/Investors" className="dropdown-item"><a to="/Investors" >Investors</a></Link></li>
                <li><Link to="/join" className="dropdown-item"><a to="/join" >Join</a></Link></li>
               
              </ul>
            )}
          </li>
          {/* Dropdown Menu Verticals*/}
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link dropdown-toggle">Tracks</span>
          
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/AiandBigData" className="dropdown-item"><a to="/AiandBigData" >AI and Big Data</a></Link></li>
                <li><Link to="/CyberSecurity" className="dropdown-item"><a to="/CyberSecurity" >Cyber Secuirty</a></Link></li>
                <li><Link to="/Robotics" className="dropdown-item"><a to="/Robotics" >Robotics & Autonmous Systems </a></Link></li>
                {/* <li><Link to="/ThreeDprinting" className="dropdown-item"><a to="/ThreeDPrinting">3D Printing</a></Link></li> */}
                <li><Link to="/ArAndVr" className="dropdown-item"><a to="/ArAndVr" >AR & VR</a></Link></li>
                <li><Link to="/BioTechnology" className="dropdown-item"> <a to="/BioTechnology" >BioTechnology</a></Link></li>
                <li><Link to="/climateTech" className="dropdown-item"><a to="/climateTech" >Climate Tech</a></Link></li>
                <li><Link to="/dualuse" className="dropdown-item"><a to="/dualuse" >Dual Use</a></Link></li>
                {/* <li><Link to="/HealthCare" className="dropdown-item"><a to="/HealthCare" >Health Care</a></Link></li>
                <li><Link to="/SustainableFood" className="dropdown-item"><a to="/SustainableFood" >Sustainable Food Chain</a></Link></li> */}
               
              </ul>
            )}
          </li>
          {/* Dropdown Menu Programs*/}
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link dropdown-toggle">Programs</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/Incubation" className="dropdown-item"><a to="/Incubation" >Incubation Programs</a></Link></li>
                <li><Link to="/EarlyStage" className="dropdown-item"><a to="/EarlyStage" >Early Stage Accelerators</a></Link></li>
                <li><Link to="/BootcampProgram" className="dropdown-item"><a to="/BootcampProgram">Bootcamp Program</a></Link></li>
                <li><Link to="/SpecializedCourses" className="dropdown-item"><a to="/SpecializedCourses">Specialized Courses</a></Link></li>
                <li><Link to="/Announcement" className="dropdown-item"><a to="/Announcement">Announcement</a></Link></li>
              </ul>
            )}
          </li>
          {/* Dropdown Menu Collaborations*/}
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link dropdown-toggle">Collaborations</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/Universities" className="dropdown-item"><a to="/founders" >Universities</a></Link></li>
                <li><Link to="/Corporate" className="dropdown-item"><a to="/Experts" >Corporate</a></Link></li>
                <li><Link to="/Government" className="dropdown-item"><a to="/Investors" >Government</a></Link></li>
               
               
              </ul>
            )}
          </li>
          {/* Dropdown Menu About*/}
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link dropdown-toggle">About</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/AboutUs" className="dropdown-item"><a to="/founders" >About Us</a></Link></li>
                {/* <li><Link to="/Diversity" className="dropdown-item"><a to="/founders" >Diversity</a></Link></li> */}
                <li><Link to="/InnovationBlog" className="dropdown-item"><a to="/InnovationBlog" >Innovation Blog</a></Link></li>
                {/* <li><Link to="/SevenReasonsWhy" className="dropdown-item"><a to="/SevenReasonsWhy" >7 Reasons why</a></Link></li> */}
                <li><Link to="/Team" className="dropdown-item"><a to="/Team" >Team</a></Link></li>
              
               
              </ul>
            )}
          </li>

          
        </ul>
      </nav>

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
