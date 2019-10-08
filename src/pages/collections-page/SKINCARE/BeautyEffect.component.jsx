import React from 'react';
import ShopAllMenu from '../../../components/shop-all-menu/shop-all-menu.component';
import BeautyEffectCollection from '../../../components/Collections/Beauty-Effect-product/beautyEffect-collection.component';
import './BeautyEffect.style.css';

const BeautyEffectPage = () => (
    <div className='beautyEffectHeader-container'>
        
        <div className='beautyEffectPage-content-container'>
            <ShopAllMenu />
            <BeautyEffectCollection />
        </div>
    </div>
);

export default BeautyEffectPage;