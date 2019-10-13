import React from 'react';
import {connect} from 'react-redux';
import selectCollection from '../../redux/shop/shop.selector';
import CollectionsItemCard from '../../components/collections-item/collections-item-card.component';
import './collection-page.style.css';

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return(    
        <div className='collectionPage-container'>
            <p className='collection-title'>{title.toUpperCase()}</p>
            <div className='collectionPage-product'>
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
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);