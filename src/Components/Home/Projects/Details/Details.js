import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css'

const Details = () => {

    const { projectId } = useParams()
    const [project, setProject] = useState()
    useEffect(() => {
        fetch('/Projects.json')
            .then(res => res.json())
            .then(data => setProject(data.find(data => +projectId === data.id)))
    }, [projectId])

    return (
        <div className="container">
            <h1 className="textColorC my-4 pt-2"> Details of {project?.name}</h1>
            <div className="row g-5">
                <div className="col-md-6 col-sm-12">
                    <img className="img-fluid animatedImg" src={project?.img2} alt="" />
                </div>
                <div className="col-md-6 col-sm-12">
                    <img className="img-fluid animatedImg" src={project?.img3} alt="" />
                </div>
                <div className="my-4">
                    <h3 className="fw-bolder">Projects Overview</h3>
                    <h6>{project?.description} </h6>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-sm-12">
                        <a target="_blank" className="ButtonCustom" href={project?.livesite}>Watch live site</a>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <a target="_blank" href={project?.githublink} className="CustomButton1">See github codes</a>
                    </div>
                </div>
                <div>
                    <img className="animatedImg" style={{
                        width: "60%"
                    }} src={project?.img} alt="" />
                </div>
                <div>
                    <h3 className="fw-bolder">Technologie Used</h3>
                    <h5>{project?.technologies} </h5>
                </div>
                <div className="mt-2 mb-3 pb-2">
                    <Link className="customButton2" to="/home">Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;