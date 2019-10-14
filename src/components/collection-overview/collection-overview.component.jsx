import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import CollectionsPreview from '../../components/collections-preview/collections-preview.component';

import './collection-overview.style.css';

const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
        {
            collections
            
            .map( ({id, ...otherCollectionsProps}) => (
                <CollectionsPreview key={id} {...otherCollectionsProps}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);