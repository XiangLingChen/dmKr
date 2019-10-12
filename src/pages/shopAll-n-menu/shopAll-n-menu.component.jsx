import React from 'react';
import ShopAllMenu from '../../components/shop-all-menu/shop-all-menu.component';
import ShopAllCollection from '../../components/shop-all/shopAll-collection.component';
import './shopAll-n-menu.style.css';

const ShopAllnMenu =() => (
    <div className='shop-all-page-container'>
        <ShopAllMenu />
        <ShopAllCollection />
    </div>
);

export default ShopAllnMenu;