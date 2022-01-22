import React from 'react';

const ProjectCard = ({ project}) => {
    console.log(project.summary);
    return (
        <div className='project-card card'>
            <div className='card-header'>
                <h3>{project.title}</h3>
            </div>
            <div className='card-body'>
                <p className='card-text'>{project.summary}</p>
                <div className='card-btn'>
                    <a href="#" className="btn btn-primary">Live Demo</a>
                    <a href="#" className="btn btn-primary">Source Code</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
