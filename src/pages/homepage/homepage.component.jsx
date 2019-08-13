import React from 'react';
import ResHeader from '../../components/HOMEPAGE/res-header/res-header.component';
import HompepageHero from '../../components/HOMEPAGE/homepage-hero/homepage-hero.component';
import MustHave from '../../components/HOMEPAGE/must-have/must-have.component';
import SlideParent from '../../components/HOMEPAGE/slideShow/slideParent.component';

import './homepage.style.css';

const HomePage = () => (
    <div className="homepage">
        <ResHeader />
        <HompepageHero />
        <MustHave />
        <SlideParent />
    </div>
);
export default HomePage;
    
