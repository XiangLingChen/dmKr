import React from 'react';
import PIC9 from './sec3.jpg';
import './secThree.style.css';

const SecThree = () => (
    <div className='secThree-container'>
        <div className='secThree-text'>
            <h1 className='secThree-title'>RESULTS - DRIVEN</h1>
            <p className='secThree-content'>With our most advanced skin care technology, we promise to create effective skin care solutions that give you real results.</p>
        </div>
        <div className='Three-pic-container'>
            <img src={PIC9} alt='pink' className='Three-pic'/>
        </div>
    </div>
);

export default SecThree;