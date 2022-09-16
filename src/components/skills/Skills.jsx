import React from 'react';
import { Helmet } from 'react-helmet';

import Frontend from './Frontend';
import Backend from './Backend';
import './skills.css';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <Helmet>
                <title style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>A.J.G Web Portfolio | Skills</title>
            </Helmet>
            <h2 className="section__title">My technical level</h2>
            <span className="section__subtitle">Skills</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    );
}

export default Skills;