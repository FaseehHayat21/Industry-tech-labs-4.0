// import React from 'react';
// import './ClimateTech.css';

// export default function ClimateTech() {
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
//         <h1>Climate Tech</h1>
//       </div>
//       <div className="content">
     
//         <p><strong>Climate tech</strong> is at the forefront of addressing the world’s most urgent environmental challenges, from reducing greenhouse gas emissions to enhancing resilience against climate impacts. This sector encompasses a diverse range of innovations, including clean energy solutions, sustainable agriculture practices, carbon capture technologies, and resource-efficient manufacturing. Companies and startups within the climate tech field are pioneering advancements that are essential for achieving a low-carbon, sustainable future.</p>
//         <p>
//         Infinity Tech Labs is committed to supporting climate tech entrepreneurs who are tackling these complex issues. Through our Innovation Network, we provide startups with access to critical resources, mentorship, and collaboration opportunities. Our goal is to empower visionary teams to accelerate their impact and bring scalable solutions to market, ultimately contributing to a healthier planet and a sustainable economy."
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
import './ClimateTech.css';
import aiimage from "../../../assets/ai.jpg";
import  climate from '../../../assets/climate.png';

export default function ClimateTech() {
  const focusAreas = [
    'Mobility',
    'Circular Economy',
    'Sustainable Energies',
    'AgriTech',
    'Energy Efficiency',
  ];

  return (
    <section className="founders-section">
      {/* Banner Section */}
      <div className="banner">
        <h1>Climate Tech</h1>
      </div>

      {/* Content Section */}
      <div className="intro-section">
        <div className="intro-container">
          <div className="intro-text">
        <p>
          <strong>Climate tech</strong> is at the forefront of addressing the world’s most urgent environmental challenges, from reducing greenhouse gas emissions to enhancing resilience against climate impacts. 
        </p>
        <p>
        Infinity Tech Labs is committed to supporting climate tech entrepreneurs who are tackling these complex issues. Through our Innovation Network, we provide startups with access to critical resources, mentorship, and collaboration opportunities. 
        </p>
     
      </div>
      <div className="intro-image">
                  <img className='climate-tech-image' src={climate} alt="AI and Big Data Innovation" />
                </div>
              </div>
            </div>

          
    <div className="content-climate">
    <h2>Want to Get Involved?</h2>
        <p>
          Organizations seeking innovative, dual-use technologies to tackle their unique challenges are invited to connect with Infinity Tech Labs today!
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
        {/* <div className="journey-banner">
        <div className="journey-banner-content">
          <div className="text-section">
            <h2>Ready to talk?</h2>
            <h5>
            Organizations seeking innovative, dual-use technologies to tackle their unique challenges are invited to connect with Infinity Tech Labs today!
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
