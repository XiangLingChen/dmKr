import React from 'react';
import ShopAllMenu from '../../../components/shop-all-menu/shop-all-menu.component';
import BodyMilkCollection from '../../../components/Collections/BodyMilk-product/BodyMilk-collection.component';
import './BodyMilk.style.css';


const BodyMilkPage = () => (
    <div className='bodyMilkHeader-container'>
        
        <div className='bodyMilkPage-content-container'>
            <ShopAllMenu />
            <BodyMilkCollection />
        </div>
    </div>
);

export default BodyMilkPage;