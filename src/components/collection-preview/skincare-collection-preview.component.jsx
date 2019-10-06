import React from 'react';
import SKINCARE_SHOP_DATA from './skincare-collection-preview';
import ShopAllMenu from '../../components/shop-all-menu/shop-all-menu.component';
import SkincarePreview from '../../components/collection-preview/skincare-preview.component';
import './skincare-collection-preview.style.css';



class ShopSkincareProducts extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
           collections: SKINCARE_SHOP_DATA
  
        }
    }

    render() {
        
        const {collections} = this.state;
        return(
       
                <div className="shop-skincarePage-container">
                    {
                        collections.map( ({id, ...otherCollectionsProps}) => (
                            <SkincarePreview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default ShopSkincareProducts;

