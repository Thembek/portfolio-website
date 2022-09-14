import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination} from 'swiper';
import "swiper/css/pagination";

import { Data }  from './Data';
import './testimonials.css';

const Testimonial = () => {
    return(
        <section className="testimonial container section">
            <h2 className="section__title">Testimonials</h2>
            <span className="section__subtitle">What my clients say</span>

            <Swiper className="testimonials__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  "@1.50": {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
            >
                {Data.map((id, image, title, description) => {
                    return(
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} alt="" className="testimonial__img" />
                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}

export default Testimonial;
