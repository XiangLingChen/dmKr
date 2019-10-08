import React from 'react';
import ShopAllMenu from '../../../components/shop-all-menu/shop-all-menu.component';
import ShampooCollection from '../../../components/Collections/Shampoo-product/Shampoo-collection.component';
import './Shampoo.style.css';


const ShampooPage = () => (
    <div className='shampooHeader-container'>
        
        <div className='shampooPage-content-container'>
            <ShopAllMenu />
            <ShampooCollection />
        </div>
    </div>
);

export default ShampooPage;