import React, {useEffect} from 'react'
import './Home.css'
import image from "../../assets/bg.jpg"
import video from "../../assets/bg.mp4"
import Aos from "aos"
import "aos/dist/aos.css"
export default function Home() {
    useEffect(()=> {
      Aos.init({duration: 1000});
  })
 
  return (
    <>
     <section className="hero" id="home" >
     <div className="background-video">
       <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
     </div>
      <div className="container " data-aos="fade-right">
        <div className="hero-text">
          <h1>INFINITY LAB</h1>
          <p>At CITE, we are dedicated to pushing the frontiers of knowledge in Disruptive Technologies of 4th Industrial Revolution for growth of Tech Entrepreneurship Eco System </p>
          <a href="#services" className="btn-primary">Explore Services</a>
        </div>
        
      </div>
    </section>
    
    </>
  )
}