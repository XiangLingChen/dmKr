import React from 'react';
import ALL_PRODUCT_DATA from '../ALL_PRODUCT_DATA';
import CleansingPreview from './cleansing-preview.component';
import './cleansing-collection.style.css';

class CleansingCollection extends React.Component {
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
                        .filter((item,idx) => ( idx === 7) )
                        .map( ({id, ...otherCollectionsProps}) => (
                            <CleansingPreview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default CleansingCollection;

