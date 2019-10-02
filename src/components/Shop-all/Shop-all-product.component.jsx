import React from 'react';
import ShopAllProductList from './Shop-all-product-list';
import ShopAllCardDetail from './Shop-all-card.component';

import './Shop-all-product.style.css';

class ShopAllProducts extends React.Component {
    constructor () {
        super();

        this.state = {
            allProductOverview: ShopAllProductList.items
        }

    }

    render() {
        const {allProductOverview} = this.state;
        return(
            <div className="shop-all-page">
               
                <div className='shop-all-menu'>
                    
                </div>
                <div className="shop-all-page-container">
                    <div className="shop-all-page-overview">
                        {
                            allProductOverview.map( (item) => (
                                <ShopAllCardDetail key={item.id} item = {item}/>
                            ))
                        }
                    
                    </div>
                </div>
           
            </div>
    
        
        )
    }
}

export default ShopAllProducts;

