import React from 'react';
import './Founders.css';
import Business from '../../LandingPage/Business/Business';

export default function Founders() {
  return (
    <section className="founders-section">
      <div className="banner">
        <h1>Founders</h1>
      </div>
      <div className="content">
        <p> <strong>Infinity Tech Labs</strong> empowers founders who challenge the norm and drive sustainable change, whether they follow traditional paths or forge their own. We fully support founders from diverse backgrounds with innovative ideas.
        </p>
        <p>
        As a founder, being strategic with your time and energy is crucial. Our vast network provides mentorship and resources to support founders at every stage of the startup journey.
        </p>

      </div>

      <div className="content">
        <h1><strong>Fueling Innovation and Transforming Ideas into Impact</strong> </h1>
        <p> At Infinity Tech Labs, we understand that every founder&#39;s journey is unique. That&#39;s why
            we offer tailored guidance and cutting-edge tools to turn bold visions into thriving
            ventures. From refining your business model to navigating market challenges, we stand
            by you with actionable insights and hands-on support. Our commitment goes beyond
            growth—we aim to create a ripple effect of positive change, empowering founders to
            shape industries and inspire communities.
          </p>

      </div>
      <div className="content">
          <h1><strong>Why Us?</strong> </h1>
          <p>Infinity Tech Labs is an innovative accelerator program that helps founders scale their
          startups quickly and profitably through a national, community-driven network. It supports
          innovators from all backgrounds to drive impactful change without taking a financial
          stake in their success.
            </p>
      </div>

       <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="events">
          <div className="event-card">
            {/*  <h3>Event 1</h3> */} 
            {/* <p><strong>Date:</strong> November 21, 2024</p> */}
            {/* <p><strong>Location:</strong> 10 Fan Pier Blvd, Boston, MA 02210</p> */}
            <p><strong>Coming Soon!</strong></p>
            {/*<a href="#">LEARN MORE</a> */} 
          </div>
          <div className="event-card">
            {/*  <h3>Event 2</h3> */} 
            {/* <p><strong>Date:</strong> November 19, 2024</p> */}
            {/* <p><strong>Location:</strong> 10 Fan Pier Blvd, Boston, MA 02210</p> */}
            <p><strong>Coming Soon!</strong></p>
           {/*<a href="#">LEARN MORE</a> */} 
          </div>
          <div className="event-card">
           {/*  <h3>Event 3</h3> */} 
            {/* <p><strong>Date:</strong> November 12, 2024</p> */}
            {/* <p><strong>Location:</strong> 10 Fan Pier Blvd, Boston, MA 02210</p> */}
            <p><strong>Coming Soon!</strong></p>
             {/*<a href="#">LEARN MORE</a> */} 
          </div>
        </div>
        <div className="view-all">
          <a href="#">VIEW ALL EVENTS</a>
        </div>
      </div>
      <Business/>
    </section>
  );
}
