import React from 'react';
import { BsBook, BsStar } from 'react-icons/bs';
import { RiGitRepositoryFill, RiProjectorFill } from 'react-icons/ri';
import { FiPackage } from 'react-icons/fi';

const DownNav = () => {
    return (
        <nav className='down-nav'>
            <ul>
                <li><BsBook /> Overview</li>
                <li> <RiGitRepositoryFill /> Repositories</li>
                <li> <RiProjectorFill /> Projects</li>
                <li> <FiPackage /> Packages</li>
                <li> <BsStar /> Stars</li>
            </ul>
        </nav>
    )
}

export default DownNav
