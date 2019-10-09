import React from 'react';
import ALL_PRODUCT_DATA from '../ALL_PRODUCT_DATA';
import AloeVeraPreview from './aloeVera-preview.component';
import './aloeVera-collection.style.css';

class AquaCollection extends React.Component {
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
                        .filter((item,idx) => ( idx === 3) )
                        .map( ({id, ...otherCollectionsProps}) => (
                            <AloeVeraPreview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default AquaCollection;

