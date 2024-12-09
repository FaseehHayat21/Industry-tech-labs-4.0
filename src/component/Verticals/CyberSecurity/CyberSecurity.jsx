// import React from 'react';
// import './CyberSecurity.css';

// export default function CyberSecurity() {
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
//         <h1>Cybersecurity</h1>
//       </div>
//       <div className="content">
     
//         <p><strong>Cybersecurity and cryptography</strong> are at the forefront of the digital revolution, addressing critical issues in data protection and financial systems. As cyber threats grow in complexity, businesses need robust security solutions to safeguard sensitive information and maintain trust. Meanwhile, the rise of blockchain and cryptocurrencies is reshaping financial transactions, enabling decentralized systems and new opportunities for secure, transparent, and efficient digital exchanges.</p>
//         <p>
//         Infinity Tech Labs supports startups in the cyber and crypto sectors by providing access to cutting-edge technologies, expert guidance, and valuable industry connections. Whether it's developing secure systems, exploring blockchain applications, or navigating regulatory landscapes, we help startups drive innovation in cybersecurity and crypto solutions. With the strength of our global network, cyber and crypto startups can scale rapidly, creating a safer, more decentralized future for businesses and consumers alike.
//         </p>
//       </div>
//     {/* Focus Areas Section */}
//     <div className="focus-areas">
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
import './CyberSecurity.css';

export default function CyberSecurity() {
  const focusAreas = [
    'Network Security',
    'Application Security',
    'Cloud Security',
    'Endpoint Security',
    'Cybersecurity Leadership',
  ];

  return (
    <section className="founders-section">
      <div className="banner">
        <h1>Cybersecurity</h1>
      </div>

      <div className="content">
        <p>
          <strong>Cybersecurity and cryptography</strong> are at the forefront of the digital revolution, addressing critical issues in data protection and financial systems. As cyber threats grow in complexity, businesses need robust security solutions to safeguard sensitive information and maintain trust. 
        </p>
        <p>Infinity Tech Labs supports startups in the cyber and crypto sectors by providing access to cutting-edge technologies, expert guidance, and valuable industry connections. With the strength of our network, cyber and crypto startups can scale rapidly, creating a safer, more decentralized future for businesses and consumers alike.
         
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
         {/* Journey Banner */}
         <div className="journey-banner">
  <div className="journey-banner-content">
    <div className="text-section">
      <h2>Ready to talk?</h2>
      <h5>
      Organizations looking for innovative Cyber Security to address their challenges are invited to connect with Infinity Tech Labs today!
      </h5>
    </div>
    <div className="button-section">
      <button>Contact Us</button>
    </div>
  </div>
</div>
    </section>
  );
}
