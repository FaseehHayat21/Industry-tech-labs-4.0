// import React, { useState, useEffect } from 'react';
// import './Header.css'; // Main styles
// import logo from "../../assets/logobg.png"
// import { Link } from 'react-scroll'; // Importing Link from react-scroll
// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [hasScrolled, setHasScrolled] = useState(false);

//   // Toggle menu on click
//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   // Handle background color on scroll
//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     if (window.scrollY > 50) {
//   //       setHasScrolled(true);
//   //     } else {
//   //       setHasScrolled(false);
//   //     }
//   //   };

//   //   window.addEventListener('scroll', handleScroll);

//   //   // Cleanup event listener on unmount
//   //   return () => {
//   //     window.removeEventListener('scroll', handleScroll);
//   //   };
//   // }, []);

//   return (
//     <header className={`main-header ${isNavOpen ? 'open-nav' : ''} ${hasScrolled ? 'scrolled' : ''}`}>
//       <a className="logo" href="">
//         <img className='logo-img' src={logo} alt="logo" />
//       </a>
//       <nav className="main-nav">
//         <ul className="nav-list">
//           <li><a className="nav-link" to="home">Home</a></li>
         
//           <li><Link className="nav-link" to="about-us">About Us</Link></li>
//           <li><Link className="nav-link" to="verticals">Technology Verticals</Link></li>
//           <li><Link className="nav-link" to="team">Our Team</Link></li>
//           <li><Link className="nav-link" to="#">Feature</Link></li>
//           <li><Link className="nav-link" to="#">Contact Us</Link></li>
//           {/*   <li><a className="nav-link login" href="#">Login</a></li> */}
//         </ul>
//       </nav>

//       <button className="menu-btn" onClick={toggleNav}>
//         {isNavOpen ? (
//           <ion-icon name="close-outline"></ion-icon>
//         ) : (
//           <ion-icon name="menu-outline"></ion-icon>
//         )}
//       </button>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import './Header.css';
import logo from "../../assets/logobg.png";
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
      <Link className="logo" to="/">
        <img className="logo-img" src={logo} alt="logo" />
      </Link>
      <nav className="main-nav">
        <ul className="nav-list">
          {/* Dropdown Menu Community */}
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link dropdown-toggle">Community</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/founders" className="dropdown-item"><a to="/founders" >Founders</a></Link></li>
                <li><Link to="/Experts" className="dropdown-item"><a to="/Experts" >Experts</a></Link></li>
                <li><Link to="/Investors" className="dropdown-item"><a to="/Investors" >Investors</a></Link></li>
                <li><Link to="/join" className="dropdown-item"><a to="/join" >Join</a></Link></li>
               
              </ul>
            )}
          </li>
          {/* Dropdown Menu Industry*/}
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link dropdown-toggle">Verticals</span>
          
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/AiandBigData" className="dropdown-item"><a to="/AiandBigData" >Ai and Big Data</a></Link></li>
                <li><Link to="/CyberSecurity" className="dropdown-item"><a to="/CyberSecurity" >Cyber Secuirty</a></Link></li>
                <li><Link to="/Robotics" className="dropdown-item"><a to="/Robotics" >Robotics & Autonmous Systems </a></Link></li>
                <li><Link to="/ThreeDPrinting" className="dropdown-item"><a to="/ThreeDPrinting">3D Printing</a></Link></li>
                <li><Link to="/ArAndVr" className="dropdown-item"><a to="/ArAndVr" >AR & VR</a></Link></li>
                <li><Link to="/BioTechnology" className="dropdown-item"> <a to="/BioTechnology" >BioTechnology</a></Link></li>
                <li><Link to="/climateTech" className="dropdown-item"><a to="/climateTech" >Climate Tech</a></Link></li>
                <li><Link to="/dualuse" className="dropdown-item"><a to="/dualuse" >Dual Use</a></Link></li>
                <li><Link to="/HealthCare" className="dropdown-item"><a to="/HealthCare" >Health Care</a></Link></li>
                <li><Link to="/SustainableFood" className="dropdown-item"><a to="/SustainableFood" >Sustainable Food Chain</a></Link></li>
               
              </ul>
            )}
          </li>
          {/* Dropdown Menu Accelerators*/}
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link dropdown-toggle">Programs</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/founders" className="dropdown-item"><a to="/founders" >Incubation Programs</a></Link></li>
                <li><Link to="/Experts" className="dropdown-item"><a to="/Experts" >Early Stage Accelerators</a></Link></li>
                <li><Link to="/Investors" className="dropdown-item"><a to="/Investors">Bootcamp Program</a></Link></li>
                <li><Link to="/founders" className="dropdown-item"><a to="/founders">Specialized Courses</a></Link></li>
               
              </ul>
            )}
          </li>
          {/* Dropdown Menu Partnership*/}
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
            <span className="nav-link dropdown-toggle">About Us</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/founders" className="dropdown-item"><a to="/founders" >About Us</a></Link></li>
                <li><Link to="/founders" className="dropdown-item"><a to="/founders" >Diversity</a></Link></li>
                <li><Link to="/founders" className="dropdown-item"><a to="/founders" >Innovation Blog</a></Link></li>
              
               
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
