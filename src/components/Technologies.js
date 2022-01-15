import React from 'react';
import { IoLogoJavascript } from 'react-icons/io';
import code from '../images/code.gif';

const Technologies = () => {
    return (
        <div className="tech-icons-wrapper">
           <div className="tech-icons">
                <p>📨 Any freelance work? Reach me on, email 🙋‍♂️</p>
                <p>💬 Ask me about anything, I am happy to help</p>
                <div className="techs">
                    <h3>languages and tools:</h3>
                    <ul>
                        <li><a href="#"><IoLogoJavascript color='yellow'/></a></li>
                        <li><a href="#"><IoLogoJavascript color='yellow'/></a></li>
                        <li><a href="#"><IoLogoJavascript color='yellow'/></a></li>
                        <li><a href="#"><IoLogoJavascript color='yellow'/></a></li>
                        <li><a href="#"><IoLogoJavascript color='yellow'/></a></li>
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
