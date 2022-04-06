import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Overview',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiIcons.AiFillProject />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about-me',
        icon: <MdIcons.MdOutlinePersonPin />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <MdIcons.MdOutlineContactPhone />,
        cName: 'nav-text'
    },
]