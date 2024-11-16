import React, {useEffect} from 'react';
import './VisionMission.css'; // Import the corresponding CSS file
import vision from "../../assets/vision.jpg"
import Aos from "aos"
import "aos/dist/aos.css"
const VisionMission = () => {
  useEffect(()=> {
    Aos.init({duration: 1000});
})
  return (
    <div className="vision-mission-container">
       <h1 className='mission-vision-heading' data-aos="fade-up">VISION AND MISSION</h1>
      <div className="vision-section">
        <div className="vision-content" data-aos="fade-right">
          <div className="icon-container">
            <div className="icon">👤</div>
            <h2 className='mission-heading'>Vision</h2>
            <p className='mission-paragraph'>
              " To accelerate organizational change into a technology innovator,
              fostering a dynamic ecosystem in a customer-oriented organization
              offering the highest services and solutions. "
            </p>
          </div>
        </div>
       <div className="center-image" data-aos="fade-up">
        <img src={vision} alt="" />
       </div>
        <div className="mission-content" data-aos="fade-left">
          <div className="icon-container">
            <div className="icon">📋</div>
            <h2 className='mission-heading'>Mission</h2>
            <p className='mission-paragraph'>
             " To provide enterprise-wide world-class competitive services and
              solutions in modern and relevant technology domains. "
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default VisionMission;
