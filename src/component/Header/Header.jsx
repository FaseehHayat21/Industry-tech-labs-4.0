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
                <li><Link to="/founders"><a to="/founders" className="dropdown-item">Founders</a></Link></li>
                <li><Link to="/Experts"><a to="/Experts" className="dropdown-item">Experts</a></Link></li>
                <li><Link to="/Investors"><a to="/Investors" className="dropdown-item">Investors</a></Link></li>
                <li><Link to="/join"><a to="/join" className="dropdown-item">Join</a></Link></li>
               
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
                <li><Link to="/founders"><a to="/founders" className="dropdown-item">Ai and Big Data</a></Link></li>
                <li><Link to="/founders"><a to="/founders" className="dropdown-item">Cyber Secuirty</a></Link></li>
                <li><Link to="/founders"><a to="/founders" className="dropdown-item">Robotics & Autonmous Systems </a></Link></li>
                <li><Link to="/founders"><a to="/founders" className="dropdown-item">3D Printing</a></Link></li>
                <li><Link to="/founders"><a to="/founders" className="dropdown-item">AR & VR</a></Link></li>
                <li><Link to="/founders"><a to="/founders" className="dropdown-item">BioTechnology</a></Link></li>
                <li><Link to="/climateTech"><a to="/climateTech" className="dropdown-item">Climate Tech</a></Link></li>
                <li><Link to="/dualuse"><a to="/dualuse" className="dropdown-item">Dual Use</a></Link></li>
                <li><Link to="/Investors"><a to="/Investors" className="dropdown-item">Health Care</a></Link></li>
                <li><Link to="/founders"><a to="/founders" className="dropdown-item">Sustainable Food Chain</a></Link></li>
               
              </ul>
            )}
          </li>
          {/* Dropdown Menu Accelerators*/}
          <li 
            className="dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link dropdown-toggle">Accelerators</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/founders"><a to="/founders" className="dropdown-item">Incubation Programs</a></Link></li>
                <li><Link to="/Experts"><a to="/Experts" className="dropdown-item">Early Stage Accelerators</a></Link></li>
                <li><Link to="/Investors"><a to="/Investors" className="dropdown-item">Bootcamp Program</a></Link></li>
                <li><Link to="/founders"><a to="/founders" className="dropdown-item">Specialized Courses</a></Link></li>
               
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
                <li><Link to="/founders"><a to="/founders" className="dropdown-item">Universities</a></Link></li>
                <li><Link to="/Experts"><a to="/Experts" className="dropdown-item">Corporate</a></Link></li>
                <li><Link to="/Investors"><a to="/Investors" className="dropdown-item">Government</a></Link></li>
               
               
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
                <li><Link to="/founders"><a to="/founders" className="dropdown-item">About Us</a></Link></li>
              
               
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
