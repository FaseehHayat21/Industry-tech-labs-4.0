import React from 'react';
import './Footer.css';

// Importing the logo image
import Logo from '../../../assets/ILlogo_bg_removed.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Column 1 */}
                <div className="footer-left">
                    {/* Displaying the logo */}
                    <div className="logo">
            <img src={Logo} alt="MC MassChallenge Logo" className="logo-img" />
            <span className="separator">|</span>
  <span className="infinity-lab">INFINITY LAB</span>
          </div>
                    <h1>Mission</h1> 
                    <p>Our mission is to equip bold entrepreneurs to disrupt the 
                         status quo and to create meaningful change.</p>
                    <div className="footer-links">
                        <a href="#">Privacy policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Competition Rules</a>
                        <a href="#">Code of Conduct</a>
                        <a href="#">Financials</a>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="footer-center">
                    <div className="contact-info">
                        <a href="mailto:contact@masschallenge.org">contact@masschallenge.org</a>
                        <p>10 Fan Pier Blvd, 3rd floor Boston, MA 02210 USA</p>
                        
                    </div>
                    <div className="social-icons">
                        <a href="#" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                        </a>
                        <a href="#" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                            </svg>
                        </a>
                        <a href="#" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="footer-right">
                    <div className="nav-links">
                        <div className="nav-column">
                            <a href="#">Mission</a>
                            <a href="#">Founders</a>
                            <a href="#">Experts & Mentors</a>
                            <a href="#">Partners</a>
                            <a href="#">Join</a>
                        </div>
                        <div className="nav-column">
                            <a href="#">2023 Impact Report</a>
                            <a href="#">How to apply</a>
                            <a href="#">Success Stories</a>
                            <a href="#">Press</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>© 2024 MC MassChallenge. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
