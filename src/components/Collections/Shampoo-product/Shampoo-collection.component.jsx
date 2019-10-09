import React from 'react';
import ALL_PRODUCT_DATA from '../ALL_PRODUCT_DATA';
import ShampooPreview from './Shampoo-preview.component';
import './Shampoo-collection.style.css';

class ShampooCollection extends React.Component {
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
                        .filter((item,idx) => ( idx === 10) )
                        .map( ({id, ...otherCollectionsProps}) => (
                            <ShampooPreview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default ShampooCollection;

