import React from 'react';
import ShopAllMenu from '../../components/shop-all-menu/shop-all-menu.component';
import ShopSkincareProducts from '../../components/collection-preview/skincare-collection-preview.component';
import './skincare-page.style.css'

const SkincarePage =() => (
    <div className='skincare-page-container'>
        <ShopAllMenu />
        <ShopSkincareProducts />
    </div>
);

export default SkincarePage;