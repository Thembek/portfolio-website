import React from 'react';

import './footer.css';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Smith</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/indzondzo_bila/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/andile-goba/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://discord.com/channels/646608657831690241/646612479815843840" className="footer__social-link" target="_blank">
                        <i className="bx bxl-discord"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;