import React from 'react';
import ShopAllMenu from '../../../components/shop-all-menu/shop-all-menu.component';
import AlmondCollection from '../../../components/Collections/Almond-product/almond-collection.component';
import './Almond.style.css';


const AlmondPage = () => (
    <div className='almondOilHeader-container'>
        
        <div className='almondOilPage-content-container'>
            <ShopAllMenu />
            <AlmondCollection />
        </div>
    </div>
);

export default AlmondPage;