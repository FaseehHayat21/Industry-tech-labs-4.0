import React from 'react';
import './WhoWeAre.css';
import largeImage from "../../../assets/whoweare2.png"; // Replace with your actual image path

const WhoWeAre = () => {
    return (
        <div className="who-is-mass-challenge">
            <div className='heading-who-div'>
            <h2 className='heading-who'>What We Do</h2>
            </div>
            <div className="image-container">
                <img src={largeImage} alt="MassChallenge" />
            </div>
            <div className="description-who">
                {/* <p>
                Infinity Tech Labs bridges startups, experts, corporations, and communities to foster growth and revolutionize industries. Our innovative approach empowers high-impact startups with bold, disruptive ideas, especially from unconventional backgrounds.
                </p>
                <p>
                    We provide diverse <strong>programs, accelerators, and partnerships</strong> year-round for those who share our passion for transformative innovation. Discover more about our journey!
                </p> */}
               <p> We are an <i> <strong>Integrated National Network</strong></i> of <i> <b>Innovation Spaces & SMEs</b></i> bonded with Academia & Industry. <br/>
                We <b> <u>Connect</u> Startups, Experts, Corporates, Govt and Communities to grow and transform.</b> <br/>
                We <b> <u>Accelerate</u> high-impact startups</b> with bold, disruptive ideas linked to the Industry 4.0 Technologies.<br/>
                </p>
            </div>
        </div>
    );
};

export default WhoWeAre;
