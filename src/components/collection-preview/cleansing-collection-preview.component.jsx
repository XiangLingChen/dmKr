import React from 'react';
import ALL_PRODUCT_DATA from './ALL_PRODUCT_DATA';
import SkincarePreview from '../../components/collection-preview/skincare-preview.component';

import './cleansing-collection-preview.style.css';

class CleansingProducts extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
           collections: ALL_PRODUCT_DATA
  
        }
    }

    render() {
        
        const {collections} = this.state;
        return(
       
                <div className="shop-cleansingPage-container">
                    {
                        collections
                        .filter((item,idx) => idx < 9)
                        .filter((item,idx) => idx > 6)
                        .map( ({id, ...otherCollectionsProps}) => (
                            <SkincarePreview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default CleansingProducts;