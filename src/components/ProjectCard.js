import React from 'react'

const ProjectCard = () => {
    return (
        <div className='project-card card'>
            <div className='card-header'>
                <h1>Project Card</h1>
            </div>
            <div className='card-body'>
                <h3>Card Title</h3>
                <p className='card-text'>Card details</p>
                <div className='card-btn'>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
