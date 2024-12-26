import React, {useEffect} from 'react';
import './WhoWeAre.css';
import largeImage from "../../../assets/whoweare2.png"; // Replace with your actual image path
import Aos from "aos"
import "aos/dist/aos.css"
const WhoWeAre = () => {
    useEffect(()=> {
              Aos.init({duration: 2000});
          })
    return (
        <div className="who-is-mass-challenge">
            <div className='heading-who-div' data-aos="fade-right">
            <h2 className='heading-who'>ITL  at  Work</h2>
            </div>
            <div className="image-container" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <img src={largeImage} alt="MassChallenge" />
            </div>
            <div className="description-who" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                {/* <p>
                Infinity Tech Labs bridges startups, experts, corporations, and communities to foster growth and revolutionize industries. Our innovative approach empowers high-impact startups with bold, disruptive ideas, especially from unconventional backgrounds.
                </p>
                <p>
                    We provide diverse <strong>programs, accelerators, and partnerships</strong> year-round for those who share our passion for transformative innovation. Discover more about our journey!
                </p> */}
               {/* <p> We are an <i> <strong>Integrated National Network</strong></i> of <i> <b>Innovation Spaces & SMEs</b></i> bonded with Academia & Industry. <br/>
                We <b> <u>Connect</u> Startups, Experts, Corporates, Govt and Communities to grow and transform.</b> <br/>
                We <b> <u>Accelerate</u> high-impact startups</b> with bold, disruptive ideas linked to the Industry 4.0 Technologies.<br/>
                </p> */}
            </div>
        </div>
    );
};

export default WhoWeAre;
