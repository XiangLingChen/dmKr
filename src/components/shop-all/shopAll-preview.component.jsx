import React from 'react';
import SkincareCard from '../../components/collection-preview/skincare-card.component';
import './shopAll-preview.style.css';

const ShopAllPreview = ({title, items}) => (
    <div className='skincare-collections'>
        <p className='skincare-title'>{title.toUpperCase()}</p>
        <div className='skincare-collections-preview'>
            {
                items
                    .map(({id, ...otherItemProps}) => (
                    <SkincareCard key={id} {...otherItemProps} />
                    )
                )
            }
        </div>
    </div>
);

export default ShopAllPreview;