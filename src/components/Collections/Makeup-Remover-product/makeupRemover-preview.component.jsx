import React from 'react';
import SkincareCard from '../../collection-preview/skincare-card.component';
import './makeupRemover-preview.style.css';

const MakeupRemoverPreview = ({title, items}) => (
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

export default MakeupRemoverPreview;