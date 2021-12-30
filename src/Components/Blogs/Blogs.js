import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../Header/NavigationBar/NavigationBar'
import Particles from "react-tsparticles";

const Blogs = () => {

    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 70,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#72b626",
                        },
                        links: {
                            color: "#72b626",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 6,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <NavigationBar></NavigationBar>
            <div className='topmargin'>
                <h1 className="textColorC mb-1">My Blogs</h1>
                <h3>I have written few blogs you can read them below</h3>
                <div className='row g-3'>
                    <div className="col-md-6 col-sm-12 my-5">
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="cards ">
                            <img src="https://uploads.toptal.io/blog/image/956/toptal-blog-image-1426676395222.jpeg" />
                            <div className="info">
                                <h2>JWT Token Blog</h2>
                                <br />
                                <a target="_blank" href="https://docs.google.com/document/d/1RWUQGKBbyVRkxcEpvNhsLg-_DkzCWINoPCh3efF4lnA/edit?usp=sharing" className="ButtonCustom">Watch</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 my-5">
                        <div data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="cards ">
                            <img src="https://miro.medium.com/max/1400/1*1nWz_qvpSoC4ZBCa1nCgjA.jpeg" />
                            <div className="info">
                                <h2>React Proptypes Blog</h2>
                                <br />
                                <a target="_blank" href="https://docs.google.com/document/d/1q0VR7b9zWrCek9xTQ4Ejoob2qy3u4TnotC1gYuwerBo/edit?usp=sharing" className="ButtonCustom">Watch</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <Link className="CustomButton1 mt-3" to="/home">Back to Home</Link>
            </div>
        </>
    );
};

export default Blogs;