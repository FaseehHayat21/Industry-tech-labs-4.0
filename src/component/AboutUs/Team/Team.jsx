// import React, { useEffect } from "react";
// import "./Team.css";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import sirazhar from "../../../assets/sirazhar.jpg";
// import sirmansoor from "../../../assets/sirmansoor.jpg";
// import { Link } from "react-router-dom";

// export default function Team() {
//   useEffect(() => {
//     Aos.init({ duration: 1000 });
//   });

//   return (
//     <>
//       <section className="founders-section">
//         <div className="banner">
//           <h1>Meet Our Team</h1>
//         </div>
//       </section>
//       <section className="team" id="team">
//         <div className="container-1">
//           <div className="team-members" data-aos="fade-up">
//             <div className="team-member">
//               <img src={sirazhar} alt="Founder" />

//               <Link to="/about/azhar" className="more-button">More about me</Link>
//               <h3>Azhar Naeem</h3>
//               <p>(Founder)</p>
//               <div className="contact-info">
//                 <p>0333-1234567</p>
//                 <a href="mailto:azhar.naeem@example.com" className="email">
//                   azhar.naeem@example.com
//                 </a>
//               </div>

//             </div>
//             <div className="team-member">
//               <img src={sirmansoor} alt="Co-Founder" />
//               <Link to="/about/mansoor" className="more-button">More about me</Link>
//               <h3>Mansoor Ahsan</h3>
//               <p>(Co-Founder)</p>
//               <div className="contact-info">
//                 <p>0300-1234567</p>
//                 <a href="mailto:mansoor.ahsan@example.com" className="email">
//                   mansoorahsan@example.com
//                 </a>
//               </div>


//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// import React, { useEffect } from "react";
// import "./Team.css";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { Link } from "react-router-dom";
// import sirazhar from "../../../assets/sirazhar.jpg";
// import sirmansoor from "../../../assets/sirmansoor.jpg";
// const teamMembers = [
//   {
//     name: "Azhar Naeem",
//     role: "Founder",
//     email: "azhar.naeem@infinitytechlab.org",
//     imgSrc: sirazhar,
//     link: "/about/azhar"
//   },
//   {
//     name: "Mansoor Ahsan",
//     role: "Co-Founder",
//     email: "mansoor.ahsan@infinitytechlab.org",
//     imgSrc:sirmansoor,
//     link: "/about/mansoor"
//   }
//   // You can add more team members here
// ];

// export default function Team() {
//   useEffect(() => {
//     Aos.init({ duration: 1000 });
//   }, []);

//   return (
//     <>
//       <section className="founders-section">
//         <div className="banner">
//           <h1>Meet Our Team</h1>
//         </div>
//       </section>
//       <section className="team" id="team">
//         <div className="container-1">
//           <div className="team-members" data-aos="fade-up">
//             {teamMembers.map((member, index) => (
//               <div className="team-member" key={index}>
//                 <img src={member.imgSrc} alt={member.name} />
//                 {/* <Link to={member.link} className="more-button">
//                   More about me
//                 </Link> */}
//                 <h3>{member.name}</h3>
//                 <p>({member.role})</p>
//                 <div className="contacts-info">
//                   <p>{member.phone}</p>
//                   <a href={`mailto:${member.email}`} className="email">
//                     {member.email}
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import "./Team.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import sirazhar from "../../../assets/sirazhar.jpg";
import sirmansoor from "../../../assets/sirmansoor.jpg";

const teamData = {
  foundingTeam: [
    {
      name: "Azhar Naeem",
      role: "Founder",
      email: "azhar.naeem@infinitytechlab.org",
      imgSrc: sirazhar,
      link: "/about/azhar"
    },
    {
      name: "Dr Mansoor Ahsan",
      role: "Co-Founder",
      email: "mansoor.ahsan@infinitytechlab.org",
      imgSrc: sirmansoor,
      link: "/about/mansoor"
    }
  ],
  technologyLeads: [
    {
      name: "John Doe",
      role: "Tech Lead",
      email: "john.doe@infinitytechlab.org",
      imgSrc: sirazhar,
      link: "/about/john"
    },
    {
      name: "Jane Smith",
      role: "Lead Engineer",
      email: "jane.smith@infinitytechlab.org",
      imgSrc: sirmansoor,
      link: "/about/jane"
    }
  ],
  mentorsAndExperts: [
    {
      name: "Michael Brown",
      role: "Industry Expert",
      email: "michael.brown@infinitytechlab.org",
      imgSrc: sirazhar,
      link: "/about/michael"
    },
    {
      name: "Emily Davis",
      role: "Mentor",
      email: "emily.davis@infinitytechlab.org",
      imgSrc: sirmansoor,
      link: "/about/emily"
    }
  ]
};

export default function Team() {
  const [activeTab, setActiveTab] = useState("foundingTeam");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const renderTeamMembers = (members) => {
    return members.map((member, index) => (
      <div className="team-member" key={index}>
        <img src={member.imgSrc} alt={member.name} />
        
        <h3>{member.name}</h3>
        <p>({member.role})</p>
        <div className="contacts-info">
          <a href={`mailto:${member.email}`} className="email">
            {member.email}
          </a>
        </div>
      </div>
    ));
  };

  return (
    <>
      <section className="founders-section">
        <div className="banner">
          <h1>Meet Our Team</h1>
        </div>
      </section>
      <section className="team" id="team">
        <div className="container-1">
          {/* Tab Navigation */}
          <div className="tab-navigation">
            {Object.keys(teamData).map((tab, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
              </button>
            ))}
            <div className="active-tab-indicator" style={{ left: `${Object.keys(teamData).indexOf(activeTab) * 33.33}%` }} />
          </div>
          {/* Team Member Cards */}
          <div className="team-members fade-in" data-aos="fade-up">
            {renderTeamMembers(teamData[activeTab])}
          </div>
        </div>
      </section>
    </>
  );
}
