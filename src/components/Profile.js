import React from 'react';
import { GiFamilyHouse } from 'react-icons/gi';
import { MdOutlineLocationOn, MdEmail } from 'react-icons/md';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Profile = () => {
    return (
        <div className='detail-layout'>
           <div className='top-detail'>
            <p>"Full-Stack Software Developer with love for JavaScript and Rails. I listen to music and write in my spare time. Open to new opportunities.</p>
            <button>Edit profile</button>
           </div>
           <div className='down-detail'>
                <ul>
                    <li className='country-letter'> <GiFamilyHouse /> Country : Nigeria</li>
                    <li className='state-letter'><MdOutlineLocationOn /> Abuja, Nigeria</li>
                    <li>< MdEmail /> micheaol80@gmail.com</li>
                    <li><FaLinkedin /> https://www.linkedin.com/in/micheaol/</li>
                    <li>< FaTwitter /> @micheaol</li>
                </ul>
           </div>
        </div>
    )
}

export default Profile
