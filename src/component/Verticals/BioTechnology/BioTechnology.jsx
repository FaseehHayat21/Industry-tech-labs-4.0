// import React from 'react';
// import './BioTechnology.css';

// export default function BioTechnology() {
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
//         <h1>Biotechnology</h1>
//       </div>
//       <div className="content">
     
//         <p> <strong>Biotechnology</strong> is reshaping the boundaries of innovation, enabling breakthroughs
//         that transform healthcare, agriculture, and environmental sustainability. At Infinity
//         Tech Labs, we harness the power of cutting-edge biotechnological solutions to
//         address complex challenges, from genetic engineering to bioinformatics. With
//         advancements in synthetic biology, CRISPR, and regenerative medicine, biotech is
//         driving a new era of precision in science and technology.</p>
//         <p>
//         Our focus lies in leveraging biotechnology to create impactful solutions that benefit
//         society and the planet. From developing bio-based materials and sustainable
//         alternatives to traditional processes, to designing innovative therapies that target
//         diseases at the molecular level, we are committed to pioneering progress. Through
//         collaborations with researchers and biotech firms, Infinity Tech Labs bridges the gap
//         between groundbreaking discoveries and real-world applications.
//         </p>
//         <p>
//         As the world confronts challenges like global health crises, food insecurity, and
//         environmental degradation, biotechnology offers a beacon of hope. At the forefront
//         of these developments, Infinity Tech Labs is dedicated to fostering innovation that
//         promotes health, sustainability, and prosperity. Whether it’s advancing agricultural
//         yields, reducing environmental footprints, or improving patient care, our mission is to
//         unlock the potential of life sciences for a better future.
//         </p>
//       </div>
     
//   {/* Focus Areas Section */}
//   <div className="focus-areas">
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
import './BioTechnology.css';

export default function BioTechnology() {
  const focusAreas = [
    'Biofuels',
    'Agricultural Biotechnology',
    'Industrial Biotechnology',
    'Maternal Health',
    'Public Health',
  ];

  return (
    <section className="founders-section">
      {/* Banner Section */}
      <div className="banner">
        <h1>Biotechnology</h1>
      </div>

      {/* Content Section */}
      <div className="content">
        <p>
          <strong>Infinity Tech Labs</strong> drives innovation in healthcare and biotechnology by connecting startups with industry leaders to tackle key challenges. Our community brings together experts from diverse fields, fostering collaboration to redefine health and wellness through cutting-edge solutions.
        </p>
        <p>
          We harness the power of biotechnology to transform healthcare, agriculture, and sustainability. From genetic engineering to bioinformatics, we work with researchers and biotech firms to turn groundbreaking discoveries into real-world applications, shaping a future powered by science.
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
            Organizations looking for innovative BioTechnology & Healthcare solutions to address their challenges are invited to connect with Infinity Tech Labs today!
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
