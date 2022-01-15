import React from 'react';
import { GiFamilyHouse } from 'react-icons/gi';
import { MdOutlineLocationOn, MdEmail } from 'react-icons/md';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Profile = () => {
    return (
        <div className='detail-layout'>
           <div className='top-detail'>
           <h1>Michael Oladele</h1>
            <p>"Full-Stack Software Developer with a love for JavaScript. I listen to music and write in my spare time. Open to new opportunities.</p>
            <button>Edit profile</button>
           </div>
           <div className='down-detail'>
                <ul>
                    <li> <GiFamilyHouse /> Country : Nigeria</li>
                    <li><MdOutlineLocationOn /> Abuja, Nigeria</li>
                    <li>< MdEmail /> micheaol80@gmail.com</li>
                    <li><FaLinkedin /> https://www.linkedin.com/in/micheaol/</li>
                    <li>< FaTwitter /> @micheaol</li>
                </ul>
           </div>
        </div>
    )
}

export default Profile
