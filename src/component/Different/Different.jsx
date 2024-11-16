import React from "react";
import "./Different.css";
import logo1 from "../../assets/1.png";
import logo2 from "../../assets/2.png";
import logo3 from "../../assets/3.png";
import logo4 from "../../assets/4.png";
export default function Different() {
  return (
    <section className="main-section">
      <h1 className="main-heading">WE ARE DIFFERENT</h1>

      <div className="sub-div-container">
        <div className="sub-div">
          <img src={logo1} alt="Capabilities" className="sub-div-image" />
          <h2>Our Leadership</h2>
          <p>
            Strong leadership guides and encourages knowledge sharing in pursuit
            of transformative technology development and breakthrough
            discoveries.
          </p>
        </div>

        <div className="sub-div">
          <img src={logo2} alt="Capabilities" className="sub-div-image" />
          <h2>Our Expertise</h2>
          <p>
            Our people are among the most inventive thinkers, driven by a
            pursuit of transformative innovation and a commitment to change
            Pakistan.
          </p>
        </div>

        <div className="sub-div">
          <img src={logo3} alt="Capabilities" className="sub-div-image" />
          <h2>Our Capabilities</h2>
          <p>
            Infinity Labs create sustainable Innovation Spaces ensuring teams
            work on the Disruptive Technologies in enabling environment.
          </p>
        </div>

        <div className="sub-div">
          <img src={logo4} alt="Capabilities" className="sub-div-image" />
          <h2>Our Mind Set</h2>
          <p>
            Our collaborative model is a winner engaging National and Global
            Research & Industry. <br /><span className="white-space">aifbasidbu iasbduiasbduiasbd uiasbduiasbui     dbasuidb</span>
          </p>
        </div>
      </div>
    </section>
  );
}
