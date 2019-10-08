import React from 'react';
import ShopAllMenu from '../../../components/shop-all-menu/shop-all-menu.component';
import MakeupRemoverCollection from '../../../components/Collections/Makeup-Remover-product/makeupRemover-collection.component';
import './MakeupRemover.style.css';


const MakeupRemoverPage = () => (
    <div className='makeupRemoverHeader-container'>
        
        <div className='makeupRemoverPage-content-container'>
            <ShopAllMenu />
            <MakeupRemoverCollection />
        </div>
    </div>
);

export default MakeupRemoverPage;