import React, { useState, useEffect } from 'react';
import './SolveWithUs.css';
import sampleVideo from "../../../assets/we.mp4"; // Path to your video file
import Aos from "aos";
import "aos/dist/aos.css";

const SolveWithUs = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    });

    return (
        <div className="SolveWithUs">
            <div className="solve-with-us">
                <div className="text-section" data-aos="fade-right">
                    <h1>Join Us to create IMPACT!</h1>
                    <p className='text'>
                        We are dedicated to the growth of <strong>Industry 4.0 technologies</strong> &amp; <strong>Entrepreneurship Ecosystem</strong>
                    </p>
                    <div className="button-group">
                        <button className="join-network">JOIN THE NETWORK</button>
                    </div>
                </div>

                <div className="video-section" data-aos="fade-left">
                    {/* Directly display the video with autoplay */}
                    <video
                        width="100%"
                        height="auto"
                        autoPlay
                        muted // Optionally mute the video
                        loop // Optionally loop the video
                        src={sampleVideo} // Path to your video file
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default SolveWithUs;
