import React from 'react';
import ALL_PRODUCT_DATA from '../ALL_PRODUCT_DATA';
import AquaPreview from './aqua-preview.component';
import './aqua-collection.style.css';

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
                        .filter((item,idx) => ( idx === 1) )
                        .map( ({id, ...otherCollectionsProps}) => (
                            <AquaPreview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default AquaCollection;

