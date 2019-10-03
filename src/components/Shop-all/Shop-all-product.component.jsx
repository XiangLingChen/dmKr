import React from 'react';
import ShopAllProductList from './Shop-all-product-list';
import ShopAllCardDetail from './Shop-all-card.component';
import {Link} from 'react-router-dom';

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
                    <div className='menu-title'>
                        <Link className='shop-all' to='/shop-all'>SHOP ALL</Link>
                    </div>
                    <div className='menu-title'>
                        <Link className='shop-by-collections' to='/directory'>COLLECTIONS</Link>
                    </div>
                        <div className='dropDown-collections'>
                            <div className='collections-directory'>SKIN CARE</div>
                                <div className='list-of-series'>
                                    <Link className='series' to='/'>Beauty Effect</Link>
                                    <Link className='series' to='/'>Aqua</Link>
                                    <Link className='series' to='/'>Q10</Link>
                                    <Link className='series' to='/'>Aloe Vera</Link>
                                    <Link className='series' to='/'>Lip</Link>
                                </div>
                            <div className='collections-directory'>CLEANSING</div>
                                <div className='list-of-series'>
                                    <Link className='series' to='/'>Makeup Remover</Link>
                                    <Link className='series' to='/'>Cleansing</Link>
                                    <Link className='series' to='/'>Peeling</Link>
                                </div>
                            <div className='collections-directory'>BODY CARE</div>
                                <div className='list-of-series'>
                                    <Link className='series' to='/'>Body Fit</Link>
                                    <Link className='series' to='/'>Body Lotion</Link>
                                </div>
                            <div className='collections-directory'>HAIR</div>
                                <div className='list-of-series'>
                                    <Link className='series' to='/'>Body Fit</Link>
                                    <Link className='series' to='/'>Body Lotion</Link>
                                </div>
                        </div>
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

