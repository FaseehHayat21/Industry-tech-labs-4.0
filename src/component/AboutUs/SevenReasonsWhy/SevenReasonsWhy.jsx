import React from "react";
import "./SevenReasonsWhy.css";
import TeamCollab from "../../../assets/TeamCollab2.jpg";

const SevenReasonsWhy = () => {
  return (
    <section className="founders-section">
      <div className="banner">
        <h1>Seven Reasons Why</h1>
      </div>

      <div className="full-screen-layout">
        {/* Image Section */}
        <div className="image">
          <img src={TeamCollab} alt="Team Collaboration" className="team-image" />
        </div>

        {/* Text Section */}
        <div className="text-container">
          <section className="text-section">
            <h1 className="main-title">
              7 reasons why it’s <span className="highlight">the perfect fit💙

              </span>
            </h1>
            <p className="description">
              Becoming a part of the Infinity Tech Labs (ITL) connects you to a
              rich pool of knowledge and a dynamic network of professionals. By
              sharing costs and risks, you gain access to cutting-edge insights
              and expertise that you can apply directly to your organization.
              This collaborative environment helps you drive innovation and
              fast-track the growth of your business.
            </p>
          </section>
        </div>
      </div>


      <p className="sub-description">
        Here are 7 reasons why our partners love collaborating with us.
      </p>

      {/* Reasons List */}
      <section className="reasons-list">
        <div className="reason">
          <h2 className="reason-title">1. We Harness the Strength of Collaboration</h2>
          <p className="reason-description">
            The transition within the process industry is becoming increasingly complex, making collaboration essential. It’s no longer just about individual process innovations but about system-wide innovation and closing the chain together. At ITL, we foster a trust-based environment that brings together stakeholders, facilitates the sharing of knowledge and expertise, and accelerates development. By working together, we help minimize risks while maximizing outcomes.
          </p>
        </div>

        <div className="reason">
          <h2 className="reason-title">2. We Operate Independently</h2>
          <p className="reason-description">
            ITL serves as a neutral and reliable partner for the process industry, offering a safe space where collaborations can flourish naturally. Our independence ensures that all parties can work together without bias, fostering trust and transparency.
          </p>
        </div>

        <div className="reason">
          <h2 className="reason-title">3. We See Beyond Boundaries</h2>
          <p className="reason-description">
            Transforming value chains is vital for building a circular economy, but it’s challenging to see the bigger picture when you’re deeply involved. This is where ITL steps in. We specialize in visualizing the larger perspective. By developing data-driven scenarios, we create strategies that benefit all players in the field, helping the entire system move forward.
          </p>
        </div>

        <div className="reason">
          <h2 className="reason-title">4. We Propel Your Path to Sustainability</h2>
          <p className="reason-description">
            At ITL, we focus on tangible progress. We design sustainability programs in partnership with industry leaders, connect the right people and organizations, and initiate projects that drive a more sustainable process industry. We see ourselves as matchmakers, bridging the gap between brilliant ideas and pressing needs.
          </p>
        </div>

        <div className="reason">
          <h2 className="reason-title">5. We Prioritize the Revenue Model</h2>
          <p className="reason-description">
            Our belief is that companies can achieve greater success through open innovation. Open innovation encourages businesses to exchange practical experiences and R&D ideas with each other, rather than working in isolation. The business model remains central, growing stronger rather than being compromised. ITL is shaping perspectives for 2030, with an eye on long-term sustainability through 2050.
          </p>
        </div>

        <div className="reason">
          <h2 className="reason-title">6. We Motivate</h2>
          <p className="reason-description">
            We actively share our knowledge through interviews, reports, whitepapers, expert events, and webinars. Our business is driven by people—our own experts and our wider network, connecting peers across industries. We proactively identify and communicate available innovation opportunities for you. We ensure that key results are communicated widely so that everyone can benefit from the insights. And we seize every opportunity to demonstrate the impact we're making throughout Pakistan.
          </p>
        </div>

        <div className="reason">
          <h2 className="reason-title">7. The Moment Is Here: Everything Has Fallen Into Place</h2>
          <p className="reason-description">
            In 2022, various challenges converged: the nitrogen crisis, soaring energy prices, and the unsettling shift in raw materials. The war in Ukraine disrupted international production and supply chains, exacerbating the crisis. The pressure on systems has been immense, radically altering the playing field. This is part of the transitional shock to a new economy. Now, more than ever, it's crucial to focus on our goals and collaborate to overcome these challenges.
          </p>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-us">
        <h2>Join Us</h2>
        <p>
          Let’s connect and explore how we can fast-track your sustainability journey. Reach out to our team of experts and feel free to connect!
        </p>
      </section>
    </section>
  );
};

export default SevenReasonsWhy;
