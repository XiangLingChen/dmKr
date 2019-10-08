import React from 'react';
import ShopAllMenu from '../../../components/shop-all-menu/shop-all-menu.component';
import CleansingCollection from '../../../components/Collections/Cleansing-product/cleansing-collection.component';
import './CleansingCollection.style.css';


const CleansingCollectionPage = () => (
    <div className='cleansingHeader-container'>
        
        <div className='cleansingPage-content-container'>
            <ShopAllMenu />
            <CleansingCollection />
        </div>
    </div>
);

export default CleansingCollectionPage;