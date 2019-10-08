import React from 'react';
import ShopAllMenu from '../../components/shop-all-menu/shop-all-menu.component';
import ShopAllCollection from '../../components/shop-all/shopAll-collection.component';
import './shop-all.style.css';

const ShopAllPage =() => (
    <div className='shop-all-page-container'>
        <ShopAllMenu />
        <ShopAllCollection />
    </div>
);

export default ShopAllPage;