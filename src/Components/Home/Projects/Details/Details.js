import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import HeadShake from 'react-reveal/HeadShake';
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
            <HeadShake>
                <h1 className="textColorC my-4 pt-2"> Details of {project?.name}</h1>
            </HeadShake>
            <div className="row g-5">
                <div data-aos="fade-left" className="col-md-6 col-sm-12">
                    <img className="img-fluid animatedImg" src={project?.img2} alt="" />
                </div>
                <div data-aos="fade-right" className="col-md-6 col-sm-12">
                    <img className="img-fluid animatedImg" src={project?.img3} alt="" />
                </div>
                <div data-aos="fade-up" className="my-4">
                    <h3 className="fw-bolder">Projects Overview</h3>
                    <h6>{project?.description} </h6>
                </div>
                <div className="row g-4">
                    <div data-aos="fade-right" className="col-md-6 col-sm-12">
                        <a target="_blank" className="ButtonCustom" href={project?.livesite}>Watch live site</a>
                    </div>
                    <div data-aos="fade-left" className="col-md-6 col-sm-12">
                        <a target="_blank" href={project?.githublink} className="CustomButton1">See github codes</a>
                    </div>
                </div>
                <div data-aos="zoom-in">
                    <img className="animatedImg" style={{
                        width: "60%"
                    }} src={project?.img} alt="" />
                </div>
                <div data-aos="zoom-in-left">
                    <h3 className="fw-bolder">Technologie Used</h3>
                    <h5>{project?.technologies} </h5>
                </div>
                <div data-aos="zoom-in-left" className="mt-2 mb-3 pb-2">
                    <Link className="customButton2" to="/home">Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;