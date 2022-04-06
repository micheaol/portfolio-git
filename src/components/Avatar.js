import React from 'react';
import self from '../images/slack.jpg';
import Profile from './Profile'

const Avatar = () => {
    return (
        <div className='avatar-sec'>
           <div className="avatar-with-name-sec">
           <div className="avatar-image">
                <img src={self} alt="self"/>
           </div>
           <div className="profile-name">
                <h1 className='name-sec'>Michael Oladele</h1>
                <span className="user-id">micheol</span>
           </div>
           </div>
            <Profile />
        </div>
    )
}

export default Avatar
