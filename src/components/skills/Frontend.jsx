import React from 'react';
import { Helmet } from 'react-helmet';

const Frontend = () => {
    return(
        <div className="skills__content">
            <Helmet>
                <title style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>A.J.G Web Portfolio | Skills</title>
            </Helmet>
            <h3 className="skills__title">Frontend developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">
                                <i className='bx bxs-file-html skills__badge-icons html' ></i>
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">CSS3</h3>
                            <span className="skills__level">
                                <i className='bx bxs-file-css skills__badge-icons css' ></i>
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">SASS</h3>
                            <span className="skills__level">
                                <i className='bx bxl-sass skills__badge-icons sass' ></i>
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">
                                <i className='bx bxl-javascript skills__badge-icons javascript' ></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">

                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">
                                <i className='bx bxl-github skills__badge-icons github' ></i>
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">
                                <i className='bx bxl-react skills__badge-icons react' ></i>
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Flutter</h3>
                            <span className="skills__level">
                                <i className="bx bxl-flutter skills__badge-icons flutter"></i>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Frontend;