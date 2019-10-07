import React from 'react';
import ShopAllMenu from '../../components/shop-all-menu/shop-all-menu.component';
import HairProducts from '../../components/collection-preview/hair-collection-preview.component';
import './hair-page.style.css';

const HairPage =() => (
    <div className='hair-page-container'>
        <ShopAllMenu />
        <HairProducts />
    </div>
);

export default HairPage;