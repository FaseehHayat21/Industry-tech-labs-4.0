import React from 'react'
import SolveWithUs from '../component/LandingPage/SolveWithUs/SolveWithUs'
import Applications from '../component/LandingPage/Application/Applications'
import WhoWeAre from '../component/LandingPage/WhoWeAre/WhoWeAre'
import Business from '../component/LandingPage/Business/Business'
import "./LandingPage.css"
import FeaturedPartners from '../component/LandingPage/FeaturedPartners/FeaturedPartners'
import Testimonials from '../component/LandingPage/Testimonials/Testimonials'
import ContactUs from '../component/LandingPage/ContactUs/ContactUs'
import Footer from '../component/LandingPage/footer/Footer'
import WhatWeOffer from '../component/LandingPage/WhatWeOffer/WhatWeOffer'
import TrackSlider from '../component/LandingPage/TracksSlider/TrackSlider'
import About from '../component/LandingPage/About/About'
export default function LandingPage() {
  return (
   
    <>
    <div className='landing'>

    </div>
    <About/>
     <SolveWithUs/>
     <TrackSlider/>
        <WhoWeAre/>
        {/* <Applications/> */}
        <WhatWeOffer/>
        <Testimonials/>
        <FeaturedPartners/>
        {/* <Business/> */}
  
   </>
  )
}
