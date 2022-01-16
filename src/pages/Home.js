import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import GitStarts from '../components/GitStarts';
import Technologies from '../components/Technologies';

const Home = () => {
    return (
        <div className='home-layout'>
            <div className='welcome-msg'>
                <h1>Hi 👋, I'm Michael Oladele</h1>
            </div>
            <div className='social-icons'>
                <ul>
                    <li><a href="#">< SiDiscord size={25} color='blue'/></a></li>
                    <li><a href="#">< SiDiscord size={25} color='blue'/></a></li>
                    <li><a href="#">< FaTwitter size={25} color='blue' /></a></li>
                    <li><a href="#"><FaLinkedin size={25} color='blue' /></a></li>
                </ul>
            </div>
            <div className='person-sum'>
                <p>
                I'm Michael Oladele, a passionate self-taught full stack web developer and a freelance software engineer from Nigeria. my passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.
                </p>
                <br />
                <p>
                I am also an open-source enthusiast and maintainer. I learned a lot from the open-source community and I love how collaboration and knowledge sharing happened through open-source.
                </p>
            </div>
           
            <Technologies />
            <div>
                <h2>📈 GitHub Stats</h2>
            </div>
            <GitStarts />
        </div>
    )
}

export default Home;
