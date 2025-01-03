import React from 'react';
import './Corporate.css';
import corporate from "../../../assets/ind2in.png"
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
      <p> We have custom corporate innovation programs across all industries aimed at transforming organizations.</p>
      </div>
     
    </section>
  );
}
