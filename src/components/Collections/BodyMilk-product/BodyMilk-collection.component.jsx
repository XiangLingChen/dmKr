import React from 'react';
import ALL_PRODUCT_DATA from '../../collection-preview/ALL_PRODUCT_DATA';
import BodyMilkPreview from './BodyMilk-preview.component';
import './BodyMilk-collection.style.css';

class BodyMilkCollection extends React.Component {
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
                        .filter((item,idx) => ( idx === 8) )
                        .map( ({id, ...otherCollectionsProps}) => (
                            <BodyMilkPreview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default BodyMilkCollection;

