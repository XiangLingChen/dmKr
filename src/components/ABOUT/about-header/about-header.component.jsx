import React from 'react';
import WATER from './waterDrop.png';
import './about-header.style.css';

const AboutHeader = () => (
<div>
    <div className='about-header'>
        <div className='about-header-content'>
            <div className='header-title1'>WE CARE ABOUT</div>
            <div className='header-title2'>YOUR CONCERNS</div>
        </div>
    </div>
    <div className='waterDrop-container'>
        <img src={WATER} alt='waterDrop' className='waterDrop'/>
    </div>
</div>


);

export default AboutHeader;