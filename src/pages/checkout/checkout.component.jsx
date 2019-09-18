import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.style.css';

const CheckoutPage = ({cartItems, totalPrice}) => (
    <div className='checkout-page'>
        <div className='checkout-page-titles'>
            <div className='checkout-header1'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
            </div>    

            <div className='checkout-header2'>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
        </div>
        

       {
           cartItems.map(cartItem =>
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
       }
       <div className='total'>
            <span>Total : $ {totalPrice}</span>
       </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);