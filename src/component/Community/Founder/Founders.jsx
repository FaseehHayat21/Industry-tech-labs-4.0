import React from 'react';
import './Founders.css';
export default function Founders() {
  return (
    <section className="founders-section">
      <div className="banner">
        <h1>Founders</h1>
      </div>
      <div className="content">
        <p> <strong className='paragraph-heading'>Infinity Tech Labs</strong> support founders disrupting the status quo and create sustainable change – whether they fit the mold or break it.
        </p>
        <p>
        As a founder, it’s important to be strategic about where to spend your time and energy. Our vibrant network offers access to mentorship and resources that support founders through every stage of the startup lifecycle.
        </p>

      </div>

      <div className="content">
        <h1><strong>Why ITL?</strong> </h1>
        <p> Our evidence-based, outcome-focused acceleration model demonstrates that when founders are supported by a community-driven network, they scale their startups more rapidly and profitably.
          </p>
        <p>We support innovators from all backgrounds to create breakthrough change and accelerate their business without requiring financial stake in the success of the organization.
          </p>

      </div>
      {/* <div className="content">
          <h1><strong>The ITL Advantage</strong> </h1>
          <p>Infinity Tech Labs offers the most efficient pathway to connect startups, experts, corporations, and communities to grow and transform businesses and economies. For founders we have special offerings .
            </p>
            <ul className='links-program'>
              <li>•	Help entrepreneurs identify goals and key initiatives  </li>
              <li>•	Provide access to a meaningful network of experts </li>
              <li>•	Connect entrepreneurs with a deep peer network  </li>
              <li>•	Live seminars and workshops</li>
              <li>•	A digital curriculum library</li>
            </ul>
      </div> */}
      <div className="content-1">
      <div className="advantage-header">
        <h1 className="title"><strong>The ITL Advantage</strong></h1>
        <p className="descriptionss">
          Infinity Tech Labs offers the most efficient pathway to connect startups, experts, corporations, and communities to grow and transform businesses and economies. For founders, we have special offerings:
        </p>
      </div>
      <div className="advantage-content">
        <ul className="links-program">
          <li>
            <span className="icon">🚀</span> Help entrepreneurs identify goals and key initiatives
          </li>
          <li>
            <span className="icon">🤝</span> Provide access to a meaningful network of experts
          </li>
          <li>
            <span className="icon">🌐</span> Connect entrepreneurs with a deep peer network
          </li>
          <li>
            <span className="icon">🎓</span> Live seminars and workshops
          </li>
          <li>
            <span className="icon">📚</span> A digital curriculum library
          </li>
        </ul>
      </div>
    </div>

       
    </section>
  );
}
