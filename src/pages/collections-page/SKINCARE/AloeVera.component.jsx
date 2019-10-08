import React from 'react';
import ShopAllMenu from '../../../components/shop-all-menu/shop-all-menu.component';
import AquaCollection from '../../../components/Collections/Aloe-Vera-product/aloeVera-collection.component';
import './AloeVera.style.css';


const AloeVeraPage = () => (
    <div className='aloeVeraHeader-container'>
        
        <div className='aloeVeraPage-content-container'>
            <ShopAllMenu />
            <AquaCollection />
        </div>
    </div>
);

export default AloeVeraPage;