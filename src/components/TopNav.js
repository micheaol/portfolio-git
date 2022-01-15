import React from 'react'
import { FaGithub, FaRegBell } from 'react-icons/fa';
import { BsPersonCircle, BsPlus, BsCaretDown } from 'react-icons/bs'

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
                    <FaRegBell size={20} color="white" />
                </div>
                <div className='plus-icon'>
                    <BsPlus size={20} color="white" />
                </div>
                <div className='avatar'>
                <BsPersonCircle size={20} color="white" />
                </div>

            </div>
        </div>
    )
}

export default TopNav
