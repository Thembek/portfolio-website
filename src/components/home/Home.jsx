import React from 'react';
import { Helmet } from 'react-helmet';

import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

import '../skills/skills.css';
import './home.css';

const Home = () => {
    return(
        <section className="home section" id="home">
            <Helmet>
                <title style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>A.J.G Web Portfolio | Home</title>
            </Helmet>
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <div className="home__img"></div>
                    <Data />
                </div>

                <ScrollDown />
            </div>
        </section>
    );
}

export default Home;