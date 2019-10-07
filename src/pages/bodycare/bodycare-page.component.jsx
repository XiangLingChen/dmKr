import React from 'react';
import ShopAllMenu from '../../components/shop-all-menu/shop-all-menu.component';
import BodycareProducts from '../../components/collection-preview/bodycare-collection-preview.component';

import './bodycare-page.style.css';



const BodycarePage =() => (
    <div className='bodycare-page-container'>
        <ShopAllMenu />
        <BodycareProducts />
    </div>
);

export default BodycarePage;