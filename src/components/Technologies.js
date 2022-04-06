import React from 'react';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { DiRubyRough } from 'react-icons/di';
import { SiRubyonrails, SiPostgresql, SiRedux } from 'react-icons/si';
import code from '../images/code.gif';

const Technologies = () => {
    return (
        <div className="tech-icons-wrapper">
           <div className="tech-icons">
                <p>📨 Any freelance work? Reach me on, email 🙋‍♂️</p>
                <p>💬 Ask me about anything, I am happy to help</p>
                <div className="techs">
                <div className='tech-title'>
                    <h2 className='tech-title'>📈 languages and tools:</h2>
                </div>
                    <ul>
                        <li><a href="#"><IoLogoJavascript color='yellow'/></a></li>
                        <li><a href="#"><SiRubyonrails color='yellow'/></a></li>
                        <li><a href="#"><DiRubyRough color='yellow'/></a></li>
                        <li><a href="#"><FaReact color='yellow'/></a></li>
                        <li><a href="#"><SiPostgresql color='yellow'/></a></li>
                        <li><a href="#"><SiRedux color='yellow'/></a></li>
                    </ul>
                </div>
           </div>
           <div className="tech-image">
                <img src={code} alt="code-gif" />

           </div>
        </div>
    )
}

export default Technologies
