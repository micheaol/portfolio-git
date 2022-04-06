import React from 'react';


const About = () => {
    return (
        <div className='about-layout person-sum'>
             <div className='welcome-msg'>
                <h1>Hi 👋, I'm Michael Oladele</h1>
            </div>
            <div className='resume-holder'>
                <ul>
                    <li className="">
                        <a href="https://drive.google.com/file/d/1vD3iR_4GGfVuBzcjoEKiOiGtBWbsp3tc/view?usp=sharing" target="_blank" className="resume" rel="noreferrer">
                            My Resume
                        </a>
                    </li>
                </ul>
            </div>
           <p>
           "Hi! My name is Michael, and I'm a full-stack software developer who specializes in using Javascript, React, Redux, and Rails to build software solutions for small businesses."
           </p>
            <br/>
            <p>
            I know how to work remotely and collaboratively because of the experience I have gained when learning to code at Microverse, an online training school. In this school, I code every day with other developers around the world and have learned the important skills of communication and teamwork. 
                </p>
                <br />
                <p>
                I also know how to work to tight deadlines because I submit capstone projects every week and make sure I do not go past the deadline. I also know how to learn new languages quickly! I have already created some projects in React, Javascript, and HTML.
                </p>
                <br />
                <p>
                On top of this, my previous experience as a customer service Lead taught me discipline and how to meet client expectations, work hard, and always put clients first. 
                </p>
                <br />
                <p>
                Front-end: JavaScript, HTML5, CSS3, Bootstrap, Styled Components, React, Redux.
                Back-end: Ruby on Rails.
                </p>
                <br/>
                <p>
                Tools & Methods: Git, GitHub, Heroku, Mobile First, Responsive Desing, Web testing, React testing, JEST library, API REST.
                </p>
        </div>
    )
}

export default About;
