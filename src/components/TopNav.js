import React from 'react'

const TopNav = () => {
    return (
        <div className='top-nav'>
            <div className='left-content'>
                <div className='logo'>
                    <h1>logo</h1>
                </div>
                <div className='search-bar'>
                    <h1>search-bar</h1>
                </div>
                <div className='menu-left'>
                    <h1>Menu content</h1>
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
