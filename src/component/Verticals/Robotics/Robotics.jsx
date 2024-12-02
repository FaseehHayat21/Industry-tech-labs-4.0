
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
      <div className="content">
        <p>
          <strong>Robotics and autonomous systems</strong>  are revolutionizing industries by automating tasks, improving efficiency, and creating innovative solutions across sectors such as manufacturing, healthcare, logistics, and agriculture. 
        </p>
        <p>
        At Infinity Tech Labs, we support startups in the robotics and autonomous systems space by providing access to advanced technologies, expert mentorship, and strategic partnerships. With the backing of our network, robotics and autonomous systems startups can scale faster and bring transformative solutions to life across industries.
        </p>
        <h2>Ready to Talk?</h2>
        <p>
          Organizations looking for innovative Robotics & Autonomous Systems to address their challenges are invited to connect with Infinity Tech Labs today!
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
        <h3>ADVANCED ROBOTICS INNOVATION PLATFORM</h3>
        <h2>Ready to start your innovation journey?</h2>
        <button>Contact Us</button>
      </div>
    </section>
  );
}
