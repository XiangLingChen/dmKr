import React from 'react';
import {Route} from 'react-router-dom';
import DirectoryHeader from '../../components/directory-header/directory-header.component';
import DirectoryPreview from '../../components/directory-preview/directory-preview.component';
import BestSellersOverviewPage from '../../pages/bestSeller-page/bestSeller-page.component';

import './directoryPage.style.css';

const DirectoryPage = ({match}) => {
    console.log(match);
    return(  <div className="directory-page-container">
            <DirectoryHeader />
            <Route exact path={`${match.path}`} component = {DirectoryPreview}/>
            <Route path={`${match.path}/:categoryId`} component = {BestSellersOverviewPage}/>
        </div>)
    
};
export default DirectoryPage;