import React, { useEffect, useState } from 'react';

import './TechnologyVerticals.css'; // Import the CSS file
import Aos from "aos";
import "aos/dist/aos.css";

// Import your images (adjust the paths)
import aiImage from '../../assets/ai.jpg';
import roboticsImage from '../../assets/robot.jpg';
import cyberImage from '../../assets/Bitcoin.jpg';
import printingImage from '../../assets/bg1.jpg';
import iotImage from '../../assets/bg1.jpg';
import arvrImage from'../../assets/vrai.jpg';
import spaceImage from '../../assets/space.jpg';
import biotechImage from '../../assets/bg1.jpg';

const TechnologyVerticals = () => {
  const [selectedCard, setSelectedCard] = useState(null); // Track the selected card
  const [isPopupVisible, setPopupVisible] = useState(false); // Track the popup visibility

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedCard(null); // Reset selected card
  };

  const cardsData = [
    { title: "AI & Big Data", description: "Leading advancements in Artificial Intelligence and data processing.", image: aiImage },
    { title: "Robotics", description: "Pioneering autonomous systems and robotics for industrial use.", image: roboticsImage },
    { title: "Cyber & Crypto", description: "Securing the future with cutting-edge cybersecurity and cryptography.", image: cyberImage },
    { title: "3D Printing", description: "Revolutionizing manufacturing with advanced 3D printing technology.", image: printingImage },
    { title: "IoT & Networks", description: "Connecting the world with smart devices and innovative communication networks.", image: iotImage },
    { title: "AR / VR", description: "Shaping the future of immersive experiences with augmented and virtual reality.", image: arvrImage },
    { title: "Space & Propulsion", description: "Advancing propulsion systems and space exploration technology for the future.", image: spaceImage },
    { title: "BioTech", description: "Revolutionizing healthcare with cutting-edge biotechnological innovations.", image: biotechImage },
  ];

  return (
    <section className="vertical-section" id="verticals">
      <h2 className="tech-heading">Our Technology Verticals</h2>
      <div className="vertical-grid" data-aos="fade-up">
        {cardsData.map((card, index) => (
          <div
            className="vertical-card"
            key={index}
            onClick={() => handleCardClick(card)}
          >
            <img src={card.image} alt={card.title} className="vertical-image" />
            <h4 className="vertical-title">{card.title}</h4>
            <p className="vertical-description">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Popup/Modal */}
      {isPopupVisible && selectedCard && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="popup-close" onClick={handleClosePopup}>
              &times;
            </span>
            <div className="popup-inner">
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="popup-image"
              />
              <div className="popup-details">
                <h4>{selectedCard.title}</h4>
                <p>{selectedCard.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechnologyVerticals;