import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import Jump from 'react-reveal/Jump';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n3fjq3i', 'template_0xwy32r', form.current, 'user_jvc6hmP4nbXZyJ3FVa3fs')
            .then((result) => {
                alert("Message sent sucessfully")
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className="bgImage py-4" id="contact">
            <Jump>
                <h1 className="pb-3 text-white"><span className="textColorC ">Contact</span> Me</h1>
            </Jump>
            <div className="container">
                <div data-aos="zoom-in-right" className="row text-start d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <h2 className="text-white">GET IN TOUCH</h2>
                        <h5 className="text-white">Please fill out the form on this section to contact with me. Or call me to the number below.</h5>
                        <h5 className="text-white"><i className="fas fa-map-marker-alt pe-2"></i>  Sultanabad, Rajshahi, Bangladesh</h5>
                        <h5 className="text-white"><i className="fas fa-phone-alt pe-2"></i>  +880 1787 040018</h5>
                        <h5 className="text-white"><i className="fas fa-envelope pe-2"></i>  sabitswapno3@gmail.com</h5>
                        <a style={{
                            fontSize: "20px",
                            color: "white"
                        }} target="_blank" href="https://www.facebook.com/Ibne.sabit.swapno">
                            <i className="fab fa-facebook me-4"></i></a>
                        <a style={{
                            fontSize: "20px",
                            color: "white"
                        }} target="_blank" href="https://www.linkedin.com/in/sabit-swapno-397850216/">
                            <i className="fab fa-linkedin-in me-4"></i></a>
                        <a style={{
                            fontSize: "20px",
                            color: "white"
                        }} target="_blank" href="https://github.com/SabitSwapno">
                            <i className="fab fa-github me-4"></i></a>
                    </div>
                    <div data-aos="zoom-in-left" className="col-md-6 col-sm-12">
                        <h4 className="text-white">In case if you want to connect with me.</h4>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label text-white">Your Name</label>
                                <input type="text" name="name" className="form-control" />
                                <label for="exampleInputEmail1" className="form-label text-white">Email address</label>
                                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <label for="exampleInputEmail1" className="form-label text-white">Message</label>
                                <textarea type="text" name="message" className="form-control" />
                            </div>
                            <button type="submit" className="ButtonCustom">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;