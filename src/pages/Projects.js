import React from 'react';
import ProjectCard from '../components/ProjectCard';


const Projects = () => {
    const projects = [
        {
            id:1,
            title: 'Budget app',
            summary: 'Budge app allows you to track your speding. It allows you to categorize them into different categories.',
            project_img: require('../images/budget.png'),
            project_live: 'https://check-budget-app.herokuapp.com/',
            project_source: 'https://github.com/micheaol/budget-app'

        },
        {
            id:2,
            title: 'covid-19-vaccine-data-tracker',
            summary: 'A mobile web application that displays comprehensive data for the novel coronavirus vaccine in Africa. Real live data is obtained from an API. Built with React',
            project_img: require('../images/covid.png'),
            project_live: 'https://covid-19-vaccine-tracker-africa.netlify.app/',
            project_source: 'https://github.com/micheaol/covid-19-vaccine-data-tracker'
        },
        {
            id:3,
            title: ' Awesome-books',
            summary: 'Awesome book app allows you to keep track your books. The project is to build to model library app for book lovers.',
            project_img: require('../images/book.png'),
            project_live: 'https://micheaol.github.io/Awesome-books/',
            project_source: 'https://github.com/micheaol/Awesome-books'
        },
        {
            id:4,
            title: 'Three-Pizza-Guyzz',
            summary: 'Inspired by the best pizza recipes from the internet, by not claiming the recipes, they share them with the users, to give them the possibility to bake theirs.',
            project_img: require('../images/pizza.png'),
            project_live: 'https://three-pizza-guyzz.netlify.app/',
            project_source: 'https://github.com/nicupop729/Three-Pizza-Guyzz-JS-Capstone'
        },
        {
            id:5,
            title: 'to-do-list-app',
            summary: "To-do list app is built to practice JavaScript's Objects, Factory Functions, and Module Patterns concepts. Built with JavaScript, CSS, and Webpack.",
            project_img: require('../images/todo.png'),
            project_live: 'https://micheaol-to-do-app.netlify.app/',
            project_source: 'https://github.com/micheaol/to-do-list-app'
        },
        {
            id:6,
            title: 'Leaderboard-project',
            summary: 'Leaderboard app was built to showcase my capability of working with Javascript, webpack, API. I data from API and send data to the API',
            project_img: require('../images/leader.png'),
            project_live: 'https://micheaol-leaderboard-game.netlify.app/',
            project_source: 'https://github.com/micheaol/Leaderboard-project'
        },
        
    ]

    return (
        <div className='pro-layout'>
            { projects && projects.map(project => <ProjectCard project={project} key={project.id} />)}
        </div>
       
    )
}

export default Projects
