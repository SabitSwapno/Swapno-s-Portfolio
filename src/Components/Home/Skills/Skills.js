import React from 'react';
import './Skills.css';
import htmlPic from '../../../images/html5-logo-31813.png';
import cssPic from '../../../images/css3-logo-png-transparent.png';
import bootStrapPic from '../../../images/bootstrap-logo.png';
import javascriptPic from '../../../images/javascript-39417.png';
import reactPic from '../../../images/1174949_js_react js_logo_react_react native_icon.png';
import tailwindPic from '../../../images/tailwind-css.png';
import netlifyPic from '../../../images/Netlify-Logo.wine.png';
import firebasePic from '../../../images/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3ce4fc460.4730334415239628303267.png';
import nodejsPic from '../../../images/1012820_code_development_logo_nodejs_icon.png';
import reactbootstrapPic from '../../../images/kisspng-bootstrap-react-software-framework-javascript-fron-5b0f9b1ae420f1.5052388715277494029344.png';
import mongoPic from '../../../images/1012822_code_development_logo_mongodb_programming_icon.png';
import herokuPic from '../../../images/58480873cef1014c0b5e48ea.png';






const Skills = () => {

    return (
        <>
            <div className="container my-5" id="skills">
                <h1 className="fw-bold mb-2">My <span className="textColorC">Skills</span> </h1>
                <div className='row g-3'>
                    <div className='col-md-2 col-sm-6'>
                        <div data-aos="zoom-in-right" className="card my-4 cardBg">
                            <img src={htmlPic} className="card-img-top img-fluid pt-3 px-2" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">HTML5</h4>
                            </div>
                        </div>
                        <div data-aos="zoom-in-right" className="card my-4 cardBg">
                            <img src={netlifyPic} className="card-img-top img-fluid py-4" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">NETLIFY</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 col-sm-6'>
                        <div data-aos="zoom-in-right" className="card my-4 cardBg">
                            <img src={cssPic} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">CSS3</h4>
                            </div>
                        </div>
                        <div data-aos="zoom-in-right" className="card my-4 cardBg">
                            <img src={firebasePic} className="card-img-top img-fluid pt-2 px-1" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">FIREBASE</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 col-sm-6'>
                        <div data-aos="zoom-in-right" className="card my-4 cardBg">
                            <img src={bootStrapPic} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">BOOTSTRAP</h4>
                            </div>
                        </div>
                        <div data-aos="zoom-in-right" className="card my-4 cardBg">
                            <img src={nodejsPic} className="card-img-top img-fluid p-3" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">NODE JS</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 col-sm-6'>
                        <div data-aos="zoom-in-right" className="card my-4 cardBg">
                            <img src={javascriptPic} className="card-img-top img-fluid pt-3 px-3" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">JAVASCRIPT</h4>
                            </div>
                        </div>
                        <div data-aos="zoom-in-right" className="card my-4 cardBg">
                            <img src={reactbootstrapPic} className="card-img-top img-fluid pt-2 px-3" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">REACT BOOTSTRAP</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 col-sm-6'>
                        <div data-aos="zoom-in-right" className="card my-4 cardBg">
                            <img src={reactPic} className="card-img-top img-fluid p-2" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">REACT JS</h4>
                            </div>
                        </div>
                        <div data-aos="zoom-in-right" className="card my-4 cardBg">
                            <img src={mongoPic} className="card-img-top img-fluid p-2" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">MONGODB</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 col-sm-6'>
                        <div data-aos="zoom-in-right" className="card my-4 cardBg">
                            <img src={tailwindPic} className="card-img-top img-fluid px-3 py-4" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">TAILWIND CSS</h4>
                            </div>
                        </div>
                        <div data-aos="zoom-in-right" className="card my-4 cardBg">
                            <img style={{
                                width: "75%"
                            }} src={herokuPic} className="card-img-top img-fluid ps-4 py-2" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">HEROKU</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;