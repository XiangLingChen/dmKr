import React from 'react';
import {withRouter} from 'react-router-dom';
import CollectionsItemCard from '../../components/collections-item/collections-item-card.component';
import './collections-preview.style.css'

const CollectionsPreview = ({title, items, match, history, routeName}) => (
    <div className='skincare-collections'>
        <p className='skincare-title' onClick={()=> history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</p>
        <div className='skincare-collections-preview'>
            {
                items
                    
                    .map(item => (
                    <CollectionsItemCard key={item.id} item={item} />
                    )
                )
            }
        </div>
    </div>
);

export default withRouter(CollectionsPreview);