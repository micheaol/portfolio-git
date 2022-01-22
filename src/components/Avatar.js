import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import self from '../images/slack.png';
import Profile from './Profile'

const Avatar = () => {
    return (
        <div className='avatar-sec'>
           <img src={self} alt="self"/>
            <Profile />
        </div>
    )
}

export default Avatar
