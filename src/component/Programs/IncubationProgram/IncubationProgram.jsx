import React from 'react';
import './IncubationProgram.css';

export default function IncubationProgram() {
  return (
    <section className="founders-section">
      <div className="banner">
        <h1>Incubation Program</h1>
      </div>
      <div className="content">
        <p>The <strong>Incubation Program</strong> at Infinity Tech Labs is designed to provide University students and fresh graduates, with a comprehensive support system to help them grow and scale. Participants in this program receive personalized mentorship, access to essential resources, and strategic guidance to refine their products and services. Our goal is to create an environment where partakers can develop their ideas and business models while receiving expert advice from industry leaders.</p>
       
        <p>
        Additionally, our key geographical hubs that are strategically placed to maximize impact serve as pivotal locations where startups can access resources, collaborate with partners, and engage in regional opportunities. By connecting startups with local ecosystems and fostering cross-border collaborations, Infinity Tech Labs accelerates the growth of visionary companies on a global scale.
        </p>
      </div>
      <div className="content">
        <h1><strong>Applying for the Program</strong></h1>
        <p>ITL uses a competition model to select our startups. Prospective ITL startups submit application(s) for the ITL program(s) they would like to join. After submitting the application, startups will participate in one or two rounds of judging. At the end of these judging rounds, the highest-impact and highest-potential startups are invited to participate in the program as Finalists.
        </p>
      </div>
      <div className="content">
        <h1><strong>How to apply</strong></h1>
        <ul className='links-program'> 
            <li>• Sign up at <a href="" target='_blank'>https://bootcamp.infinitytechlabs.org</a> by creating your founder profile</li>
            <li>• Set up your startup profile</li>
            <li>• Complete and submit your application</li>
            <li>• Every applicant receives feedback from expert judges on their online applications.</li>
            <li>• All finalists receive detailed feedback from expert judges on their in-person pitches.</li>
        </ul>
        
      </div>
    
    </section>
  );
}
