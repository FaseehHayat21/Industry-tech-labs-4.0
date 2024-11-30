
import React from 'react';
import './HealthCare.css';

export default function HealthCare() {
  const focusAreas = [
    'AI & Big Data',
    'Circular Manufacturing',
    'Digital Twins for Advanced Manufacturing Innovation',
    'Predictive Maintenance',
    'Robotics & Automation',
    'Supply Chain Visibility',
    'Workforce Training',
  ];
  return (
    <section className="founders-section">
      <div className="banner">
        <h1>Cybersecurity</h1>
      </div>
      <div className="content">
     
        <p> The Infinity Tech Labs <strong>Healthcare</strong>community brings together experts from diverse fields to drive innovation in healthcare through entrepreneurship. In partnership with organizations like National Institute of Health (NIH), it can connect promising healthcare startups with influential leaders to address key challenges in health and wellness.</p>
        <p>
        The Infinity Tech Labs offers a variety of healthcare-focused programs aimed at fostering innovation and improving lives through technology:
        </p>
        <ul>
          <li> <p><strong>•	Bio-Tech: </strong> Supports startups combining science and engineering to create innovative deep-tech solutions that enhance human well-being.</p></li>
          <li> <p><strong>•	Med-Tech: </strong> Builds med-tech and life sciences heritage to support startups in improving healthcare offerings.</p></li>
          <li> <p><strong>•	Calamity-Tech:  </strong> Focuses on preventing and mitigating large-scale disasters and supporting post-calamity recovery efforts, such as clean water and humanitarian aid.</p></li>
          <li> <p><strong>•	Seniors’ Tech: </strong> Advances technologies to improve the lives of the aging population, offering more connected, tech-driven solutions</p></li>

        </ul>
      </div>
      
     {/* Focus Areas Section */}
     <div className="focus-areas">
        <h2>Our Focus Areas</h2>
        <ul>
          {focusAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      {/* Journey Banner */}
      <div className="journey-banner">
        <h3>ADVANCED MANUFACTURING INNOVATION PLATFORM</h3>
        <h2>Ready to start your innovation journey?</h2>
        <button>Contact Us</button>
      </div>
    </section>
  );
}
