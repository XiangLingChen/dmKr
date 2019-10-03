import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';
import './Shop-all-card.style.css';



const ShopAllCardDetail = ({item, addItem}) => {

    const {name, price, imageUrl} = item;
 
    return(
        <div className="shop-all-card">
            <div className="shop-all-content">
                <div className="shopAllProductImage">
                    <img src={imageUrl} alt=''/>
                </div>
                <div className="shopAllProductText">
                    <div className="ProductName">{name}</div>
                    <div className="ProductPrice">$ {price}</div>
                </div>
            </div>
    
            <button className="shop-all-custom-btn" onClick = { () => addItem(item) }>
                Add to Cart
            </button>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(ShopAllCardDetail);