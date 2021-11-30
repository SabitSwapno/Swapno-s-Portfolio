import React from 'react';

const Skills = () => {
    return (
        <div id="skills">
            <h1 className="fw-bold ">My <span className="textColorC">Skills</span></h1>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <h3>Expertise</h3>
                    <ul>
                        <li><i class="fab fa-react"></i> React JS</li>
                        <li><i class="fab fa-html5"></i> HTML5</li>
                        <li><i class="fab fa-css3-alt"> </i> CSS3</li>
                        <li><i class="fas fa-fire"></i> Firebase Authentication</li>
                        <li><i class="fas fa-file-excel"></i> Express JS</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h3>Languages</h3>
                    <ul>
                        <li><i class="fab fa-html5"></i> HTML</li>
                        <li><i class="fab fa-css3-alt"></i> CSS</li>
                        <li><i class="fab fa-js-square"></i> JS</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h3>FrameWorks</h3>
                    <ul>
                        <li><i class="fab fa-bootstrap"></i> Bootstrap</li>
                        <li><i class="fas fa-wind"></i> Tailwind CSS</li>
                        <li><i class="fab fa-mastodon"></i> Material Ui</li>
                        <li><i class="fab fa-reacteurope"></i> React Bootstrap</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h3>Tools</h3>
                    <ul>
                        <li><i class="fab fa-react"></i> Create React App</li>
                        <li><i class="fab fa-figma"></i> Figma</li>
                        <li><i class="fab fa-chrome"></i> Chrome Dev Tool</li>
                        <li><i class="fas fa-fire"></i> Firebase</li>
                        <li><i class="fab fa-kickstarter-k"></i> Heroku</li>
                        <li><i class="fab fa-mdb"></i> MongoDB</li>
                        <li>Etc</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;