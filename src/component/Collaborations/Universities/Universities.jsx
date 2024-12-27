import React from 'react';
import './Universities.css';
import studentmodel from "../../../assets/studentmodel.jpg"
import studentmodel2 from "../../../assets/uni2en.png"
export default function Universities() {
  return (
    <section className="founders-section">
      <div className="banner">
        <h1>Universites</h1>
      </div>
      <div className="content">
     
        <p>Focusing on impact based industry-academia model, ITL offers professional programs to the universities, bridging the gap between academia and industry. We encourage pushing boundaries to connect university researchers, entrepreneurs, and businesses, fostering innovation that drives growth and create an impact.</p>
        <img className='uni-image' src={studentmodel} alt="" />
        <p>
       Our student engagement model covers all aspect of Pre-Incubation, Incubation and Acceleration stages are illustrated here.
        </p>

     
        <img className='uni-image' src={studentmodel2} alt="" />
      </div>
      
    </section>
  );
}
