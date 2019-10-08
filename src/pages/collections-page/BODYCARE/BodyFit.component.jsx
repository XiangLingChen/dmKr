import React from 'react';
import ShopAllMenu from '../../../components/shop-all-menu/shop-all-menu.component';
import BodyFitCollection from '../../../components/Collections/BodyFit-product/bodyFit-collection.component';
import './BodyFit.style.css';


const BodyFitPage = () => (
    <div className='bodyFitHeader-container'>
        
        <div className='bodyFitPage-content-container'>
            <ShopAllMenu />
            <BodyFitCollection />
        </div>
    </div>
);

export default BodyFitPage;