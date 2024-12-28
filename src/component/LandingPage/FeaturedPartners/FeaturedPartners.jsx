// import React from 'react';
// import './FeaturedPartners.css';
// import airuniversity from "../../../assets/airlogo.png"
// import auc from "../../../assets/auc.png"
// import casee from "../../../assets/case.png"
// import skybees from "../../../assets/skybees.png"
// import foxit from "../../../assets/foxit.jpg"
// import densefusion from "../../../assets/densefusion.jpg"
// import nih from "../../../assets/nih.png"
// import logo128 from "../../../assets/128logo.jpg"
// import {useEffect} from 'react';
// import Aos from "aos"
// import "aos/dist/aos.css"
// // Array of partner logos (replace with actual paths to images)
// const partners = [
//   { src: airuniversity, alt: "Air Universirty" },
//   { src: auc, alt: "Buhler" },
//   { src: casee, alt: "ISS National Laboratory" },
//   { src: skybees, alt: "KPMG" },
//   { src: foxit, alt: "LDC" },
//   { src: nih, alt: "LDC" },
//   { src: densefusion, alt: "MassMutual" },
//   { src: logo128, alt: "128 Technologies" }
// ];

// export default function FeaturedPartners() {
//    useEffect(()=> {
//                     Aos.init({duration: 2000});
//                 })
//   return (
//     <section className="featured-partners-section" >
//       <h2>Significant Partners</h2>
//       <div className="partners-grid">
//         {partners.map((partner, index) => (
//           <div className="partner-card" key={index}  data-aos="fade-left">
//             <img src={partner.src} alt={partner.alt} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useEffect } from 'react';
import './FeaturedPartners.css';
import airuniversity from "../../../assets/airlogo.png";
import auc from "../../../assets/auc.png";
import casee from "../../../assets/case.png";
import skybee from "../../../assets/skybee.png";
import foxit from "../../../assets/foxit.jpg";
import densefusion from "../../../assets/densefusion.jpg";
import nih from "../../../assets/nih.png";
import logo128 from "../../../assets/128logo.jpg";
import cyberleap from "../../../assets/cyberleaps.png";
import innovativetechnoloy from "../../../assets/innovativetechnology.png";
import globalresources from "../../../assets/globalresources.png";
import Aos from "aos";
import "aos/dist/aos.css";

// Array of partner logos (replace with actual paths to images)
const partners = [
  { src: auc, alt: "Buhler" },
  { src: skybee, alt: "KPMG" },
  { src: foxit, alt: "LDC" },
  { src: nih, alt: "LDC" },
  { src: densefusion, alt: "MassMutual" },
  { src: logo128, alt: "128 Technologies" },
  { src: cyberleap, alt: "cyberleap" },
  {src: innovativetechnoloy, alt:"innovativetechnoloy"},
  {src: globalresources, alt:"globalresources"}

];

export default function FeaturedPartners() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with a base duration
  }, []);

  return (
    <section className="featured-partners-section">
      <h2>Significant Partners</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div
            className="partner-card"
            key={index}
            data-aos="fade-left"
            data-aos-delay={index * 200} // Incremental delay for each card
          >
            <img src={partner.src} alt={partner.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
