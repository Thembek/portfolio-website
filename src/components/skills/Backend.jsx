import React from 'react';
import { Helmet } from 'react-helmet';

const Backend = () => {
    return(
        <div className="skills__content">
            <Helmet>
                <title style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>A.J.G Web Portfolio | Skills</title>
            </Helmet>
            <h3 className="skills__title">Backend developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">Node Js</h3>
                            <span className="skills__level">
                                <i className='bx bxl-nodejs skills__badge-icons node' ></i>
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">Express Js</h3>
                            <span className="skills__level">
                                <i className='bx bxl-nodejs skills__badge-icons node'></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">

                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skills__level">
                                <i className='bx bxl-firebase skills__badge-icons firebase' ></i>
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">MondoDB</h3>
                            <span className="skills__level">
                                <i className='bx bxl-mongodb skills__badge-icons mongoDB' ></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Backend;