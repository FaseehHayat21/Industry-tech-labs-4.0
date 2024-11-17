// import React, { useState } from 'react';
// import './SolveWithUs.css';
// import image from "../../../assets/thumbnail.png"; // Placeholder for video thumbnail

// const SolveWithUs = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     return (
//       <div className="SolveWithUs">

//       <div className="solve-with-us">
           
//             <div className="text-section">
//                 <h1>Join Us to Create Solutions!</h1>
//                 <p>Infinity Tech Labs is <em>a</em> national hub for innovators dedicated to tackling monumental challenges.</p>
//                 <div className="button-group">
//                     <button className="join-network">JOIN THE NETWORK</button>
//                 </div>
//             </div>
            
//             <div className="image-section">
//                 <div className="video-container" onClick={openModal}>
//                     <img src={image} alt="Video Thumbnail" />
//                     <div className="play-button">▶</div>
//                 </div>
//             </div>
//             {isModalOpen && (
//                 <div className="modal-overlay" onClick={closeModal}>
//                     <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                         <span className="close-button" onClick={closeModal}>&times;</span>
//                         <iframe
//                             width="560"
//                             height="315"
//                             src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
//                             title="YouTube video player"
//                             frameBorder="0"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                             ></iframe>
//                     </div>
//                 </div>
//             )}
//         </div>
//             </div>
//     );
// };

// export default SolveWithUs;
import React, { useState } from 'react';
import './SolveWithUs.css';
import thumbnailImage from "../../../assets/thumb.png"; // Placeholder for video thumbnail
import sampleVideo from "../../../assets/bg.mp4"; // Replace with the path to your video file

const SolveWithUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="SolveWithUs">
            <div className="solve-with-us">
                <div className="text-section">
                    <h1>Join Us to Create Solutions!</h1>
                    <p>Infinity Tech Labs is <em>a</em> national hub for innovators dedicated to tackling monumental challenges.</p>
                    <div className="button-group">
                        <button className="join-network">JOIN THE NETWORK</button>
                    </div>
                </div>

                <div className="image-section">
                    <div className="video-container" onClick={openModal}>
                        <img src={thumbnailImage} alt="Video Thumbnail" />
                        <div className="play-button">▶</div>
                    </div>
                </div>

                {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-button" onClick={closeModal}>&times;</span>
                            <video
                                width="560"
                                height="315"
                                controls
                                autoPlay
                                src={sampleVideo} // Use the path to your video file
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SolveWithUs;
