// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Home from './component/home/Home';
// import TechnologyVerticals from './component/TechnologyVerticals/TechnologyVerticals';
// // import Navbar from './component/Navbar/Navbar';
// import Team from './component/Team/Team';
// import Header from './component/Header/Header';
// import VisionMission from './component/VissionMission/VisionMission';
// import "./App.css"
// import AboutUs from './component/AboutUs/AboutUs';
// import Different from './component/Different/Different';
// import AdvisoryandLeadership from './component/AdvisoryandLeadership/AdvisoryandLeadership';
// import ContactPage from './component/ContactPage/ContactPage';
// import Business from './component/Business/Business';
// import ContactUs from './component/ContactUs/ContactUs';
// import WhoWeAre from './component/WhoWeAre/WhoWeAre';
// import SolveWithUs from './component/SolveWithUs/SolveWithUs';
// import Footer from './component/footer/Footer';
// import Applications from './component/Application/Applications';
// import Testimonials from './component/Testimonials/Testimonials';
// import FeaturedPartners from './component/FeaturedPartners/FeaturedPartners';
// import Founders from './component/Founder/Founders';
// function App() {
//   return (
//    <>
//   <div>
//       <Header />
//       <Founders/>
//       <SolveWithUs/>
//       <WhoWeAre/>
//       <Business/>
//       <Applications/>
//       <Testimonials/>
//       <FeaturedPartners/>
//       {/* <Home /> */}
//       {/* <AboutUs /> */}
//       {/* <Different /> */}
//       <TechnologyVerticals />
//       <Team />
//       <AdvisoryandLeadership/>
//       <ContactUs/>
//       <Footer/> 
//     </div>
   
//    </>
    
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TechnologyVerticals from './component/TechnologyVerticals/TechnologyVerticals';
import Team from './component/Team/Team';
import Header from './component/Header/Header';
import Business from './component/Business/Business';
import ContactUs from './component/ContactUs/ContactUs';
import WhoWeAre from './component/WhoWeAre/WhoWeAre';
import SolveWithUs from './component/SolveWithUs/SolveWithUs';
import Footer from './component/footer/Footer';
import Applications from './component/Application/Applications';
import Testimonials from './component/Testimonials/Testimonials';
import FeaturedPartners from './component/FeaturedPartners/FeaturedPartners';
import Founders from './component/Community/Founder/Founders';
import "./App.css";
import LandingPage from './pages/LandingPage';
import Expert from './component/Community/Experts/Expert';
import Investors from './component/Community/Investors/Investors';
import Joins from './component/Community/Joins/Joins';
import ClimateTech from './component/Verticals/ClimateTech/ClimateTech';
import DualUse from './component/Verticals/DualUse/DualUse';
import SustainableFood from "./component/Verticals/SustainableFood/SustainableFood"
import HealthCare from "./component/Verticals/HealthCare/HealthCare"
import Robotics from "./component/Verticals/Robotics/Robotics"
import ThreeDPrinting from "./component/Verticals/ThreeDPrinting/ThreeDPrinting"
import CyberSecurity from "./component/Verticals/CyberSecurity/CyberSecurity"
import BioTechnology from "./component/Verticals/BioTechnology/BioTechnology"
import ArAndVr from "./component/Verticals/ARAndVR/ArAndVr"
import AiandBigData from "./component/Verticals/AIandBigData/AiandBigData"
function App() {
  return (
    <Router>
      <div className="header">
        <Header />
      </div>
      
      
      
     
     
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/solve-with-us" element={<SolveWithUs />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/business" element={<Business />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/featured-partners" element={<FeaturedPartners />} />
          <Route path="/technology-verticals" element={<TechnologyVerticals />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/Experts" element={<Expert />} />
          <Route path="/Investors" element={<Investors/>} />
          <Route path="/join" element={<Joins/>} />

          {/* VERTICAL ROUTES */}
          <Route path="/AiandBigData" element={<AiandBigData/>} />
          <Route path="/ArAndVr" element={<ArAndVr/>} />
          <Route path="/climateTech" element={<ClimateTech/>} />
          <Route path="/dualuse" element={<DualUse/>} />
          <Route path="/SustainableFood" element={<SustainableFood/>} />
          <Route path="/HealthCare" element={<HealthCare/>} />
          <Route path="/Robotics" element={<Robotics/>} />
          <Route path="/ThreeDPrinting" element={<ThreeDPrinting/>} />
          <Route path="/CyberSecurity" element={ <CyberSecurity/>} />
          <Route path="/BioTechnology" element={ <BioTechnology/>} />
          
    
        </Routes>
        </Router>
  );
}

export default App;
