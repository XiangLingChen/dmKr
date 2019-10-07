import React from 'react';
import {Link} from 'react-router-dom';

import './shop-all-dropdown.style.css';

const ShopAlDropdown = () => (
    <div className='dropDown-collections'>
    <Link className='collections-directory' to='/skincare'>SKIN CARE</Link>
        <div className='list-of-series'>
            <Link className='series' to='/'>Beauty Effect</Link>
            <Link className='series' to='/'>Aqua</Link>
            <Link className='series' to='/q10'>Q10</Link>
            <Link className='series' to='/'>Aloe Vera</Link>
            <Link className='series' to='/'>Almond Oil</Link>
            <Link className='series' to='/'>Almond Flower</Link>
            <Link className='series' to='/'>Lip</Link>
        </div>
    <Link className='collections-directory' to='/cleansing'>CLEANSING</Link>
        <div className='list-of-series'>
            <Link className='series' to='/'>Makeup Remover</Link>
            <Link className='series' to='/'>Cleansing</Link>
        </div>
    <Link className='collections-directory' to='/bodycare'>BODY CARE</Link>
        <div className='list-of-series'>
        <Link className='series' to='/'>Body Milk</Link>
            <Link className='series' to='/'>Body Fit</Link>
        </div>
    <Link className='collections-directory' to='/hair'>HAIR</Link>
        <div className='list-of-series'>
            <Link className='series' to='/'>Shampoo</Link>
            <Link className='series' to='/'>Conditioner</Link>
        </div>
</div>
);

export default ShopAlDropdown;