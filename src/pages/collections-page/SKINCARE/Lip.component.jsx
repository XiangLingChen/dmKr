import React from 'react';
import ShopAllMenu from '../../../components/shop-all-menu/shop-all-menu.component';
import LipCollection from '../../../components/Collections/Lip-product/lip-collection.component';
import './Lip.style.css';

const LipPage = () => (
    <div className='lipHeader-container'>
        
        <div className='lipPage-content-container'>
            <ShopAllMenu />
            <LipCollection />
        </div>
    </div>
);

export default LipPage;