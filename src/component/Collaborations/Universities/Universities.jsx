import React from 'react';
import './Universities.css';
import studentmodel from "../../../assets/studentmodel.jpg"
import studentmodel2 from "../../../assets/studentmodel2.png"
export default function Universities() {
  return (
    <section className="founders-section">
      <div className="banner">
        <h1>Universites</h1>
      </div>
      <div className="content">
     
        <p>Rooted in an industry-academia model, Infinity Tech Labs offers tailored solutions to universities, bridging the gap between academia and industry. We encourage pushing boundaries to connect university researchers, entrepreneurs, and businesses, fostering innovation that drives growth and transforms economies</p>
        <p>
        At Universities, the students’ engagement model has been defined, covering Technology Readiness Level (TRL), model validation and scalability. The Pre-Incubation, Incubation and Acceleration stages are illustrated here.
        </p>

        <img className='uni-image' src={studentmodel} alt="" />
        {/* <img className='uni-image' src={studentmodel2} alt="" /> */}
      </div>
      
    </section>
  );
}
