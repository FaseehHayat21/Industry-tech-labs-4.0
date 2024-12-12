import React from 'react';
import './AboutUs.css';
import video from "../../../assets/bg.mp4";
import image from "../../../assets/space.jpg"
export default function AboutUs() {
  return (
    <section className="founders-section">
      <div className="banner">
        <h1>About Us</h1>
      </div>
      
      <div className="content">
        <div className="top-content">
         <div className="text-top-content">
            <h1><strong>What is Infinity Tech Labs</strong></h1>
        <p><strong>Infinity Tech Labs</strong> connects startups, experts, corporations, and communities to
            foster growth and drive transformative change in businesses and economies. We
            believe that entrepreneurship is a powerful force for progress, tackling humanity’s
            biggest challenges, creating opportunities, and generating jobs that strengthen the
            economy. By working across sectors, we drive toward a more resilient future through
            collaborative innovation and support all founders, whether they align with or redefine
            the traditional venture model.
        </p>
         </div>
          <div className="image-top">
          <img src={image} alt="" />
          </div>
        </div>
      
        
        <h2><strong>About</strong></h2>
        <p>We are the Change – the dreamers, doers, thinkers, and leaders committed to building a just and
           sustainable society. We’re united by a common purpose: build a regenerative economy where business and profit serve our
           people and the planet.</p>

        <h2><strong>Infinity Team in Action</strong></h2>
        <p>We’re a nationwide network accelerating inclusive and sustainable innovation at scale. Built on trust,
           courage, and collaboration, we create an ecosystem for positive change. Through meaningful
           connections, we focus on addressing pressing social and environmental challenges in our local
           communities and beyond. Join us on this journey to shape a brighter and more hopeful future for all.
           The time is now. The way is together.</p>

        <h2><strong>Our Program Benefits Include:</strong></h2>
        <ul>
          <li><strong>(a) Unparalleled Mentorship</strong> - Business leaders, seasoned operators, and industry executives will help craft your company’s vision through specific, measurable, realistic, and time-bound goals.</li>
          <li><strong>(b) Access to Leading VCs and Investors</strong> - Investment mentors will guide you in crystallizing your fundraising strategy, help you make connections with the investment community, and may even invest in your startup.</li>
          <li><strong>(c) Guidance from Leading Scientists</strong> - Prominent scientists and researchers across a myriad of verticals will help you mold your technology development strategy.</li>
          <li><strong>(d) Business Development</strong> - ITL works closely with founders to fine-tune business strategies and can help develop financial models and explore potential markets.</li>
          <li><strong>(e) ITL Team Guidance</strong> - ITL’s expert team will keep you on track to accomplish your goals by optimizing your access to mentors, experts, and other resources throughout the program.</li>
          <li><strong>(f) Corporate Services</strong> - ITL’s corporate partners donate generously in-kind legal, financial, and technological services to participating startups.</li>
          <li><strong>(g) Mentorship from Business Leaders and Scientists</strong> - Infinity Tech Labs’ mentors are business leaders, investors, and scientists drawn from thriving business and academic institutions and beyond. Our mentors commit substantial time to provide startups with the best advice and connections to maximize their chances of success.</li>
        </ul>

        <h2><strong>ITL Internal Advisory Board</strong></h2>
        <p>Our advisory board consists of experts who provide valuable insights and guidance to the startups.</p>

        <h2><strong>Our Values</strong></h2>
        <ul>
          <li><strong>Founder Friendly</strong> - We are committed to providing programming in the long-term interests of entrepreneurs. We do not take equity or fees from startups. Each core aspect of the program is in the best interests of founders before, during, and after the program.</li>
          <li><strong>Inclusivity</strong> - We are committed to building an inclusive, equitable, and just community now and for our future. We will provide an environment that is free of bias, prejudice, discrimination, and harassment.</li>
          <li><strong>Performance Orientation</strong> - We are committed to (a) selecting founders with extraordinarily bold, new ideas, (b) providing intimate access to outstanding mentors, and (c) eliciting maximum effort from mentors and founders to accelerate the societal impact of breakthrough science.</li>
        </ul>

        <h2><strong>ITL Team</strong></h2>
        <p>The ITL Team brings their unique professional backgrounds and expertise to support startups throughout the program.</p>
        {/*  */}
        <div className="project-showcase">
          <div className="heading-project">
            <h1  className="heading-project">PROJECTS SHOWCASE</h1>
          </div>
          <div className="project-1" >
            <div className="project-1-image">
              <img src={image} alt=""  className="project-1-image-1"/>
            </div>
            <div className="project-1-content">
              <h1>Our Program benefits include:</h1>
              <p>• Developed a Blog Application using the MERN stack.
                <br/>  • Implemented full CRUD operations for blog posts.
                <br/>  • Created advanced search and filter functionalities.
                <br/>  • Managed front-end and back-end development for seamless integration</p>
            
            </div>
          </div>
      

      

      {/* MAIN DIV ENDS HERE */}
    </div>



        {/*  */}
        <video className='video-about' width="100%" height="auto" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
