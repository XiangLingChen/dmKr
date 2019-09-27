import React from 'react';
import {ReactComponent as Logo} from '../must-have-card/best-seller.svg';
import './must-have-card.style.css';
import {connect} from 'react-redux';

import {addItem} from '../../../redux/cart/cart.action';



const MustHaveCard = ({item, addItem}) => {

    const {name, price, imageUrl} = item;
 
    return(
        <div className="must-have-card">
            <Logo className="best-seller-logo" />
            <div className="must-have-content">
                
                <div className="productImage">
                    <img src={imageUrl} alt=''/>
                </div>
                <div className="productContent">
                    <div className="contentName">{name}</div>
                    <div className="contentPrice">$ {price}</div>
                </div>
            </div>
    
            <button className="custom-btn-hm" onClick = { () => addItem(item) } >
                Add to Cart
            </button>
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(MustHaveCard);
