// ContactPage.js
import React from 'react';
import './ContactPage.css'; // Importing the CSS file

function ContactPage() {
  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-title">CONTACT US</h1>
      <div className="contact-content">
        <div className="contact-info">
          <div>
            <span className="icon">📞</span>
            <p>Call Us</p>
            <p>1 (234) 567-891, 1 (234) 987-654</p>
          </div>
          <div>
            <span className="icon">📍</span>
            <p>Location</p>
            <p>121 Rock Street, 21 Avenue, New York, NY 92103-9000</p>
          </div>
          <div>
            <span className="icon">⏰</span>
            <p>Business Hours</p>
            <p>Mon – Fri .... 10 am - 8 pm, Sat, Sun ....... Closed</p>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <input type="email" placeholder="Enter a valid email address" />
            <input type="text" placeholder="Enter your Name" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Address" />
          </div>
          <div className="form-group">
            <textarea placeholder="Enter your message"></textarea>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
