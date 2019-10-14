import React from 'react';
import {connect} from 'react-redux';
import {selectdirectoriesOverview} from '../../redux/directory/bestSellers.selector';
import ShopAllMenu from '../../components/shop-all-menu/shop-all-menu.component';
import CollectionsItemCard from '../../components/collections-item/collections-item-card.component';
import './bestSeller-page.style.css';

const BestSellersOverviewPage = ({directoryOverview}) => {
    const {items} = directoryOverview;
    return(
        <div className='bestSeller-overview'>
            <ShopAllMenu />
            <div className='bestSeller-products'>
                {
                    items.map(item => (
                        <CollectionsItemCard key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownprops) => ({
    directoryOverview : selectdirectoriesOverview(ownprops.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(BestSellersOverviewPage);