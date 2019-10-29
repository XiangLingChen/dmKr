import React from 'react';
import PIC1 from './sec1-1.jpg';
import PIC2 from './sec1-2.jpg';
import './secOne.style.css';

const SecOne = () => (
    <div className='secOne-container'>
        <div className='pic-container'>
            <img src={PIC1} alt='' className='pic1'/>
            <img src={PIC2} alt='' className='pic2'/>
            <div className='pic2-container'></div>
        </div>
    </div>
);

export default SecOne;