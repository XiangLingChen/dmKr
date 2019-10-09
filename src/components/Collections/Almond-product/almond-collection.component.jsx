import React from 'react';
import ALL_PRODUCT_DATA from '../ALL_PRODUCT_DATA';
import AlmondPreview from './almond-preview.component';
import './almond-collection.style.css';

class AlmondCollection extends React.Component {
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
                        .filter((item,idx) => ( idx === 4) )
                        .map( ({id, ...otherCollectionsProps}) => (
                            <AlmondPreview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default AlmondCollection;

