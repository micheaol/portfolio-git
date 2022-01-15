import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import Profile from './Profile'

const Avatar = () => {
    return (
        <div className='avatar-sec'>
           <BsPersonCircle size={270}/>
            <Profile />
        </div>
    )
}

export default Avatar
