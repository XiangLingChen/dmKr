import React from 'react';
import SkincareCard from '../../collection-preview/skincare-card.component';
import './Conditioner-preview.style.css';

const ConditionerPreview = ({title, items}) => (
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

export default ConditionerPreview;