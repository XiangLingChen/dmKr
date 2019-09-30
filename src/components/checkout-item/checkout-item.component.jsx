import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart,addItem, removeItem} from '../../redux/cart/cart.action';
import './checkout-item.style.css';

const CheckoutItem =({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
    <div className='checkout-item'>
        <div className='checkoutImageContainer'>
            <img src={imageUrl} alt='item'/>
        </div>
        <div className='checkoutImageContainer2'>
            <span className='checkoutName'>{name}</span>
            <span className='checkoutQuantity'>
                <span className='increase-decrease' onClick={() => removeItem(cartItem)}>&#10134;</span>
                <span className='value'>{quantity}</span>   
                <span className='increase-decrease' onClick={() => addItem(cartItem)}>&#10133;</span>
            </span>
            <span className='checkoutPrice'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#x1F5D9;</div>
        </div>
    </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);