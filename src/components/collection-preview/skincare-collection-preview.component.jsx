import React from 'react';
import ALL_PRODUCT_DATA from './ALL_PRODUCT_DATA';

import SkincarePreview from '../../components/collection-preview/skincare-preview.component';
import './skincare-collection-preview.style.css';



class ShopSkincareProducts extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
           collections: ALL_PRODUCT_DATA
  
        }
    }

    render() {
        
        const {collections} = this.state;
        return(
       
                <div className="shop-skincarePage-container">
                    {
                        collections
                        .filter((item,idx) => idx < 6)
                        .map( ({id, ...otherCollectionsProps}) => (
                            <SkincarePreview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default ShopSkincareProducts;

