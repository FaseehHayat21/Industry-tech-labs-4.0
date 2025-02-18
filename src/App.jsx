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
import Header from './component/LandingPage/Header/Header';
import Footer from './component/LandingPage/footer/Footer';

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
import CyberSecurity from "./component/Verticals/CyberSecurity/CyberSecurity"
import BioTechnology from "./component/Verticals/BioTechnology/BioTechnology"
import ArAndVr from "./component/Verticals/ARandVR/ArAndVr"
import AiandBigData from "./component/Verticals/AIandBigData/AiandBigData"
import Corporate from './component/Collaborations/Corporate/Corporate';
import Government from './component/Collaborations/Government/Government';
import Universities from './component/Collaborations/Universities/Universities';
import AboutUs from './component/AboutUs/AboutUs/AboutsUs';
import Diversity from './component/AboutUs/Diversity/Diversity';
import Tprinting from './component/Verticals/Tprinting/Tprinting';
import SpecializedCourses from './component/Programs/SpecializedCourses/SpecializedCourses'
import InnovationBlog from './component/AboutUs/InnovationBlog/InnovationBlog';
import BlogPost from './component/AboutUs/InnovationBlog/Blog/Blogpost';
import Tprintings from './component/Programs/SpecializedCourses/Courses/Tprintings/Tprintings';
import IncubationProgram from './component/Programs/IncubationProgram/IncubationProgram';
import EarlyStage from './component/Programs/EarlyStageAccelrators/EarlyStage';
import BootcampProgram from './component/Programs/BootcampProgram/BootcampProgram';
import DataScienceandAI from './component/Programs/SpecializedCourses/Courses/DataScienceandAI/DataScienceandAI';
import GameDevelopment from './component/Programs/SpecializedCourses/Courses/GameDevelopment/GameDevelopment';
import RoboticsandUAVs from './component/Programs/SpecializedCourses/Courses/RoboticsandUAVs/RoboticsandUAVs';
import CyberSecurityy from './component/Programs/SpecializedCourses/Courses/CyberSecurity/CyberSecurity';
import BioTechandHealthTech from './component/Programs/SpecializedCourses/Courses/BioTechandHealthTech/BioTechandHealthTech';
import DroneFlying from './component/Programs/SpecializedCourses/Courses/DroneFlying/DroneFlying';
import SevenReasonsWhy from './component/AboutUs/SevenReasonsWhy/SevenReasonsWhy';
import Team from './component/AboutUs/Team/Team';
import ContactUs from './component/LandingPage/ContactUs/ContactUs';
import ScrollToTop from './ScrollToTop';
import Announcement from './component/Programs/Announcement/Announcement'

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="header">
        <Header />
      </div>
      <Routes>
        {/* Landing Page ROUTES */}
        <Route path="/" element={<LandingPage />} />
        {/* VERTICAL ROUTES */}
        <Route path="/founders" element={<Founders />} />
        <Route path="/Experts" element={<Expert />} />
        <Route path="/Investors" element={<Investors />} />
        <Route path="/join" element={<Joins />} />
        {/* VERTICAL ROUTES */}
        <Route path="/AiandBigData" element={<AiandBigData />} />
        <Route path="/ArAndVr" element={<ArAndVr />} />
        <Route path="/climateTech" element={<ClimateTech />} />
        <Route path="/dualuse" element={<DualUse />} />
        <Route path="/SustainableFood" element={<SustainableFood />} />
        <Route path="/HealthCare" element={<HealthCare />} />
        <Route path="/ThreeDprinting" element={<Tprinting />} />
        <Route path="/Robotics" element={<Robotics />} />
        <Route path="/CyberSecurity" element={<CyberSecurity />} />
        <Route path="/BioTechnology" element={<BioTechnology />} />
        {/* Collaborations */}
        <Route path="/Corporate" element={<Corporate />} />
        <Route path="/Government" element={<Government />} />
        <Route path="/Universities" element={<Universities />} />

        {/* AboutUs */}
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Diversity" element={<Diversity />} />
        <Route path="/InnovationBlog" element={<InnovationBlog />} />
        <Route path="/SevenReasonsWhy" element={<SevenReasonsWhy />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        {/*Programs*/}
        <Route path="/SpecializedCourses" element={<SpecializedCourses />} />
        <Route path="/BootcampProgram" element={<BootcampProgram />} />
        <Route path="/EarlyStage" element={<EarlyStage />} />
        <Route path="/Incubation" element={<IncubationProgram />} />
        <Route path="/Announcement" element={<Announcement />} />



        {/*COURSES*/}
        <Route path="/Tprintings" element={<Tprintings />} />
        <Route path="/DataScienceandAI" element={<DataScienceandAI />} />
        <Route path="/GameDevelopment" element={<GameDevelopment />} />
        <Route path="/RoboticsandUAVs" element={<RoboticsandUAVs />} />
        <Route path="/CyberSecurityy" element={<CyberSecurityy />} />
        <Route path="/BioTechandHealthTech" element={<BioTechandHealthTech />} />
        <Route path="/DroneFlying" element={<DroneFlying />} />

      </Routes>
      <div className="contactus">
        <ContactUs />
        </div>

     
      <div className="footer">
        <Footer />
        </div>

      

    </Router>

  );
}

export default App;
