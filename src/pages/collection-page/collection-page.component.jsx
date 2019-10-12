import React from 'react';
import {connect} from 'react-redux';
import selectCollection from '../../redux/shop/shop.selector';
import './collection-page.style.css';

const CollectionPage = ({collection}) => {
    console.log(collection);
    return ( 
        <div className='collectionPage-container'>
            <h2>Collection Page</h2>
  
        </div>
    );
    
};

const mapStaeToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStaeToProps)(CollectionPage);