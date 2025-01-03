// import React from 'react';
// import './ArAndVr.css';

// export default function ArAndVr() {
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
//       {/* Banner Section */}
//       <div className="banner">
//         <h1>AR/VR (Augmented Reality/Virtual Reality)</h1>
//       </div>

//       {/* Content Section */}
//       <div className="content">
//         <p>
//           <strong>AR and VR</strong> are revolutionizing how we experience and interact with the world by blending digital content with the physical environment (AR) or immersing users in entirely virtual worlds (VR). These technologies are transforming industries like gaming, education, healthcare, retail, and real estate by providing immersive, interactive experiences that enhance learning, customer engagement, and product development.
//         </p>
//         <p>
//           At Infinity Tech Labs, we empower AR/VR startups by offering access to the latest technologies, mentorship from industry experts, and strategic partnerships that foster innovation. Whether it's developing cutting-edge applications or creating new virtual environments, our ecosystem supports startups in creating transformative experiences that push the boundaries of digital interaction. With the backing of our network, AR/VR startups can scale quickly and lead the next wave of immersive technology advancements.
//         </p>
//       </div>

//       {/* Focus Areas Section */}
//       <div className="focus-areas">
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
import './ArAndVr.css';
import vrai from '../../../assets/vrai.jpg';

export default function ArAndVr() {
  const focusAreas = [
    'Gaming and Entertainment',
    'Healthcare and Therapy',
    'Education and Training',
    'Retail and E-commerce',
    'Real Estate and Architecture',
  ];

  return (
    <section className="founders-section">
      {/* Banner Section */}
      <div className="banner">
        <h1>AR/VR (Augmented Reality/Virtual Reality)</h1>
      </div>

      {/* Content Section */}
      <div className="intro-section">
        <div className="intro-container">
          <div className="intro-text">
        <p>
          <strong>AR and VR</strong> are revolutionizing how we experience and interact with the world by blending digital content with the physical environment (AR) or immersing users in entirely virtual worlds (VR).
        </p>
        <p>
          At Infinity Tech Labs, we empower AR/VR startups by offering access to the latest technologies, mentorship from industry experts, and strategic partnerships that foster innovation. With the backing of our network, AR/VR startups can scale quickly and lead the next wave of immersive technology advancements.
        </p>
      </div>

<div className="intro-image">
            <img src={vrai} alt="AI and Big Data Innovation" />
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

      {/* Call-to-Action Banner */}
      <div className="cta-banner">
        <div className="cta-banner-content">
          <div className="cta-text">
            <h2>Ready to talk?</h2>
            <p>
              Organizations looking for innovative AR/VR solutions to address their challenges are invited to connect with Infinity Tech Labs today!
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
