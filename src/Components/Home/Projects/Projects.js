import React, { useEffect, useState } from 'react';
import Project from './Project/Project';

const Projects = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch('Projects.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    return (
        <div classname="my-5" id="projects">
            <h1 className="fw-bold ">My <span className="textColorC">Projects</span> </h1>
            <div className="container my-5">
                <div>
                    {
                        project.map(project => <Project
                            key={project.id}
                            project={project}
                        ></Project>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;