// import React from 'react';
// import './DualUse.css';

// export default function DualUse() {
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
//         <h1>Dual Use</h1>
//       </div>
//       <div className="content">
     
//         <p><strong>Dual-use</strong> technology encompasses innovations that serve both civilian and defense applications, creating versatile solutions that can enhance public welfare while also strengthening security. This field includes advancements in areas like cybersecurity, artificial intelligence, autonomous systems, and communication technologies, which have broad applications in everything from public infrastructure to national defense. Dual-use technology bridges the gap between commercial and defense sectors, allowing for innovations that can be adapted for a range of purposes.</p>
//         <p>
//         Infinity Tech Labs actively supports companies developing dual-use technologies, recognizing their potential to drive progress across multiple industries. By providing strategic guidance, access to funding, and networking opportunities, we empower entrepreneurs to bring transformative, adaptable solutions to the market. Through our network, these innovators are able to address critical needs across both public and private sectors, fostering resilience and security in an increasingly interconnected world."
//         </p>
//       </div>
//    {/* Focus Areas Section */}
//    <div className="focus-areas">
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
import './DualUse.css';
import dual from '../../../assets/dual.jpg';
export default function DualUse() {
  const focusAreas = [
    'Artificial Intelligence',
    'Advanced Material',
    'Digital Twins',
    'Robotics',
    'Drones',
  ];

  return (
    <section className="founders-section">
      {/* Banner Section */}
      <div className="banner">
        <h1>Dual Use</h1>
      </div>

      {/* Content Section */}
      <div className="intro-section">
        <div className="intro-container">
          <div className="intro-text">
        <p>
          <strong>Dual Use</strong> technology encompasses innovations that serve both civilian and defense applications, creating versatile solutions that can enhance public welfare while also strengthening security. This field includes advancements in areas like cybersecurity, artificial intelligence, autonomous systems, and communication technologies, which have broad applications in everything from public infrastructure to national defense. Dual-use technology bridges the gap between commercial and defense sectors, allowing for innovations that can be adapted for a range of purposes.
        </p>
        <p>
        Infinity Tech Labs actively supports companies developing dual-use technologies, recognizing their potential to drive progress across multiple industries. Through our network, these innovators are able to address critical needs across both public and private sectors, fostering resilience and security in an increasingly interconnected world.
        </p>
        <p>
        </p>
      </div>
       <div className="intro-image">
                  <img src={dual} alt="AI and Big Data Innovation" />
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
              Organizations seeking innovative, dual-use technologies to address their unique challenges are encouraged to connect with Infinity Tech Labs today!
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
