import React from 'react';
import './FeaturedPartners.css';
import image from "../../assets/1.png"
import image2 from "../../assets/1.png"
import image3 from "../../assets/1.png"
import image4 from "../../assets/1.png"
import image5 from "../../assets/1.png"
import image6 from "../../assets/1.png"
// Array of partner logos (replace with actual paths to images)
const partners = [
  { src: image, alt: "BAE Systems" },
  { src: image, alt: "Buhler" },
  { src: image, alt: "ISS National Laboratory" },
  { src: image, alt: "KPMG" },
  { src: image, alt: "LDC" },
  { src: image, alt: "MassMutual" },
  { src: image, alt: "MITRE" },
  { src: image, alt: "Point32Health" },
  { src: image, alt: "Putnam Investments" },
  { src: image, alt: "US Air Force" }
];

export default function FeaturedPartners() {
  return (
    <section className="featured-partners-section">
      <h2>Highlighted Partners</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div className="partner-card" key={index}>
            <img src={partner.src} alt={partner.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
