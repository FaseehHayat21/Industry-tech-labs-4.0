import React, { useState, useEffect } from "react";
import "./BootcampProgram.css";
import printing from "../../../assets/3Dprinting.png";
import dataScience from "../../../assets/DataScienceandAi.png";
import gameDevelopment from "../../../assets/GameBootcamp.png";
import roboticsUAV from "../../../assets/Robotics.jpg";
import cyberSecurity from "../../../assets/CyberSecurity.jpeg";
import biotechHealthtech from "../../../assets/BioTech.png";
import droneFlying from "../../../assets/DroneTraining.png";
import { useNavigate } from "react-router-dom";

export default function BootcampProgram() {
  const navigate = useNavigate();

  // Courses array
  const courses = [
    { title: "3D Printing and Additive Manufacturing Bootcamp", date: "15th December", mode: "Online", duration: "3 Months", price: "PKR 80,000", image: printing, path: "/Tprintings" },
    { title: "Data Science and AI Bootcamp", date: "16 December", mode: "Online", duration: "12-16 weeks", price: "PKR 100,000", image: dataScience, path: "/DataScienceandAI" },
    { title: "Game Development Bootcamp", date: "10th January", mode: "Online", duration: "6 Months", price: "PKR 120,000", image: gameDevelopment, path: "/GameDevelopment" },
    { title: "Robotics and UAVs Bootcamp", date: "5th February", mode: "In-person", duration: "3 Months", price: "PKR 110,000", image: roboticsUAV, path: "/RoboticsandUAVs" },
    { title: "Cybersecurity Bootcamp", date: "10th December", mode: "Online", duration: "3 Months", price: "PKR 75,000", image: cyberSecurity, path: "/CyberSecurityy" },
    { title: "BioTech and HealthTech Bootcamp", date: "20th January", mode: "Hybrid", duration: "4 Months", price: "PKR 95,000", image: biotechHealthtech, path: "/BioTechandHealthTech" },
    { title: "Drone Flying Training Bootcamp", date: "12th March", mode: "In-person", duration: "2 Weeks", price: "PKR 50,000", image: droneFlying, path: "/DroneFlying" },
  ];

  // Duplicate courses for smooth scrolling
  const extendedCourses = [...courses, ...courses, ...courses];
  const [currentIndex, setCurrentIndex] = useState(courses.length);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    // Reset index for seamless looping
    if (currentIndex === 0) {
      setTimeout(() => setCurrentIndex(courses.length), 0);
    } else if (currentIndex === extendedCourses.length - courses.length) {
      setTimeout(() => setCurrentIndex(extendedCourses.length - 2 * courses.length), 0);
    }
  }, [currentIndex, courses.length, extendedCourses.length]);

  return (
    <section className="founders-section">
      {/* Bootcamp Section */}
      <div className="banner">
        <h1>BootCamps</h1>
      </div>
      <div className="content">
        <p>
          Our <strong>Bootcamps</strong> focus on practical, real-world applications, helping entrepreneurs strengthen their product-market fit, optimize their go-to-market strategies, and overcome common challenges faced in the early stages. At the end of each Bootcamp, participants leave with the knowledge and confidence to take their ventures to the next level.
        </p>
      </div>

      <div className="course-slider">
      <h2>Learning <span>begins</span> here.</h2>
      <p>Scale up and stay ahead!</p>
        <div className="courses-slider">
          <button onClick={handlePrev} className="arrow-button left-arrow">❯</button>
          <div className="courses-slider-wrapper">
            <div
              className="courses-slider-inner"
              style={{
                transform: `translateX(-${currentIndex * (100 / courses.length)}%)`,
                transition: currentIndex === 0 || currentIndex === extendedCourses.length - courses.length ? "none" : "transform 0.5s ease-in-out",
              }}
            >
              {extendedCourses.map((course, index) => (
                <div className="courses-card" key={index} onClick={() => navigate(course.path)}>
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
}
