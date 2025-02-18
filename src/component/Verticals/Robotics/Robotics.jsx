
// import React from 'react';
// import './Robotics.css';

// export default function Robotics() {
//   const focusAreas = [
//     'AI & Big Data',
//     'Circular Manufacturing',
//     'Digital Twins for Advanced Manufacturing Innovation',
//     'Predictive Maintenance',
//     'Robotics & Automation',
//     'Supply Chain Visibility',
//     'Workforce Training',
//   ];
//   return (
//     <section className="founders-section">
//       <div className="banner">
//         <h1>Robotics and autonomous systems</h1>
//       </div>
//       <div className="content">
     
//         <p><strong>Robotics and autonomous systems</strong>  are revolutionizing industries by automating tasks, improving efficiency, and creating innovative solutions across sectors such as manufacturing, healthcare, logistics, and agriculture. From autonomous vehicles to robotic process automation, these technologies are enabling greater precision, reducing human error, and driving new levels of productivity.</p>
//         <p>
//         At Infinity Tech Labs, we support startups in the robotics and autonomous systems space by providing access to advanced technologies, expert mentorship, and strategic partnerships. Whether it’s developing cutting-edge robotic solutions, advancing autonomous vehicle technologies, or integrating AI for smarter systems, our ecosystem fosters innovation that pushes the limits of automation. With the backing of our global network, robotics and autonomous systems startups can scale faster and bring transformative solutions to life across industries.
//         </p>
//       </div>
      
//      {/* Focus Areas Section */}
//      <div className="focus-areas">
//         <h2>Our Focus Areas</h2>
//         <ul>
//           {focusAreas.map((area, index) => (
//             <li key={index}>{area}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Journey Banner */}
//       <div className="journey-banner">
//         <h3>ADVANCED MANUFACTURING INNOVATION PLATFORM</h3>
//         <h2>Ready to start your innovation journey?</h2>
//         <button>Contact Us</button>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import './Robotics.css';
import robotics from '../../../assets/roboticss.jpg';

export default function Robotics() {
  const focusAreas = [
    'Industrial Automation',
    'Medical Robotics',
    'Autonomous Vehicles',
    'Humanoid Robots',
    'Agricultural Robotics',
  ];

  return (
    <section className="founders-section">
      {/* Banner Section */}
      <div className="banner">
        <h1>Robotics and Autonomous Systems</h1>
      </div>

      {/* Content Section */}
      <div className="intro-section">
        <div className="intro-container">
          <div className="intro-text">
        <p>
          <strong>Robotics and autonomous systems</strong>  are revolutionizing industries by automating tasks, improving efficiency, and creating innovative solutions across sectors such as manufacturing, healthcare, logistics, and agriculture. 
        </p>
        <p>
        At Infinity Tech Labs, we support startups in the robotics and autonomous systems space by providing access to advanced technologies, expert mentorship, and strategic partnerships. With the backing of our network, robotics and autonomous systems startups can scale faster and bring transformative solutions to life across industries.
        </p>
      </div>
 <div className="intro-image">
            <img src={robotics} alt="AI and Big Data Innovation" />
          </div>
        </div>
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
       {/* Journey Banner */}
       {/* <div className="journey-banner">
      <div className="journey-banner-content">
        <div className="text-section">
          <h2>Ready to talk?</h2>
          <h5>
          Organizations looking for innovative Robotics & Autonomous Systems to address their challenges are invited to connect with Infinity Tech Labs today!
          </h5>
        </div>
        <div className="button-section">
          <button>Contact Us</button>
        </div>
      </div>
    </div> */}
       {/* Journey Banner */}
       <div className="cta-banner">
        <div className="cta-banner-content">
          <div className="cta-text">
            <h2>Ready to talk?</h2>
            <p>
                Organizations looking for innovative Cyber Security to address their challenges are invited to connect with Infinity Tech Labs today!
            </p>
          </div>
          <div className="cta-button">
            <button onClick={() => alert('Redirecting to Contact Page!')}>Get in Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
}
