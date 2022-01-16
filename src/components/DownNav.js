import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsBook, BsStar } from 'react-icons/bs';
import { RiGitRepositoryFill, RiProjectorFill } from 'react-icons/ri';
import { FiPackage } from 'react-icons/fi';

const DownNav = () => {
    return (
        <nav className='down-nav'>
            <ul>
                <li activeclassname="active"><NavLink to="/"><BsBook /> Overview</NavLink></li>
                <li><NavLink to="/repositories" activeclassname="active"><RiGitRepositoryFill /> Repositories</NavLink></li>
                <li><NavLink to="/projects" activeclassname="active"><RiProjectorFill /> Projects</NavLink></li>
                <li><NavLink to="/about-me" activeclassname="active"><FiPackage /> About me</NavLink></li>
                <li><NavLink to="/contact" activeclassname="active"><BsStar /> Contact me </NavLink></li> 
            </ul>
        </nav>
    )
}

export default DownNav
