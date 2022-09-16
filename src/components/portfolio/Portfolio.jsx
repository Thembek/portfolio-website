import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import './portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfoliio" id="portfolio">
            <h2 className="section__title">My Portfolio</h2>
            <span className="section__subtitle">Built projects</span>
        </div>
    );
}

export default Portfolio;