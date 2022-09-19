import React from 'react';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Work1 from '../../assets/optimus-prime.png';
import Work2 from '../../assets/magazine-website.png';
import Work3 from '../../assets/formula1-website.png';
import Work4 from '../../assets/surfers-website.png';
import Work5 from '../../assets/todo-list-website.png';

import './portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <Helmet>
                <title style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>A.J.G Web Portfolio | Portfolio</title>
            </Helmet>
            <h2 className="section__title">My Portfolio</h2>
            <span className="section__subtitle">Built projects</span>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <a href="https://autotbots.netlify.app/" target="_blank">
                        <img src={Work1} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://awehtodolist.netlify.app/" target="_blank">
                        <img src={Work5} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide> 
                    <a href="https://formula1ace.netlify.app/" target="_blank">
                        <img src={Work3} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://thembek.github.io/Magazine-Work-One/" target="_blank">
                        <img src={Work2} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://surf-up.netlify.app/" target="_blank">
                        <img src={Work4} alt="" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Portfolio;