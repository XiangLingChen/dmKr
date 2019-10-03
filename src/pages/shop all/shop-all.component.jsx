import React from 'react';
import ShopAllProducts from '../../components/shop-all/Shop-all-product.component';
import ShopAllMenu from '../../components/shop-all-menu/shop-all-menu.component';
import './shop-all.style.css';

const ShopAllPage =() => (
    <div className='shop-all-page-container'>
        <ShopAllMenu />
        <ShopAllProducts />
    </div>
);

export default ShopAllPage;