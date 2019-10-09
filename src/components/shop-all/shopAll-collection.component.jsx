import React from 'react';

import ShopAllPreview from './shopAll-preview.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selector';

import './shopAll-collection.style.css';

const ShopAllCollection = ({collections}) => (
       
    <div className="shop-skincarePage-container">
        {
            collections
            .map( ({id, ...otherCollectionsProps}) => (
                <ShopAllPreview key={id} {...otherCollectionsProps}/>
            ))
        }
    </div>
          
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStateToProps)(ShopAllCollection);

