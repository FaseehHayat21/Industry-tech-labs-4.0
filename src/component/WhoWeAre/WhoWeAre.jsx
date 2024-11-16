import React from 'react';
import './WhoWeAre.css';
import largeImage from "../../assets/whoweare.png"; // Replace with your actual image path

const WhoWeAre = () => {
    return (
        <div className="who-is-mass-challenge">
            <div className='heading-who-div'>
            <h2 className='heading-who'>Who Is Infinity Tech Labs?</h2>
            </div>
            <div className="image-container">
                <img src={largeImage} alt="MassChallenge" />
            </div>
            <div className="description">
                <p>
                Infinity Tech Labs bridges startups, experts, corporations, and communities to foster growth and revolutionize industries. Our innovative approach empowers high-impact startups with bold, disruptive ideas, especially from unconventional backgrounds.
                </p>
                <p>
                    We provide diverse <strong>programs, accelerators, and partnerships</strong> year-round for those who share our passion for transformative innovation. Discover more about our journey!
                </p>
            </div>
        </div>
    );
};

export default WhoWeAre;
