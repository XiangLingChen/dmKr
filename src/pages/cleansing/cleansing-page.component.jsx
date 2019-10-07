import React from 'react';
import ShopAllMenu from '../../components/shop-all-menu/shop-all-menu.component';
import CleansingProducts from '../../components/collection-preview/cleansing-collection-preview.component';
import './cleansing-page.style.css'

const CleansingPage =() => (
    <div className='cleansing-page-container'>
        <ShopAllMenu />
        <CleansingProducts />
    </div>
);

export default CleansingPage;