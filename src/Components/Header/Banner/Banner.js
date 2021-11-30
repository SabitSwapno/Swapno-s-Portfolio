import React from 'react';
import './Banner.css'
import pic from '../../../images/20201217_162333 (1).jpg';

const Banner = () => {
    return (
        <div className="row d-flex justify-content-center align-items-center mb-4 topmargin">
            <div className="col-md-6 col-sm-12">
                <img style={{
                    width: "60%",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 5px 2px gray"
                }} src={pic} alt="" />
            </div>
            <div className="col-md-6 col-sm-12 text-start pb-2">
                <h1 className="textColorC">Sabit Swapno</h1>
                <h1>Frontend | MERN Stack | Junior Web Developer</h1>
                <h4>I'm a web developer focused on crafting clean and user‑friendly experiences, I am passionate about building excellent websites that improves the lives of those around me. </h4>
                <br />
                <a className="ButtonCustom" href="https://drive.google.com/uc?id=1x3IkXKyGY5nRdhDbltD7zr_soiscQ6UK&export=download">Download My Resume</a>
            </div>
        </div>
    );
};

export default Banner;