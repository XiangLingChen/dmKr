import React from 'react';
import Q10CollectionHeader from '../../components/Collections/Q10-header/Q10-collection-header.component';
import ShopAllMenu from '../../components/shop-all-menu/shop-all-menu.component';
import Q10Collection from '../../components/Collections/Q10-product-list/Q10-product-list.component';
import './Q10.style.css';

const Q10Page = () => (
    <div className='Q10Header-container'>
        <Q10CollectionHeader />
        <div className='Q10Page-content-container'>
            <ShopAllMenu />
            <Q10Collection />
        </div>
    </div>
);

export default Q10Page;