import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = (props) => {
    const { id, name, technologies, img, livesite } = props.project;
    return (
        <div className="my-5">
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="cards ">
                <img src={img} />
                <div className="info">
                    <h2>{name}</h2>
                    <h5>{technologies} </h5>
                    <a target="_blank" href={livesite} className="ButtonCustom">Live Site</a>
                    <Link to={`/details/${id}`}>
                        <button className="CustomButton1 mx-2">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project;