import React from 'react';
import { Card } from 'react-bootstrap';
import './Project.css'

const Project = (props) => {
    const { name, technologies, img, livesite } = props.project;
    return (
        <div className="col-md-6 col-sm-12">
            <div className="card cardstyles">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{technologies} </p>
                    <a href={livesite} className="ButtonCustom">Live Site</a>
                    <button className="CustomButton1 mx-2">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;