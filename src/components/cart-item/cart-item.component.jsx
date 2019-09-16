import React from 'react';

import './cart-item.style.css';

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <div className='cartDropdown'>
        <img src={imageUrl} alt='item' className='ProductPic'/>
        <div className='dropdownDetails'>
            <span className='dropdownName'>{name}</span>
            <span className='quantityXprice'>
                <span className='dropdownQuantity'>{quantity}</span>
                <span className='dropdownMultiply'>x</span>
                <span className='dropdownPrice'>{price}</span>
            </span>
        </div>
    </div>
);

export default CartItem;