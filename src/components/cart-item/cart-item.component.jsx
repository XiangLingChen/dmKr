import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart} from '../../redux/cart/cart.action';
import './cart-item.style.css';

const CartItem = ({ cartItem, clearItem,  }) => {
    const {imageUrl, price, name, quantity} = cartItem;
    return(
        <div className='cartDropdown'>
        <img src={imageUrl} alt='item' className='ProductPic'/>
        <div className='dropdownDetails'>
            <span className='dropdownName'>{name}</span>
            <span className='quantityXprice'>
                <span className='dropdownQuantity'>{quantity}</span>
                <span className='dropdownMultiply'>x</span>
                <span className='dropdownPrice'>$ {price}</span>
            </span>
        </div>
        <div className='remove-btn' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
});


export default connect(null, mapDispatchToProps)(CartItem);