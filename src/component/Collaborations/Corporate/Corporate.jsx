import React from 'react';
import './Corporate.css';
import corporate from "../../../assets/corporate.jpg"
export default function Corporate() {
  return (
    <section className="founders-section">
      <div className="banner">
        <h1>Corporate</h1>
      </div>
      <div className="content">
         <h1><strong> Collaborative Innovation</strong></h1>
       <p><strong>Infinity Tech Labs</strong> fosters collaboration between startups and enterprises to drive success. It provides tailored solutions to meet partners' goals, encouraging innovation and connections between corporate innovators, entrepreneurs, and communities to promote business growth and economic transformation.</p>
       <img className='uni-image' src={corporate} alt="" />
       <h1><strong>Scalability with Infinity Tech Labs</strong></h1>
        <p>
        ITL helps Corporate innovation teams accelerate innovation by providing access to high-growth startups, reducing innovation costs, and expanding external efforts. Ideal for large corporations, innovation teams, and industry leaders, 
        Infinity Tech Labs fosters collaboration within its global network. It offers access to vetted startups, engagement opportunities across the ecosystem, and expert support to enhance corporate capabilities and drive business growth.

        </p>
      </div>
     
    </section>
  );
}
