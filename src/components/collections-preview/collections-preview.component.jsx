import React from 'react';
import CollectionsItemCard from '../../components/collections-item/collections-item-card.component';
import './collections-preview.style.css'

const CollectionsPreview = ({title, items}) => (
    <div className='skincare-collections'>
        <p className='skincare-title'>{title.toUpperCase()}</p>
        <div className='skincare-collections-preview'>
            {
                items
                    
                    .map(({id, ...otherItemProps}) => (
                    <CollectionsItemCard key={id} {...otherItemProps} />
                    )
                )
            }
        </div>
    </div>
);

export default CollectionsPreview;