import React from 'react';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section mission">
                    <h2>MC MASSCHALLENGE</h2>
                    <h3>Mission</h3>
                    <p>Our mission is to equip bold entrepreneurs to disrupt the status quo and to create meaningful change.</p>
                    <div className="link-column">
                        <a href="#">Mission</a>
                        <a href="#">Founders</a>
                        <a href="#">Experts & Mentors</a>
                        <a href="#">Partners</a>
                        <a href="#">Join</a>
                    </div>
                </div>

                <div className="footer-section contact">
                    <p>contact@masschallenge.org</p>
                    <p>10 Fan Pier Blvd, 3rd floor</p>
                    <p>Boston, MA 02210 USA</p>
                    <div className="social-icons">
                        <FaLinkedin className="social-icon" />
                        <FaTwitter className="social-icon" />
                        <FaYoutube className="social-icon" />
                    </div>
                </div>

                <div className="footer-section links">
                    <div className="link-column">
                        <a href="#">Privacy policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Competition Rules</a>
                        <a href="#">Code of Conduct</a>
                        <a href="#">Financials</a>
                    </div>
                    <div className="link-column">
                        <a href="#">2023 Impact Report</a>
                        <a href="#">How to apply</a>
                        <a href="#">Team</a>
                        <a href="#">Careers</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2022 Mass Challenge. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
