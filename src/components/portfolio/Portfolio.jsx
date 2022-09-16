import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Work1 from '../../assets/work1.jpg';
import Work2 from '../../assets/work2.jpg';
import Work3 from '../../assets/work3.jpg';
import Work4 from '../../assets/work4.jpg';

import './portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <h2 className="section__title">My Portfolio</h2>
            <span className="section__subtitle">Built projects</span>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                <img src={Work1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Work2} alt="" />
            </SwiperSlide>
             <SwiperSlide>
                <img src={Work3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Work4} alt="" />
            </SwiperSlide>
        </Swiper>
        </div>
    );
}

export default Portfolio;