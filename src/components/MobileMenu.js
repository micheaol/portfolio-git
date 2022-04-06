import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import { SidebarData } from './SideBarData';
import './MobileMenu.css';


const MobileMenu = () => {
    const [sidebar, setSidebar ] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                     <GiHamburgerMenu size={40} color="white" onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
       
    )
}

export default MobileMenu