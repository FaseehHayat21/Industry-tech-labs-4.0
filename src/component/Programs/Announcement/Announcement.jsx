import React from 'react';
import './Announcement.css';
export default function Announcement() {
  return (
    <section className="founders-section">
      <div className="banner">
        <h1>Upcoming Events</h1>
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
