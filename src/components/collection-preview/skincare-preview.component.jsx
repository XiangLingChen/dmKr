import React from 'react';
import SkincareCard from './skincare-card.component';
import './skincare-preview.style.css';

const SkincarePreview = ({title, items}) => (
    <div className='skincare-collections'>
        <p className='skincare-title'>{title.toUpperCase()}</p>
        <div className='skincare-collections-preview'>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...otherItemProps}) => (
                    <SkincareCard key={id} {...otherItemProps} />
                    )
                )
            }
        </div>
    </div>
);

export default SkincarePreview;