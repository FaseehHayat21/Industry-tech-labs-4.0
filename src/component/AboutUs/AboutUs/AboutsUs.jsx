import React from 'react';
import './AboutUs.css';
import video from "../../../assets/bg.mp4"
export default function AboutUs() {
  return (
    <section className="founders-section">
      <div className="banner">
        <h1>About Us</h1>
      </div>
      <div className="content">
        <h1><strong>What is Infinity Tech Labs</strong></h1>
        <p><strong>Infinity Tech Labs</strong> connects startups, experts, corporations, and communities to
            foster growth and drive transformative change in businesses and economies. We
            believe that entrepreneurship is a powerful force for progress, tackling humanity’s
            biggest challenges, creating opportunities, and generating jobs that strengthen the
            economy. By working across sectors, we drive toward a more resilient future through
            collaborative innovation and support all founders, whether they align with or redefine
            the traditional venture model.
        </p>
        <video className='video-about' width="100%" height="auto" autoPlay loop muted >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>

      <div className="links">
        <a href="#experience">Founder Experience</a>
        <a href="#benefits">Benefits</a>
        <a href="#events">Upcoming Events</a>
        <a href="#faqs">FAQs</a>
      </div>
    </section>
  );
}
