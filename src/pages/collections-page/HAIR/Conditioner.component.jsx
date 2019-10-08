import React from 'react';
import ShopAllMenu from '../../../components/shop-all-menu/shop-all-menu.component';
import ConditionerCollection from '../../../components/Collections/Conditioner-product/Conditioner-collection.component';
import './Conditioner.style.css';


const ConditionerPage = () => (
    <div className='conditionerHeader-container'>
        
        <div className='conditionerPage-content-container'>
            <ShopAllMenu />
            <ConditionerCollection />
        </div>
    </div>
);

export default ConditionerPage;