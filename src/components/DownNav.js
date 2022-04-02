import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsBook, BsStar } from 'react-icons/bs';
import { RiGitRepositoryFill, RiProjectorFill } from 'react-icons/ri';
import { FiPackage } from 'react-icons/fi';

const DownNav = () => {
    return (
        <nav className='down-nav'>
            <ul>
                <li activeclassname="active"><NavLink to="/"><BsBook className='book-icon'/> Overview</NavLink></li>
                <li><NavLink to="/projects" activeclassname="active"><RiProjectorFill className='project-icon' /> Projects</NavLink></li>
                <li><NavLink to="/about-me" activeclassname="active"><FiPackage className='package-icon'/> About me</NavLink></li>
                <li><NavLink to="/contact" activeclassname="active"><BsStar className='star-icon'/> Contact me </NavLink></li> 
            </ul>
        </nav>
    )
}

export default DownNav
