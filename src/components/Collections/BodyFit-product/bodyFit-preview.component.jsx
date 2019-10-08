import React from 'react';
import SkincareCard from '../../collection-preview/skincare-card.component';
import './bodyFit-preview.style.css';

const BodyFitPreview = ({title, items}) => (
    <div className='skincare-collections'>
        
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

export default BodyFitPreview;