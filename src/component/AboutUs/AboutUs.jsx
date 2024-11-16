import React from 'react';
import './AboutUs.css';
import aboutUsImage from '../../assets/bg.jpg'; // replace with your image path

export default function AboutUs() {
  return (
    <section className="about-us-section" id="about-us">
      <div className="about-us-container">
        <div className="about-us-image">
          <img src={aboutUsImage} alt="About Us" />
        </div>
        <div className="about-us-content">
          <h1>About Us</h1>
         <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum possimus quidem eligendi, itaque similique esse. Consequatur quod a quis expedita, doloremque velit harum natus quaerat saepe repudiandae eum! Eveniet, officia.
         </p>
         <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum possimus quidem eligendi, itaque similique esse. Consequatur quod a quis expedita, doloremque velit harum natus quaerat saepe repudiandae eum! Eveniet, officia.
         </p>
         
        </div>
      </div>
    </section>
  );
}
