import React from 'react';
import ResHeader from '../../components/HOMEPAGE/res-header/res-header.component';
import HompepageHero from '../../components/HOMEPAGE/homepage-hero/homepage-hero.component';
import MustHave from '../../components/HOMEPAGE/must-have/must-have.component';
import './homepage.style.css';

const HomePage = () => (
    <div className="homepage">
        <ResHeader />
        <HompepageHero />
        <MustHave />
    </div>
);
export default HomePage;
    
