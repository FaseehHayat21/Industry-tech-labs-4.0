import React from 'react'
import SolveWithUs from '../component/SolveWithUs/SolveWithUs'
import Applications from '../component/Application/Applications'
import WhoWeAre from '../component/WhoWeAre/WhoWeAre'
import Business from '../component/Business/Business'
import "./LandingPage.css"
import FeaturedPartners from '../component/FeaturedPartners/FeaturedPartners'
import Testimonials from '../component/Testimonials/Testimonials'
import ContactUs from '../component/ContactUs/ContactUs'
export default function LandingPage() {
  return (
   
    <>
    <div className='landing'>

    </div>
     <SolveWithUs/>
        <WhoWeAre/>
        <Applications/>
        <Testimonials/>
        <FeaturedPartners/>
        <Business/>
        <ContactUs/>
   </>
  )
}
