import React from 'react';
import ProjectCard from '../components/ProjectCard';


const Projects = () => {
    const projects = [
        {
            id:1,
            title: 'Leaderboard-project',
            summary: 'Leaderboard app was built to showcase my capability of working with Javascript, webpack, API. Leaderboard I practice fetching data from API and send data to the API',
            project_img: require('../images/covid.png')
        },
        {
            id:2,
            title: 'covid-19-vaccine-data-tracker',
            summary: 'A mobile web application that displays comprehensive data for the novel coronavirus vaccine in Africa. Real live data is obtained from an API. Built with React',
            project_img: require('../images/covid.png')
        },
        {
            id:3,
            title: ' Awesome-books',
            summary: 'Awesome book app was built to showcase the capability of Javascript, CSS, and HTML. The project is to build to model library app for book lovers. Built with Javascript',
            project_img: require('../images/covid.png')
        },
        {
            id:4,
            title: 'to-do-list-app',
            summary: "To-do list app is built to practice JavaScript's Objects, Factory Functions, and Module Patterns concepts. Built with JavaScript, CSS, and Webpack.",
            project_img: require('../images/covid.png')
        },
        {
            id:5,
            title: 'Leaderboard-project',
            summary: 'Leaderboard app was built to showcase my capability of working with Javascript, webpack, API. Leaderboard I practice fetching data from API and send data to the API',
            project_img: require('../images/covid.png')
        },
        {
            id:6,
            title: 'Leaderboard-project',
            summary: 'Leaderboard app was built to showcase my capability of working with Javascript, webpack, API. Leaderboard I practice fetching data from API and send data to the API',
            project_img: require('../images/covid.png')
        },
        {
            id:7,
            title: 'Leaderboard-project',
            summary: 'Leaderboard app was built to showcase my capability of working with Javascript, webpack, API. Leaderboard I practice fetching data from API and send data to the API',
            project_img: require('../images/covid.png')
        },
        {
            id:8,
            title: 'Leaderboard-project',
            summary: 'Leaderboard app was built to showcase my capability of working with Javascript, webpack, API. Leaderboard I practice fetching data from API and send data to the API',
            project_img: require('../images/covid.png')
        },
    ]

    return (
        <div className='pro-layout'>
            { projects && projects.map(project => <ProjectCard project={project} key={project.id} />)}
        </div>
       
    )
}

export default Projects
