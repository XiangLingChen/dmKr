import React from 'react';
import ALL_PRODUCT_DATA from '../ALL_PRODUCT_DATA';
import BodyFitPreview from './bodyFit-preview.component';
import './bodyFit-collection.style.css';

class BodyFitCollection extends React.Component {
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
                        .filter((item,idx) => ( idx === 9) )
                        .map( ({id, ...otherCollectionsProps}) => (
                            <BodyFitPreview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default BodyFitCollection;

