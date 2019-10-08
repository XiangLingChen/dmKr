import React from 'react';
import ALL_PRODUCT_DATA from '../../components/collection-preview/ALL_PRODUCT_DATA';
import ShopAllPreview from './shopAll-preview.component';
import './shopAll-collection.style.css';

class ShopAllCollection extends React.Component {
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
                        .map( ({id, ...otherCollectionsProps}) => (
                            <ShopAllPreview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default ShopAllCollection;

