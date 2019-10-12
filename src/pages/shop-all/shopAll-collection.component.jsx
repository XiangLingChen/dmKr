import React from 'react';

import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection-page/collection-page.component';

import './shopAll-collection.style.css';

const ShopAllPage = ({match}) => (
    
    <div className='shop-all-page-container'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>   
         
);



export default ShopAllPage;

