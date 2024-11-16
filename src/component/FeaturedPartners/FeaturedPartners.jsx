import React from 'react';
import './FeaturedPartners.css';
import airuniversity from "../../assets/airuniversity.jpg"
import auc from "../../assets/auc.png"
import casee from "../../assets/case.png"
import skybees from "../../assets/skybees.png"
import foxit from "../../assets/foxit.jpg"
import densefusion from "../../assets/densefusion.jpg"
import nih from "../../assets/nih.png"
// Array of partner logos (replace with actual paths to images)
const partners = [
  { src: airuniversity, alt: "Air Universirty" },
  { src: auc, alt: "Buhler" },
  { src: casee, alt: "ISS National Laboratory" },
  { src: skybees, alt: "KPMG" },
  { src: foxit, alt: "LDC" },
  { src: nih, alt: "LDC" },
  { src: densefusion, alt: "MassMutual" }
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
