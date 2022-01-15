import React from 'react'
import { FaGithub } from 'react-icons/fa';

const TopNav = () => {
    return (
        <div className='top-nav'>
            <div className='left-content'>
                <div className='logo'>
                <FaGithub size={40} color="white"/>
                </div>
                <div className='search-bar'>
                <form >
                    <input type="text" placeholder="Search.." name="search"/>
                </form>
                </div>
                <div className='menu-left'>
                    <ul>
                        <li>Pull request</li>
                        <li>Issues</li>
                        <li>Marketplace</li>
                        <li>Explore</li>
                    </ul>
                </div>
            </div>

            <div className='right-content'>
                <div className='bell-icon'>
                    <h2>bell</h2>
                </div>
                <div className='plus-icon'>
                    <h3>plus icon</h3>
                </div>
                <div className='avatar'>
                    <h3>Avatar</h3>
                </div>

            </div>
        </div>
    )
}

export default TopNav
