import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import './cart-dropdown.style.css';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {   cartItems.length ?
                (
                    cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                    ) )
                ) : (
                    <span className='empty-message'>
                        Your cart is empty !
                    </span>
                )
            }
        </div>
        <button className='cart-down-btn' onClick={ () => {
            history.push('./checkout');
            dispatch(toggleCartHidden());
            } }>Check Out</button>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter( connect(mapStateToProps)(CartDropdown) );

