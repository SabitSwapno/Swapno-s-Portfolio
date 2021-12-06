import React from 'react';
import './Skills.css';

const Skills = () => {

    return (
        <>
            <div className="container my-5" id="skills">
                <h1 className="fw-bold mb-2">My <span className="textColorC">Skills</span> </h1>
                <div className="d-flex justify-content-between my-2">
                    <h3>Html</h3>
                    <h3>74%</h3>
                </div>
                <div data-aos="zoom-in-right" className="progress my-2">
                    <div className="progress-bar progress-bar-striped progress-bar-animated customBgColor" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "74%" }}></div>
                </div>
                <div className="d-flex justify-content-between my-2">
                    <h3>CSS</h3>
                    <h3>79%</h3>
                </div>
                <div data-aos="zoom-in-right" className="progress my-2">
                    <div className="progress-bar progress-bar-striped progress-bar-animated customBgColor" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "79%" }}></div>
                </div>
                <div className="d-flex justify-content-between my-2">
                    <h3>Javascript</h3>
                    <h3>61%</h3>
                </div>
                <div data-aos="zoom-in-right" className="progress my-2">
                    <div className="progress-bar progress-bar-striped progress-bar-animated customBgColor" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "61%" }}></div>
                </div>
                <div className="d-flex justify-content-between my-2">
                    <h3>React</h3>
                    <h3>73%</h3>
                </div>
                <div data-aos="zoom-in-right" className="progress my-2">
                    <div className="progress-bar progress-bar-striped progress-bar-animated customBgColor" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "73%" }}></div>
                </div>
                <div className="d-flex justify-content-between my-2">
                    <h3>Bootstrap</h3>
                    <h3>84%</h3>
                </div>
                <div data-aos="zoom-in-right" className="progress my-2">
                    <div className="progress-bar progress-bar-striped progress-bar-animated customBgColor" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "84%" }}></div>
                </div>
                <div className="d-flex justify-content-between my-2">
                    <h3>Express JS</h3>
                    <h3>70%</h3>
                </div>
                <div data-aos="zoom-in-right" className="progress my-2">
                    <div className="progress-bar progress-bar-striped progress-bar-animated customBgColor" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                </div>
                <div className="d-flex justify-content-between my-2">
                    <h3>Firebase</h3>
                    <h3>75%</h3>
                </div>
                <div data-aos="zoom-in-right" className="progress my-2">
                    <div className="progress-bar progress-bar-striped progress-bar-animated customBgColor" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                </div>
                <div className="d-flex justify-content-between my-2">
                    <h3>MongoDB</h3>
                    <h3>72%</h3>
                </div>
                <div data-aos="zoom-in-right" className="progress my-2">
                    <div className="progress-bar progress-bar-striped progress-bar-animated customBgColor" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "72%" }}></div>
                </div>
            </div>
        </>
    );
};

export default Skills;