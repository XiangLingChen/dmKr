import React from 'react';
import HeaderCarousel from '../../components/HOMEPAGE/carousel/carousel.component';

import HompepageHero from '../../components/HOMEPAGE/homepage-hero/homepage-hero.component';
import CollectionsBanner from '../../components/HOMEPAGE/collections_banner/collections_banner.component';
import MustHave from '../../components/HOMEPAGE/must-have/must-have.component';
import Collection from '../../components/HOMEPAGE/collection/collection.component';

import './homepage.style.css';

const HomePage = () => (
    <div className="homepage">
        <HeaderCarousel />
        
        <HompepageHero />
        <CollectionsBanner />
        <MustHave />
        <Collection />
    </div>
);
export default HomePage;
    
