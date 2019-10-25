import React from 'react';
import AboutHeader from '../../components/ABOUT/about-header/about-header.component';
import SecOne from '../../components/ABOUT/SEC1/secOne.component';

import SecThree from '../../components/ABOUT/SEC3/secThree.component';
import './about.style.css';

const AboutPage = () => (
    <div className='about-page-container'>
        <AboutHeader />
        <div>3 icons</div>
        <SecOne />
        <div>treatment</div>
        <SecThree />
    </div>
);

export default AboutPage;