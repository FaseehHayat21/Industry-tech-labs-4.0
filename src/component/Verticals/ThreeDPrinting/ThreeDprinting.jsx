
import React from 'react';
import './ThreeDPrinting.css';

export default function ThreeDprinting() {
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
        <h1>3D Printing</h1>
      </div>
      <div className="content">
     
        <p><strong>3D Printing</strong> is transforming the manufacturing and design landscapes by enabling rapid prototyping, customization, and on-demand production. This technology allows businesses to create intricate, high-quality products with greater efficiency and reduced costs, making it a game-changer in industries such as automotive, healthcare, aerospace, and consumer goods.</p>
        <p>
        Startups in the 3D printing space can leverage our resources at Infinity Tech Labs to accelerate innovation. From prototyping to production, we provide access to cutting-edge technologies, expert mentorship, and strategic partnerships that help businesses push the boundaries of what’s possible. With the support of our network, 3D printing startups can scale faster and drive impactful change across industries
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

