import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../../redux/cart/cart.action';

import './details-of-product.style.css';




const Q10CardDetail = ({item, addItem}) => {

    const {name, price, imageUrl} = item;
 
    return(
        <div className="q10-card">
            <div className="q10-content">
                <div className="q10ProductImage">
                    <img src={imageUrl} alt=''/>
                </div>
                <div className="q10ProductText">
                    <div className="ProductName">{name}</div>
                    <div className="ProductPrice">$ {price}</div>
                </div>
            </div>
    
            <button className="q10-custom-btn" onClick={ ()=> addItem(item)}>
                Add to Cart
            </button>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(Q10CardDetail);
