import React from 'react';
import './checkout-item.style.css';

const CheckoutItem =({cartItem: {name, imageUrl, price, quantity}}) => (
    <div className='checkout-item'>
        <div className='checkoutImageContainer'>
            <img src={imageUrl} alt='item'/>
        </div>
        <div className='checkoutImageContainer2'>
            <span className='checkoutName'>{name}</span>
            <span className='checkoutQuantity'>{quantity}</span>
            <span className='checkoutPrice'>{price}</span>
            <div className='remove-button'>&#10005;</div>
        </div>
   
    </div>
);

export default CheckoutItem;