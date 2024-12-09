// import React from 'react'
// import imageac from "../../../assets/1.png"
// import imageco from "../../../assets/2.png"
// import imagego from "../../../assets/3.png"
// import "./WhatWeOffer.css"
// export default function WhatWeOffer() {
//   return (
//   <>
//     <div className="whatweoffer">
//         <div className="whatweofferheading">
//             <h1>WHAT WE OFFER</h1>
//         </div>
//         <div className="whatweoffercard">
//             <div className="whatweofferac">
//                 <img src={imageac} alt="" />
//                 <h3>CORPORATE</h3>
//                 <div className='whatweofferaclist'>
//                     <p><h5>∞ Incubation / Acceleration</h5></p>
//                     <p><h5>∞ Venture Funding</h5></p>
//                     <p><h5>∞ FYPs Support </h5></p>
//                     <p><h5>∞ Internships / Placements</h5></p>
//                     <p><h5>∞ COEs / Sponsored Labs </h5></p>
//                     <p><h5>∞ Hackathons / Events <br /></h5></p>
//                     <p><h5>∞ Key Business Workshops</h5></p>
//                     </div>
//             </div>
//             <div className="whatweofferco">
//                 <img src={imageac} alt="" />
//                 <h2>CORPORATE</h2>
//                 <div className='whatweofferaclist'>
//                     <p><h5>∞ Corporate Innovation</h5></p>
//                     <p><h5>∞ Digital Transformation</h5></p>
//                     <p><h5>∞ Talent Placements</h5></p>
//                     <p><h5>∞ Skills Development</h5></p>
//                     <p><h5>∞ Startup Meets / Demos <br /> Hackathons / Events</h5></p>
//                     <p><h5>∞ Key Business Workshops</h5></p>
//                     <p><h5>∞ Cross-Vertical Network Immersion</h5></p>
//                     </div>
//             </div>
//             <div className="whatweoffergo">
//                 <img src={imageac} alt="" />
//                 <h2>GOVERNMENT</h2>
//                 <div className='whatweofferaclist'>
//                     <p><h5>∞ Digital Transformation </h5></p>
//                     <p><h5>∞ Growth via Tech Founders</h5></p>
//                     <p><h5>∞ Skills Dev & Job Creation </h5></p>
//                     <p><h5>∞ Technology Deletion & Dev</h5></p>
//                     <p><h5>∞ Technology linkage with SDGs</h5></p>
//                     <p><h5>∞ Key Business Workshops</h5></p>
//                     <p><h5>∞ Cross-Vertical Network </h5></p>
//                     </div>
//             </div>
//         </div>
//     </div>
//   </>
//   )
// }



import React from "react";
import "./Whatweoffer.css";
 import imageac from "../../../assets/acc.png"
import imageco from "../../../assets/cor.png"
import imagego from "../../../assets/gov.png"
const Whatweoffer = () => {
  const cards = [
    {
      image: imageac,
      heading: "ACADEMIA",
      items: ["∞ Incubation / Acceleration", "∞ Venture Funding", "∞ FYPs Support", "∞ Internships / Placements", "∞ COEs / Sponsored Labs", "∞ Hackathons / Events ", "∞ Key Business Workshops", "∞ Key Business Workshops"],
    },
    {
      image: imageco,
      heading: "CORPORATE",
      items: ["∞ Corporate Innovation", "∞ Digital Transformation", "∞ Talent Placements", "∞ Skills Development", "∞ Startup Meets / Demos <br /> Hackathons / Events","∞ Cross-Vertical Network Immersion" ],
    },
    {
      image: imagego,
      heading: "GOVERNMENT",
      items: ["∞ Digital Transformation", "∞ Growth via Tech Founders", "∞ Skills Dev & Job Creation ", "∞ Technology Deletion & Dev", "∞ Technology linkage with SDGs", "∞ Key Business Workshops", "∞ Cross-Vertical Network"],
    },
  ];

  return (
    <div className="card-container">
        <div>
        <h2 className="whatweofferheading">WHAT WE OFFER</h2>
          </div>
    
    
            <div className="cardsss">
            {cards.map((card, index) => (
              <div className="card" key={index}>
                <img src={card.image} alt={card.heading} className="card-image" />
                <h3 className="card-heading">{card.heading}</h3>
                <ul className="card-list">
                  {card.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            </div>
    </div>
  );
};

export default Whatweoffer;
