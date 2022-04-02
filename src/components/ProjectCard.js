import React from 'react';
import covid from '../images/covid.png'

const ProjectCard = ({ project}) => {

    return (
        <div className='project-card card bg-black'>
            <div className='card-header'>
                <h3>{project.title}</h3>
            </div>
            <div className="card-image-div">
                <img src={project.project_img} className="card-img-top" alt="card"/>
            </div>
            <div className='card-body'>
                <p className='card-text'>{project.summary}</p>
                <div className='card-btn card-body'>
                    <a href="#" className="btn btn-primary">Live Demo</a>
                    <a href="#" className="btn btn-primary">Source Code</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
