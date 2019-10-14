import React from 'react';
import {Link} from 'react-router-dom';

import './shop-all-dropdown.style.css';

const ShopAlDropdown = () => (
    <div className='dropDown-collections'>
    <div className='collections-directory'>SKIN CARE</div>
        <div className='list-of-series'>
            <Link className='series' to='/shopall/beautyEffect'>Beauty Effect</Link>
            <Link className='series' to='/shopall/aqua'>Aqua</Link>
            <Link className='series' to='/shopall/q10'>Q10</Link>
            <Link className='series' to='/shopall/aloeVera'>Aloe Vera</Link>
            <Link className='series' to='/shopall/almond'>Almond</Link>
            <Link className='series' to='/shopall/lipBalm'>Lip</Link>
        </div>
    <div className='collections-directory'>CLEANSING</div>
        <div className='list-of-series'>
            <Link className='series' to='/shopall/makeupRemover'>Makeup Remover</Link>
            <Link className='series' to='/shopall/cleansing'>Cleansing</Link>
        </div>
    <div className='collections-directory'>BODY CARE</div>
        <div className='list-of-series'>
        <Link className='series' to='/shopall/bodyMilk'>Body Milk</Link>
            <Link className='series' to='/shopall/bodyFit'>Body Fit</Link>
        </div>
    <div className='collections-directory'>HAIR</div>
        <div className='list-of-series'>
            <Link className='series' to='/shopall/shampoo'>Shampoo</Link>
            <Link className='series' to='/shopall/conditioner'>Conditioner</Link>
        </div>
</div>
);

export default ShopAlDropdown;