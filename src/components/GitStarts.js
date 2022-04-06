import React from 'react';
import gitStart from '../images/gitstart.svg';
import Analytic from '../images/gitAnalisis.svg';

const GitStarts = () => {
    return (
        <div className='git-starts-wrapper'>
            
            <div className='git-starts'>
                <img src={gitStart} alt="" />
            </div>
            <div className='git-analytic'>
                <img src={Analytic} alt="" />
            </div>
        </div>
    )
}

export default GitStarts
