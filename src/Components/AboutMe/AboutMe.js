import React from 'react';
import NavigationBar from '../Header/NavigationBar/NavigationBar';
import Tada from 'react-reveal/Tada';

const AboutMe = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <div style={{
                marginTop: "5.5rem"
            }}>
                <Tada>
                    <h1 className="textColorC mb-3">About Me</h1>
                </Tada>
                <div className="row text-start ms-2 d-flex justify-content-center align-items-center">
                    <div data-aos="fade-left" className="col-md-6 col-sm-12">
                        <h3>Personal Infos</h3>
                        <div className="row text-start">
                            <div className="col-6">
                                <h4>First Name</h4>
                                <h5 className="fw-bolder">Sabit</h5>
                                <br />
                                <h4>Age</h4>
                                <h5 className="fw-bolder">23 Years</h5>
                                <br />
                                <h4>phone</h4>
                                <h5 className="fw-bolder">+880 1787 040018</h5>
                                <br />
                                <h4>Linked In</h4>
                                <a target="_blank" style={{
                                    color: "#72b626",
                                    fontSize: "18px"
                                }} href="https://www.linkedin.com/in/sabit-swapno-397850216/">linkedin/sabitswapno</a>
                            </div>
                            <div className="col-6">
                                <h4>Last Name</h4>
                                <h5 className="fw-bolder">Swapno</h5>
                                <br />
                                <h4>Nationality</h4>
                                <h5 className="fw-bolder">Bangladeshi</h5>
                                <br />
                                <h4>Address</h4>
                                <h5 className="fw-bolder">Sultanabad, Rajshahi</h5>
                                <br />
                                <h4>Github</h4>
                                <a target="_blank" style={{
                                    color: "#72b626",
                                    fontSize: "18px"
                                }} href="https://github.com/SabitSwapno">github/sabitswapno</a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="col-md-6 col-sm-12 mt-3">
                        <h3>My Objective</h3>
                        <h5>To acquire confidence and fame using my prospect in the field of “Web Development”, and express my
                            creative skills for self and company growth. My passion is to make templates and websites. I started to
                            learn my coding In Programming Hero. I have made 14 projects and I am highly interested in codes and
                            templates.
                        </h5>
                        <br />
                        <h3>My Education</h3>
                        <h5>Graduate from Rajshahi Polytechnic Institute
                            <br />   • Degree: Diploma Electrical Engineer
                            <br />  • Duration: 5 years (2016-2021)</h5>
                        <br />
                        <h5>
                            Completed Hign School from Argani School and College
                            <br />
                            • Class 2 - Class 10
                            <br /> • Duration: 10 years (2007-2016)
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;