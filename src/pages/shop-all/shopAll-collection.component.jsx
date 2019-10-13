import React from 'react';
import ShopAllMenu from '../../components/shop-all-menu/shop-all-menu.component';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection-page/collection-page.component';

import './shopAll-collection.style.css';

const ShopAllPage = ({match}) => (
    
    <div className='shop-all-page-container'>
        
        <ShopAllMenu />
        <div className='shop-all-page-product-container'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
  
    </div>   
         
);



export default ShopAllPage;

