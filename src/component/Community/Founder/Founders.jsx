import React from 'react';
import './Founders.css';
export default function Founders() {
  return (
    <section className="founders-section">
      <div className="banner">
        <h1>Founders</h1>
      </div>
      <div className="content">
        <p> <strong>Infinity Labs</strong> supports founders disrupting the status quo and create sustainable change – whether they fit the mold or break it.
        </p>
        <p>
        As a founder, it’s important to be strategic about where to spend your time and energy. Our vibrant network offers access to mentorship and resources that support founders through every stage of the startup lifecycle.
        </p>

      </div>

      <div className="content">
        <h1><strong>Why Infinity Labs?</strong> </h1>
        <p> Infinity Labs evidence-based, outcome-focused acceleration model demonstrates that when founders are supported by a global community-driven network, they scale their startups more rapidly and profitably.
          </p>
        <p>Infinity Labs supports innovators from all backgrounds to create breakthrough change and accelerate their business without requiring financial stake in the success of the organization.
          </p>

      </div>
      <div className="content">
          <h1><strong>The Infinity Labs Advantage</strong> </h1>
          <p>Infinity Tech Labs offers the most efficient pathway to connect startups, experts, corporations, and communities to grow and transform businesses and economies. For founders we have special offerings .
            </p>
            <ul className='links-program'>
              <li>•	Help entrepreneurs identify goals and key initiatives  </li>
              <li>•	Provide access to a meaningful network of experts </li>
              <li>•	Connect entrepreneurs with a deep peer network  </li>
              <li>•	Live seminars and workshops</li>
              <li>•	A digital curriculum library</li>
            </ul>
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
      {/* <Business/> */}
    </section>
  );
}
