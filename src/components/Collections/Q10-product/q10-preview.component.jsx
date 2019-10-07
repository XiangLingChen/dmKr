import React from 'react';
import SkincareCard from '../../collection-preview/skincare-card.component';
import './q10-preview.style.css';

const Q10Preview = ({title, items}) => (
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

export default Q10Preview;