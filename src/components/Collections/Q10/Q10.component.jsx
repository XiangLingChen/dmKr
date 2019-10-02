import React from 'react';
import Q10CollectionHeader from '../../Collections/Q10/shop-by-collections/collection-header/collection-header.component';
import Q10Collection from '../../Collections/Q10/shop-by-collections/Q10-product-list/Q10-product-list.component';
import './Q10.style.css';

const Q10Page = () => (
    <div className='Q10Header-container'>
        <Q10CollectionHeader />
        <Q10Collection />
    </div>
);

export default Q10Page;