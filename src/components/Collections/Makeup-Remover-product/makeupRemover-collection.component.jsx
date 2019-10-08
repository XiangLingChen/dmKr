import React from 'react';
import ALL_PRODUCT_DATA from '../../collection-preview/ALL_PRODUCT_DATA';
import MakeupRemoverPreview from './makeupRemover-preview.component';
import './makeupRemover-collection.style.css';

class MakeupRemoverCollection extends React.Component {
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
                        .filter((item,idx) => ( idx === 6) )
                        .map( ({id, ...otherCollectionsProps}) => (
                            <MakeupRemoverPreview key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
          
        )
    }
}

export default MakeupRemoverCollection;

