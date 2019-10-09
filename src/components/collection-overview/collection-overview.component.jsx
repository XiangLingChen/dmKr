import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selector';
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
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);