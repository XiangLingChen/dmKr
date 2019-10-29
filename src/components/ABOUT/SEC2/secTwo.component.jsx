import React from 'react';
import PIC3 from './cleansingOil.jpg';
import PIC4 from './lemon.jpg';
import PIC5 from './cucumber.jpg';
import PIC6 from './almondOil.jpg';
import './secTwo.style.css';

const SecTwo = () => (
    <div className='secTwo-container'>
        <div className='secTwo-col1'>
            <img src={PIC3} alt='cleansingOil' className='secTwo-pic3' />
            <img src={PIC4} alt='lemon' className='secTwo-pic4' />
            <div className='secTwo-text1'>
                <h1 className='secTwo-title'>TREATMENT</h1>
                <p className='secTwo-text1-content1'>We dedicate to innovating formulas that works for different needs.</p>
                <p className='secTwo-text1-content2'>We dedicate to innovating formulas that works for different needs.</p>

            </div>
        </div>

        <div className='secTwo-col2'>
            <div className='secTwo-text2'>
                <h1 className='secTwo-title'>LET US CHANGE YOUR SKIN</h1>
                <p className='secTwo-text2-content'>Discover healthy-looking skin with formulas powered by nature and science.</p>
            </div>
            <img src={PIC5} alt='cucumber' className='secTwo-pic5' />
            <img src={PIC6} alt='almondOil' className='secTwo-pic6' />
        </div>
    </div>
);

export default SecTwo;