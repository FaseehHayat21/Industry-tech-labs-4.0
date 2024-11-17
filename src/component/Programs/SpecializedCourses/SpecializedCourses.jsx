import React, { useState } from 'react';
import './SpecializedCourses.css';
import printing from '../../../assets/3Dprinting.png';
import dataScience from '../../../assets/DataScienceandAi.png';
import gameDevelopment from '../../../assets/GameBootcamp.png';
import roboticsUAV from '../../../assets/Robotics.jpg';
import cyberSecurity from '../../../assets/CyberSecurity.jpeg';
import biotechHealthtech from '../../../assets/BioTech.png';
import droneFlying from '../../../assets/DroneTraining.png'; 
import { useNavigate } from 'react-router-dom';
const SpecializedCourses = () => {
  const navigate = useNavigate();
  const courses = [
    { title: '3D Printing and Additive Manufacturing Bootcamp', date: '15th December', mode: 'Online', duration: '3 Months', price: 'PKR 80,000', image: printing, path:'/Tprintings' },
    { title: 'Data Science and AI Bootcamp', date: '16 December', mode: 'Online', duration: '12-16 weeks', price: 'PKR 100,000', image: dataScience, path:'/DataScienceandAI' },
    { title: 'Game Development Bootcamp', date: '10th January', mode: 'Online', duration: '6 Months', price: 'PKR 120,000', image: gameDevelopment, path:'/GameDevelopment' },
    { title: 'Robotics and UAVs Bootcamp', date: '5th February', mode: 'In-person', duration: '3 Months', price: 'PKR 110,000', image: roboticsUAV, path:'/RoboticsandUAVs' },
    { title: 'Cybersecurity Bootcamp', date: '10th December', mode: 'Online', duration: '3 Months', price: 'PKR 75,000', image: cyberSecurity, path:'/CyberSecurityy' },
    { title: 'BioTech and HealthTech Bootcamp', date: '20th January', mode: 'Hybrid', duration: '4 Months', price: 'PKR 95,000', image: biotechHealthtech, path:'/BioTechandHealthTech' },
    { title: 'Drone Flying Training Bootcamp', date: '12th March', mode: 'In-person', duration: '2 Weeks', price: 'PKR 50,000', image: droneFlying, path:'/DroneFlying' },
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : courses.length - 1));
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex < courses.length - 1 ? prevIndex + 1 : 0));
  // };

  // const visibleCourses = courses.slice(currentIndex, currentIndex + 4);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? courses.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === courses.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <section className="founders-section">
    <div className="banner">
      <h1>Specialized Courses</h1>
    </div>
    
    <div className="course-slider">
      <h2>Learning <span>begins</span> here.</h2>
      <p>Scale up and stay ahead!</p>
      {/* <div className="slider-container">
        <button className="nav-button left" onClick={handlePrev}>&lt;</button>
        <div className="course-cards">
          {visibleCourses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-type">Bootcamp</div>
              </div>
              <div className="course-details">
                <h3>{course.title}</h3>
                <ul>
                  <li>{course.date}</li>
                  <li>{course.mode}</li>
                  <li>{course.duration}</li>
                </ul>
                <div className="course-price">{course.price}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button right" onClick={handleNext}>&gt;</button>
      </div> */}


<div className="courses-slider">
        <button onClick={handlePrev} className="arrow-button left-arrow">❯</button>
        <div className="courses-slider-wrapper">
          <div
            className="courses-slider-inner"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {courses.map((course, index) => (
              <div className="courses-card" key={index}
              onClick={() => navigate(course.path)}>
               <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-type">Bootcamp</div>
              </div>
                <div className="courses-author">
                <div className="course-details">
                <h3>{course.title}</h3>
                <ul>
                  <li>{course.date}</li>
                  <li>{course.mode}</li>
                  <li>{course.duration}</li>
                </ul>
                <div className="course-price">{course.price}</div>
              </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} className="arrow-button right-arrow">❯</button>
      </div>

    </div>
    </section>
  );
};

export default SpecializedCourses;
