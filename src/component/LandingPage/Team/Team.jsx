import React, { useEffect} from 'react'
import "./Team.css"
import Aos from "aos"
import "aos/dist/aos.css"
import sirazhar from "../../../assets/sirazhar.jpg"
import sirmansoor from "../../../assets/sirmansoor.jpg"
export default function Team() {
  useEffect(()=> {
    Aos.init({duration: 1000});
})

  return (
    <section className="team" id="team">
    <div className="container-1">
      <h2>Meet Our Team</h2>
      <div className="team-members " data-aos="fade-up">
        <div className="team-member">
          <img src={sirazhar} alt="Founder" />
          <h3>Azhar Naeem </h3>
          <p>(Founder)</p>
        </div>
        <div className="team-member">
          <img src={sirmansoor} alt="Co-Founder" />
          <h3>Mansoor Ahsan </h3>
          <p>(Co-Founder)</p>
        </div>
        
      </div>
    </div>
  </section>
  )
}
