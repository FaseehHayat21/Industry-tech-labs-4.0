// import React, { useState } from 'react';
// import './AiandBigData.css';

// export default function AiandBigData() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleToggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const focusAreas = [
//     {
//       title: 'AI & Big Data',
//       description:
//         'AI and Big Data help industries optimize processes and make data-driven decisions.',
//     },
//     {
//       title: 'Circular Manufacturing',
//       description:
//         'Circular manufacturing focuses on sustainable and waste-free production practices.',
//     },
//     {
//       title: 'Digital Twins for Advanced Manufacturing Innovation',
//       description:
//         'Digital twins simulate physical assets to improve performance and innovation.',
//     },
//     {
//       title: 'Predictive Maintenance',
//       description:
//         'Predictive maintenance reduces downtime by anticipating failures before they occur.',
//     },
//     {
//       title: 'Robotics & Automation',
//       description:
//         'Robotics and automation streamline operations and improve productivity.',
//     },
//     {
//       title: 'Supply Chain Visibility',
//       description: 'Supply chain visibility ensures seamless operations.',
//     },
//     {
//       title: 'Workforce Training',
//       description:
//         'Workforce training empowers employees with skills to adapt to new technologies.',
//     },
//   ];

//   return (
//     <section className="founders-section">
//       {/* Banner Section */}
//       <div className="banner">
//         <h1>AI and Big Data</h1>
//       </div>

//       {/* Content Section */}
//       <div className="content">
//         <p>
//           <strong>AI and Big Data</strong> are reshaping industries by enabling businesses to make data-driven decisions, optimize operations, and create personalized experiences. From predictive analytics to automation, AI and Big Data technologies empower organizations to extract valuable insights from vast amounts of data, unlocking new opportunities for innovation and efficiency.
//         </p>
//         <p>
//           At Infinity Tech Labs, we support AI and Big Data startups by providing access to advanced tools, expert guidance, and strategic partnerships. Whether it's building intelligent systems, improving data management practices, or driving data-centric innovations, we help startups leverage the full potential of these technologies to scale their impact. Through our global network, AI and Big Data startups can accelerate their growth and create transformative solutions for industries worldwide.
//         </p>
//       </div>
//       {/* Focus Areas Section */}
//       <div className="focus-areas">
//         <h2>Our Focus Areas</h2>
//         <ul>
//           {focusAreas.map((area, index) => (
//             <li key={index}>
//               <div className="focus-area-header">
//                 <span className="focus-title">{area.title}</span>
//                 <button
//                   className="focus-button"
//                   onClick={() => handleToggle(index)}
//                 >
//                   {activeIndex === index ? '-' : '+'}
//                 </button>
//               </div>
//               {activeIndex === index && (
//                 <p className="focus-description">{area.description}</p>
//               )}
//             </li>
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
import './AiandBigData.css';

export default function AiandBigData() {
  const focusAreas = [
    'Infrastructure & Information Technology',
    'Future of Work',
    'Customer Engagement',
    'Cyber Security',
  ];

  return (
    <section className="founders-section">
      {/* Banner Section */}
      <div className="banner">
        <h1>AI and Big Data</h1>
      </div>

      {/* Content Section */}
      <div className="content">
        <p>
          <strong>AI and Big Data</strong> are reshaping industries by enabling businesses to make data-driven decisions, optimize operations, and create personalized experiences. 
        </p>
        <p>
        At Infinity Tech Labs, we support AI and Big Data startups by providing access to advanced tools, expert guidance, and strategic partnerships. Through our network, AI and Big Data startups can accelerate their growth and create transformative solutions for industries worldwide.
        </p>
        <h2>Ready to Talk?</h2>
        <p>
          Organizations looking for innovative AI and Big Data solutions to address their challenges are invited to connect with Infinity Tech Labs today!
        </p>
      </div>

      {/* Focus Areas Section */}
      <div className="focus-areas">
        <h2>Our Focus Areas</h2>
        <ul>
          {focusAreas.map((area, index) => (
            <li key={index} className="focus-title">
              {area}
            </li>
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
