
import React from 'react';
import './Sustainable.css';

export default function SustainableFood() {
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
        <h1>Sustainable Food Systems</h1>
      </div>
      <div className="content">
     
        <p>The food value chain is responsible for 25-30% of global greenhouse gas emissions, and climate change is increasingly impacting food security worldwide. Addressing these challenges requires innovation across the entire chain, from production and transportation to minimizing food waste. By improving efficiency in these areas, it’s possible to reduce emissions and contribute to feeding an estimated global population of 9 billion by 2050.</p>
        <p>
        Infinity Tech Labs is collaborating with leading food corporations to accelerate startups that are driving transformative change in the food industry. Through these partnerships, we foster growth and empower impactful solutions aimed at creating a sustainable, resilient food system for the future.
        </p>
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

