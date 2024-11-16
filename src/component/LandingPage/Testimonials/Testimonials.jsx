import React, { useState } from 'react';
import './Testimonials.css';
import  image  from "../../../assets/2.png"
import  image1  from "../../../assets/1.png"
const testimonials = [
  {
    text: "My internship at Infinity Tech Labs was an incredibly rewarding experience thatpushed me beyond my comfort zone and allowed me to take on meaningful responsibilities. I had the opportunity to work on cutting-edge projects, ...",
    name: "Ammar Hussain",
    title: "National University of Science and Technology",
    image: image 
  },
  {
    text: "Our goal was to unlock untapped potential by bringing diverse perspectives into one collaborative space. With Infinity Tech Labs, we fostered an environment where creative minds could converge, driving innovation and redefining our approach to problem-solving.",
    name: ".......",
    title: "..............",
    image: image1 
  },
  {
    text: "By partnering with Infinity Tech Labs, we gained access to a network of forward-thinking innovators. This partnership allowed us to approach challenges with fresh insights and unconventional strategies, transforming obstacles into opportunities for growth.",
    name: ".......",
    title: "..............",
    image: image1
  },
  {
    text: "By partnering with Infinity Tech Labs, we gained access to a network of forward-thinking innovators. This partnership allowed us to approach challenges with fresh insights and unconventional strategies, transforming obstacles into opportunities for growth.",
    name: ".......",
    title: "..............",
    image: image1 
  },

];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonials-section">
      <h2>The Infinity Tech Labs Experience</h2>
      <div className="testimonial-slider">
        <button onClick={handlePrev} className="arrow-button left-arrow">❯</button>
        <div className="testimonial-slider-wrapper">
          <div
            className="testimonial-slider-inner"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <p>{testimonial.text}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} className="arrow-button right-arrow">❯</button>
      </div>
    </section>
  );
}
