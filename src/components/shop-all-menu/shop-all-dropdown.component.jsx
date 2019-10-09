import React from 'react';
import {Link} from 'react-router-dom';

import './shop-all-dropdown.style.css';

const ShopAlDropdown = () => (
    <div className='dropDown-collections'>
    <div className='collections-directory'>SKIN CARE</div>
        <div className='list-of-series'>
            <Link className='series' to='/beautyeffect'>Beauty Effect</Link>
            <Link className='series' to='/aqua'>Aqua</Link>
            <Link className='series' to='/q10'>Q10</Link>
            <Link className='series' to='/aloevera'>Aloe Vera</Link>
            <Link className='series' to='/almond'>Almond</Link>
            <Link className='series' to='/lip'>Lip</Link>
        </div>
    <div className='collections-directory'>CLEANSING</div>
        <div className='list-of-series'>
            <Link className='series' to='/makeupremover'>Makeup Remover</Link>
            <Link className='series' to='/cleansingCollection'>Cleansing</Link>
        </div>
    <div className='collections-directory'>BODY CARE</div>
        <div className='list-of-series'>
        <Link className='series' to='/bodymilk'>Body Milk</Link>
            <Link className='series' to='/bodyfit'>Body Fit</Link>
        </div>
    <div className='collections-directory'>HAIR</div>
        <div className='list-of-series'>
            <Link className='series' to='/shampoo'>Shampoo</Link>
            <Link className='series' to='/conditioner'>Conditioner</Link>
        </div>
</div>
);

export default ShopAlDropdown;