import React from 'react';
import ShopAllMenu from '../../../components/shop-all-menu/shop-all-menu.component';
import AquaCollection from '../../../components/Collections/Aqua-product/aqua-collection.component';
import './Aqua.style.css';


const AquaPage = () => (
    <div className='aquaHeader-container'>
        
        <div className='aquaPage-content-container'>
            <ShopAllMenu />
            <AquaCollection />
        </div>
    </div>
);

export default AquaPage;