import React from 'react';

import './cart-item.style.css';

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <div className='cartDropdown'>
        <img src={imageUrl} alt='item' className='ProductPic'/>
        <div className='dropdownDetails'>
            <span className='dropdownName'>{name}</span>
            <span className='dropdownPrice'>{quantity} x {price}</span>
        </div>
    </div>
);

export default CartItem;