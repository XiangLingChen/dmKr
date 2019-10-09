import React from 'react';
import ALL_PRODUCT_DATA from '../ALL_PRODUCT_DATA';
import LipPreview from './lip-preview.component';
import './lip-collection.style.css';

class LipCollection extends React.Component {
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
                        .filter((item,idx) => ( idx === 5) )
                        .map( ({id, ...otherCollectionsProps}) => (
                            <LipPreview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default LipCollection;

