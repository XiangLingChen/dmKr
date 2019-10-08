import React from 'react';
import ALL_PRODUCT_DATA from '../../collection-preview/ALL_PRODUCT_DATA';
import ConditionerPreview from './Conditioner-preview.component';
import './Conditioner-collection.style.css';

class ConditionerCollection extends React.Component {
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
                        .filter((item,idx) => ( idx === 11) )
                        .map( ({id, ...otherCollectionsProps}) => (
                            <ConditionerPreview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default ConditionerCollection;

