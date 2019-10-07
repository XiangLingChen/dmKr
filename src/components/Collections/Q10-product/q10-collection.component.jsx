import React from 'react';
import ALL_PRODUCT_DATA from '../../collection-preview/ALL_PRODUCT_DATA';
import Q10Preview from './q10-preview.component';
import './q10-collection.style.css';

class Q10Collection extends React.Component {
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
                        .filter((item,idx) => ( idx === 2) )
                        .map( ({id, ...otherCollectionsProps}) => (
                            <Q10Preview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default Q10Collection;

