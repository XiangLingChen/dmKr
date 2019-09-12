import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.css';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ) )}
        </div>
        <button className='cart-down-btn'>Check Out</button>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect (mapStateToProps)(CartDropdown);