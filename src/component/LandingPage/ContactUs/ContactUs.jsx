import React, { useRef, useState } from 'react';
import "./ContactUs.css";
// import contactlogo from "../../assets/mail.png";
// import emailjs from '@emailjs/browser';
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
export default function ContactUs() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('', 'template_zgn0xni', form.current, {
        publicKey: 'nXpabiBuB4ZKuUyhy',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          form.current.reset(); // Clear the form fields
          setStatusMessage('Email sent successfully!');
          setTimeout(() => setStatusMessage(''), 3000); // Clear message after 3 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatusMessage('Failed to send email.');
          setTimeout(() => setStatusMessage(''), 3000); // Clear message after 3 seconds
        },
      );
  };

  return (
    <>
      <div className="container-c">
        <div className='heading-contact'>
          <img className='contact-logo' src={""} alt="" />
          <h1 className='heading-c'>Get In Touch </h1>
        </div>
        <div className="content-c">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Website</div>
              <div className="text-one"><a className='website-link' href="www.infinitytechlabs.org"><FaLocationDot/>www.infinitytechlabs.org</a></div>
              <div className="text-two"></div>
            </div>
           
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="website-link">info@infinitytechlabs.org</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text"></div>
            {/* <p className='text'>If you have any work for me or any types of queries related to my skills, you can send me a message from here. It's my pleasure to help you.</p> */}
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-box">
                <input type="text" name="to_name" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <input type="email" name="to_email" placeholder="Enter your email" required />
              </div>
              <div className="input-box message-box">
                <textarea name="message" placeholder="Enter your message" required></textarea>
              </div>
              <div className="contact-btn">
                <input className='contact-button' type="submit" value="Send" />
              </div>
            </form>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
