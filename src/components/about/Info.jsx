import React from 'react';

const Info = () => {
    return(
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bx-award about__icon experience' ></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">1 year, 6 months Working</span>
            </div>

            <div className="about__box">
                <i className='bx bx-briefcase-alt about__icon completed' ></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">9 Projects</span>
            </div>
            
            <div className="about__box">
                <i className='bx bx-bulb about__icon hackathons' ></i>
                <h3 className="about__title">Hackathons</h3>
                <span className="about__subtitle">Entered 2</span>
            </div>
        </div>
    );
}

export default Info;