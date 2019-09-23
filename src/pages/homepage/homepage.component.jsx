import React from 'react';
import ResHeader from '../../components/HOMEPAGE/res-header/res-header.component';
import HompepageHero from '../../components/HOMEPAGE/homepage-hero/homepage-hero.component';
import CollectionsBanner from '../../components/HOMEPAGE/collections_banner/collections_banner.component';
import MustHave from '../../components/HOMEPAGE/must-have/must-have.component';
import Collection from '../../components/HOMEPAGE/collection/collection.component';

import './homepage.style.css';

const HomePage = () => (
    <div className="homepage">
        
        <ResHeader />
        <HompepageHero />
        <CollectionsBanner />
        <MustHave />
        <Collection />
    </div>
);
export default HomePage;
    
