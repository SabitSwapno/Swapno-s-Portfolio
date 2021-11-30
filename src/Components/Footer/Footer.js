import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-dark">
            <div data-aos="fade-up" className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Objective</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Summary</h3>
                        <p className="text-white">To acquire confidence and fame using my prospect in the field of “Web Development”, and express my creative skills for self and company growth. </p>
                    </div>
                    <div className="col item social"><a target="_blank" href="https://www.facebook.com/Ibne.sabit.swapno"><i className="fab fa-facebook"></i></a><a target="_blank" href="https://www.linkedin.com/in/sabit-swapno-397850216/"><i className="fab fa-linkedin-in"></i></a><a target="_blank" href="https://github.com/SabitSwapno"><i className="fab fa-github"></i></a><a target="_blank" href="https://www.instagram.com/sabit.swapno/"><i className="fab fa-instagram"></i></a></div>
                </div>
                <p className="text-white mt-2">© All Right Reserved Sabit Swapno  2021</p>
            </div>
        </div>
    );
};

export default Footer;