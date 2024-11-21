import React, { useEffect } from "react";
import "./Team.css";
import Aos from "aos";
import "aos/dist/aos.css";
import sirazhar from "../../../assets/sirazhar.jpg";
import sirmansoor from "../../../assets/sirmansoor.jpg";
import { Link } from "react-router-dom";

export default function Team() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <>
      <section className="founders-section">
        <div className="banner">
          <h1>Meet Our Team</h1>
        </div>
      </section>
      <section className="team" id="team">
        <div className="container-1">
          <div className="team-members" data-aos="fade-up">
            <div className="team-member">
              <img src={sirazhar} alt="Founder" />

              <Link to="/about/azhar" className="more-button">More about me</Link>
              <h3>Azhar Naeem</h3>
              <p>(Founder)</p>
              <div className="contact-info">
                <p>0333-1234567</p>
                <a href="mailto:azhar.naeem@example.com" className="email">
                  azhar.naeem@example.com
                </a>
              </div>

            </div>
            <div className="team-member">
              <img src={sirmansoor} alt="Co-Founder" />
              <Link to="/about/mansoor" className="more-button">More about me</Link>
              <h3>Mansoor Ahsan</h3>
              <p>(Co-Founder)</p>
              <div className="contact-info">
                <p>0300-1234567</p>
                <a href="mailto:mansoor.ahsan@example.com" className="email">
                  mansoorahsan@example.com
                </a>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
}
