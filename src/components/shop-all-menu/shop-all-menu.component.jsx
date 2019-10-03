import React from 'react';
import {Link} from 'react-router-dom';

import './shop-all-menu.style.css';

const ShopAllMenu = () => (
    <div className='menu-container'>
        <div className='menu-title'>
                <Link className='shop-all' to='/shop-all'>SHOP ALL</Link>
            </div>
            <div className='menu-title'>
                <Link className='shop-by-collections' to='/directory'>COLLECTIONS</Link>
            </div>
            <div className='dropDown-collections'>
                <div className='collections-directory'>SKIN CARE</div>
                    <div className='list-of-series'>
                        <Link className='series' to='/'>Beauty Effect</Link>
                        <Link className='series' to='/'>Aqua</Link>
                        <Link className='series' to='/'>Q10</Link>
                        <Link className='series' to='/'>Aloe Vera</Link>
                        <Link className='series' to='/'>Lip</Link>
                    </div>
                <div className='collections-directory'>CLEANSING</div>
                    <div className='list-of-series'>
                        <Link className='series' to='/'>Makeup Remover</Link>
                        <Link className='series' to='/'>Cleansing</Link>
                        <Link className='series' to='/'>Peeling</Link>
                    </div>
                <div className='collections-directory'>BODY CARE</div>
                    <div className='list-of-series'>
                        <Link className='series' to='/'>Body Fit</Link>
                        <Link className='series' to='/'>Body Lotion</Link>
                    </div>
                <div className='collections-directory'>HAIR</div>
                    <div className='list-of-series'>
                        <Link className='series' to='/'>Body Fit</Link>
                        <Link className='series' to='/'>Body Lotion</Link>
                    </div>
            </div>
    </div>
   
);

export default ShopAllMenu;