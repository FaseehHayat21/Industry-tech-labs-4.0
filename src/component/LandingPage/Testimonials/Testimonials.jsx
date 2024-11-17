import React, { useState } from 'react';
import './Testimonials.css';
import  arooj  from "../../../assets/arooj.jpg"
import  ammar  from "../../../assets/ammar.jpg"
import  amna  from "../../../assets/amna.jpg"
import  junaid  from "../../../assets/junaid.jpg"
const testimonials = [
  {
    text: "My internship at Infinity Tech Labs was an incredibly rewarding experience that pushed me beyond my comfort zone and allowed me to take on meaningful responsibilities. I had the opportunity to work on cutting-edge projects, including designing and implementing a real-time drone object tracking system using YOLO and the Jetson Xavier platform. I gained hands-on experience in data collection, model training, and system optimization, while also exploring innovative applications like tracking players in a football match from aerial views. This experience significantly enhanced my technical skills and gave me a deeper understanding of the real-world applications of AI and drone technology.",
    name: "Ammar Hussain",
    title: "National University of Science and Technology",
    image: ammar 
  },
  {
    text: "During my internship at Infinity Tech Labs, I worked on an Industry 4.0 project focused on disruptive technologies. This research-driven R&amp;D task pushed me to sharpen my critical thinking and problem-solving skills. I also participated in design thinking workshops that emphasized transforming innovative concepts into viable startups. The two-month experience was both demanding and rewarding, providing me with valuable insights into cutting-edge technology and its potential for business development.",
    name: "Arooj Fatima",
    title: "Institute Of Space Technology",
    image: arooj 
  },
  {
    text: "My internship at the Infinity Tech Labs has been an enriching experience, offering invaluable hands-on exposure to advanced aerospace systems. Working on the autopilot of the Pixhawk 6C allowed me to develop critical technical skills, collaborate with a talented team, and contribute to real-world projects. This experience has deepened my understanding of flight control systems and boosted my confidence as a graduate Electrical Engineer.",
    name: "Muhammad Junaid",
    title: "Air University",
    image: junaid
  },
  {
    text: "As an intern at Infinity Tech Labs, I had the unique opportunity to immerse myself inthe forefront of Industry 4.0 technologies, bridging the gap between academic research and practical industrial solutions. This experience sharpened my problem-solving abilities and gave me a head start inentrepreneurship, fostering a mindsetfor innovation and self-driven growth in the evolving tech landscape.",
    name: "Amna Qizilbash",
    title: "Institute of Space Technology",
    image: amna 
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
